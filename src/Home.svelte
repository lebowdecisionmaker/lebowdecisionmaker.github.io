<script>
    import { onMount } from 'svelte';
    import Results from './Results.svelte';
    import UserInfoForm from './lib/UserInfoForm.svelte';
    import {
        getAllSurveys,
        getSurveyById,
        getQuestionsForSurvey,
        saveUserSurveySubmission
    } from './services/databaseService';

    // ... (all other existing script content like surveys, selectedSurvey, etc.) ...
    let surveys = [];
    let selectedSurvey = null;
    let selectedSurveyId = null;
    let questions = [];
    let currentIndex = 0;
    let currentQuestion;
    let topicCounters = {};
    let answerHistory = [];
    let surveyFlowState = 'selectingSurvey';
    let isLoading = false;
    let error = null;
    let generalMessage = '';


    onMount(async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const surveyIdFromUrl = urlParams.get('survey');
        if (surveyIdFromUrl) {
            try {
                await loadAndSelectSurvey(surveyIdFromUrl);
            } catch (err) {
                error = "Failed to load the requested survey from URL.";
                console.error(error, err);
                await loadSurveyList();
            }
        } else {
            await loadSurveyList();
            // surveyFlowState will be 'selectingSurvey' from loadSurveyList
        }
    });

    const loadSurveyList = async () => {
        try {
            isLoading = true;
            error = null;
            surveys = await getAllSurveys();
            surveyFlowState = 'selectingSurvey';
            isLoading = false;
        } catch (err) {
            console.error("Error loading surveys:", err);
            error = "Failed to load surveys. Please try again later.";
            isLoading = false;
        }
    };

    const loadAndSelectSurvey = async (surveyId) => {
        try {
            isLoading = true;
            error = null;
            const survey = await getSurveyById(surveyId);
            const surveyQuestions = await getQuestionsForSurvey(surveyId);

            if (!survey || !surveyQuestions || surveyQuestions.length === 0) {
                throw new Error(`Survey (ID: ${surveyId}) not found or has no questions.`);
            }

            selectedSurveyId = surveyId;
            selectedSurvey = survey;
            questions = surveyQuestions;
            currentIndex = 0;
            currentQuestion = questions[currentIndex];
            topicCounters = (survey.topics || []).reduce((acc, topic) => {
                acc[topic] = 0;
                return acc;
            }, {});
            answerHistory = [];
            surveyFlowState = 'takingSurvey';
            isLoading = false;
        } catch (err) {
            console.error(`Error loading survey ID ${surveyId}:`, err);
            isLoading = false;
            surveyFlowState = 'selectingSurvey'; // Fallback to selection
            throw err;
        }
    };

    const selectSurvey = async (survey) => {
        try {
            await loadAndSelectSurvey(survey.id);
            const url = new URL(window.location);
            url.searchParams.set('survey', survey.id);
            window.history.pushState({}, '', url);
        } catch (err) {
            error = `Failed to load the selected survey (${survey.name}). Please try again.`;
            // surveyFlowState should be handled by loadAndSelectSurvey on error
        }
    };

    const handleAnswer = (selectedTopics, buttonText) => {
        answerHistory.push({
            question: currentQuestion.question,
            answer: buttonText,
            topics: selectedTopics
        });
        selectedTopics.forEach(topic => {
            if (topicCounters.hasOwnProperty(topic)) {
                 topicCounters[topic]++;
            } else {
                // This case should ideally not happen if topics are well-defined in the survey
                console.warn(`Topic "${topic}" was selected but not pre-initialized in topicCounters for survey "${selectedSurvey.name}". Initializing to 1.`);
                topicCounters[topic] = 1;
            }
        });
        nextQuestion();
    };

    const nextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            currentIndex++;
            currentQuestion = questions[currentIndex];
        } else {
            surveyFlowState = 'userInfo';
        }
    };

    const handleUserInfoSubmit = async (event) => {
        const { userName, userEmail } = event.detail;
        generalMessage = 'Saving your results...';
        error = null;

        // Determine the finalResult based on topicCounters
        let maxScore = -1;
        let topChoices = [];

        // Ensure topicCounters is not empty and has own properties
        if (topicCounters && Object.keys(topicCounters).length > 0) {
            for (const topic in topicCounters) {
                if (topicCounters.hasOwnProperty(topic)) { // Good practice
                    if (topicCounters[topic] > maxScore) {
                        maxScore = topicCounters[topic];
                        topChoices = [topic];
                    } else if (topicCounters[topic] === maxScore) {
                        topChoices.push(topic);
                    }
                }
            }
        }
        
        let finalResultString = "N/A"; // Default if no topics or scores
        if (topChoices.length > 0) {
            finalResultString = topChoices.join(' and '); // e.g., "MBA", or "MBA and MS" if tied
        }
        // Example: if topicCounters = { 'MBA': 3, 'MS': 2 }, finalResultString = "MBA"
        // Example: if topicCounters = { 'MBA': 3, 'MS': 3 }, finalResultString = "MBA and MS"

        try {
            await saveUserSurveySubmission({
                surveyId: selectedSurveyId,
                surveyName: selectedSurvey.name,
                userName: userName,
                userEmail: userEmail,
                topicResults: topicCounters, // This is the raw counts, e.g., { 'MBA': 3, 'MS': 2 }
                answerHistory: answerHistory,
                finalResult: finalResultString // NEWLY ADDED FIELD
            });
            generalMessage = 'Results saved successfully! Showing your results...';
            surveyFlowState = 'showingResults';
        } catch (err) {
            console.error("Failed to save submission:", err);
            error = "There was an error saving your results. Please try again or contact support.";
            generalMessage = '';
            // User remains on 'userInfo' state to allow retry or see the error.
        }
    };

    const handleRestart = () => {
        selectedSurvey = null;
        selectedSurveyId = null;
        questions = [];
        currentIndex = 0;
        currentQuestion = null;
        answerHistory = [];
        topicCounters = {};
        error = null;
        generalMessage = '';
        const url = new URL(window.location);
        url.searchParams.delete('survey');
        window.history.pushState({}, '', url);
        // surveyFlowState = 'selectingSurvey'; // Will be set by loadSurveyList
        loadSurveyList();
    };
</script>

<main>
    {#if isLoading}
        <div class="loading-overlay">
            <div class="spinner"></div>
            Loading...
        </div>
    {/if}

    {#if error}
        <div class="error-message-bar">
            <p>{error}</p>
            <button on:click={() => error = null}>Dismiss</button>
        </div>
    {/if}

    {#if generalMessage && surveyFlowState !== 'showingResults'}
        <div class="general-message-bar">
            <p>{generalMessage}</p>
        </div>
    {/if}


    {#if surveyFlowState === 'selectingSurvey'}
        <div class="survey-selection">
            <h2>Select a Decision Aid</h2>
            {#if surveys.length > 0}
                <div class="survey-list">
                    {#each surveys as survey (survey.id)}
                        <button class="survey-button" on:click={() => selectSurvey(survey)}>
                            {survey.name}
                        </button>
                    {/each}
                </div>
            {:else if !isLoading}
                <p>No surveys available. Please add some surveys first.</p>
            {/if}
        </div>
    {:else if surveyFlowState === 'takingSurvey' && selectedSurvey && currentQuestion}
        <div class="main-content">
            <div class="question-container">
                <h3>Survey: {selectedSurvey.name}</h3>
                <h2>{currentQuestion.question}</h2>
                <div class="button-container">
                    {#each currentQuestion.buttons as button (button.text + Math.random())} <button on:click={() => handleAnswer(button.selectedTopics, button.text)}>
                            {button.text}
                        </button>
                    {/each}
                </div>
                <div class="progress">
                    Question {currentIndex + 1} of {questions.length}
                </div>
            </div>
        </div>
    {:else if surveyFlowState === 'userInfo'}
        <UserInfoForm
            surveyName={selectedSurvey?.name}
            on:submitUserInfo={handleUserInfoSubmit}
        />
    {:else if surveyFlowState === 'showingResults'}
        <Results
            topicResults={topicCounters}
            onRestart={handleRestart}
            answerHistory={answerHistory}
            surveyName={selectedSurvey?.name}
        />
    {:else if !isLoading && surveyFlowState === 'takingSurvey' && (!selectedSurvey || !currentQuestion) && !error}
        <div class="no-questions">
            <p>There was an issue loading questions for this survey, or the survey is empty.</p>
            <button on:click={handleRestart}>Select Another Survey</button>
        </div>
    {/if}
</main>

<style>
    /* ... (Your existing styles from the previous answer) ... */
    main {
        width: 100%;
    }

    .loading-overlay { /* Changed from .loading to avoid conflict with App.svelte */
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.85); /* Darker for more focus */
        display: flex;
        flex-direction: column; /* Stack spinner and text */
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 1.5rem;
        z-index: 1000;
    }
    .spinner {
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: #FFBD2D; /* Accent color for spinner */
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        margin-bottom: 1rem; /* Space between spinner and text */
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }


    .error-message-bar, .general-message-bar { /* Changed from .error */
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center; /* Center text if button is not present */
    }
    .error-message-bar {
        background-color: #f8d7da;
        color: #721c24;
    }
    .general-message-bar {
        background-color: #d1ecf1;
        color: #0c5460;
    }

    .error-message-bar button {
        background-color: #721c24;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
    }

    .survey-selection {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
    }

    .survey-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 400px;
        margin: 2rem auto;
    }

    .survey-button {
        padding: 1rem 2rem;
        font-size: 1.1rem;
        background-color: #1a1a1a;
        color: white;
        border: 1px solid #333;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.2s, border-color 0.2s;
    }

    .survey-button:hover {
        background-color: #FFBD2D;
        border-color: #FFBD2D;
        color: #1a1a1a;
    }

    .main-content {
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
    }

    .question-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        padding: 1.5rem;
        background-color: #1f1f1f; /* Slightly different background for question area */
        border-radius: 12px;
    }

    h2 { /* Styling for question text and survey selection title */
        font-size: 1.5rem;
        color: rgba(255, 255, 255, 0.87);
        text-align: center;
        margin: 0;
        font-weight: 500; /* Bolder for emphasis */
    }

    h3 { /* Styling for "Survey: Survey Name" */
        font-size: 1.1rem; /* Smaller than question */
        color: rgba(255, 255, 255, 0.7);
        margin: 0 0 0.5rem 0; /* Spacing below */
        font-weight: normal;
    }

    .button-container {
        display: flex;
        gap: 1rem; /* Reduced gap slightly */
        justify-content: center;
        flex-wrap: wrap;
    }

    /* Re-define button styles if they are different from App.svelte's global ones or need override */
    .question-container button, .no-questions button {
        padding: 10px 20px;
        background-color: #333; /* Darker buttons */
        color: white;
        border: 1px solid #555;
        cursor: pointer;
        border-radius: 8px;
        font-size: 1em;
        font-weight: 500;
        transition: background-color 0.25s, border-color 0.25s;
    }

    .question-container button:hover, .no-questions button:hover {
        background-color: #FFBD2D;
        border-color: #FFBD2D;
        color: #1a1a1a; /* Dark text on hover for better contrast */
    }

    .progress {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.9rem;
        margin-top: 1rem;
    }

    .no-questions {
        text-align: center;
        padding: 2rem 1rem;
        color: rgba(255, 255, 255, 0.87);
        background-color: #1f1f1f;
        border-radius: 12px;
    }
    .no-questions p {
        margin-bottom: 1rem;
    }
</style>