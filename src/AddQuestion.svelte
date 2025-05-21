<script>
    import { writable } from 'svelte/store';
    import {
        createSurvey,
        getAllSurveys,
        getSurveyById,
        deleteSurvey,
        addQuestion,
        getQuestionsForSurvey,
        deleteQuestion,
        updateQuestion,
        getSurveySubmissions
    } from './services/databaseService';
    import { onMount } from 'svelte';

    // ... (all existing state variables like surveyName, topics, isLoading, etc.)
    let surveyName = '';
    let numTopics = 2;
    let topics = [];
    let question = '';
    let numOptions = 2;
    let buttons = [];
    let existingSurveys = [];
    let selectedSurveyForEditing = null;
    let selectedSurveyIdForEditing = null;
    let editMode = false;
    let existingQuestions = [];
    let showAddQuestionForm = false;
    let isLoading = false;

    let areTopicsAdded = writable(false);
    let isSurveyNameAdded = writable(false);
    let showSurveySelection = true;

    let editingQuestion = null;
    let editingQuestionId = null;

    let showAnalysisView = false;
    let analysisData = null;
    let analyzedSurveyName = '';
    let analysisError = '';

    // --- New state for User Response Detail View ---
    let showUserResponseDetailView = false;
    let selectedUserForDetail = null; // Will store { userName, answerHistory, ... }
    // --- End New state ---


    onMount(async () => {
        await loadSurveys();
    });

    // ... (loadSurveys, editQuestion, createNewSurvey, editExistingSurvey, toggleAddQuestionForm, deleteSurveyHandler, deleteQuestionHandler)
    // ... (initializeTopics, initializeButtons, addSurveyName, addTopics, addOrUpdateQuestion, cancelEditingQuestion)
    // ... (handleNumTopicsChange, handleNumOptionsChange)

    const loadSurveys = async () => {
        try {
            isLoading = true;
            existingSurveys = await getAllSurveys();
            isLoading = false;
        } catch (error) {
            console.error("Error loading surveys:", error);
            isLoading = false;
        }
    };

    const editQuestion = (q) => {
        editingQuestionId = q.id;
        question = q.question;
        numOptions = q.buttons.length;
        buttons = q.buttons.map(btn => {
            const selectedTopicsBooleans = new Array(topics.length).fill(false);
            btn.selectedTopics.forEach(topicName => {
                const index = topics.indexOf(topicName);
                if (index !== -1) {
                    selectedTopicsBooleans[index] = true;
                }
            });
            return {
                text: btn.text,
                selectedTopics: selectedTopicsBooleans
            };
        });
        showAddQuestionForm = true;
        editingQuestion = q;
    };

    const createNewSurvey = () => {
        showSurveySelection = false;
        editMode = false;
        isSurveyNameAdded.set(false);
        areTopicsAdded.set(false);
        surveyName = '';
        selectedSurveyForEditing = null;
        selectedSurveyIdForEditing = null;
        numTopics = 2;
        initializeTopics();
        showAnalysisView = false;
        analysisData = null;
        showUserResponseDetailView = false; // Reset detail view
        selectedUserForDetail = null;     // Reset selected user
    };

    const editExistingSurvey = async (survey) => {
        try {
            isLoading = true;
            selectedSurveyIdForEditing = survey.id;
            selectedSurveyForEditing = survey.name;
            surveyName = survey.name;
            editMode = true;
            showSurveySelection = false;
            isSurveyNameAdded.set(true);
            areTopicsAdded.set(true);
            topics = survey.topics || [];
            existingQuestions = await getQuestionsForSurvey(selectedSurveyIdForEditing);
            showAddQuestionForm = false;
            isLoading = false;
            showAnalysisView = false;
            analysisData = null;
            showUserResponseDetailView = false; // Reset detail view
            selectedUserForDetail = null;     // Reset selected user
        } catch (error) {
            console.error("Error setting up survey for editing:", error);
            isLoading = false;
        }
    };

    const toggleAddQuestionForm = () => {
        showAddQuestionForm = !showAddQuestionForm;
        if (showAddQuestionForm) {
            if (!editingQuestion) {
                question = '';
                editingQuestionId = null;
                initializeButtons();
            }
        } else {
            editingQuestion = null;
            editingQuestionId = null;
        }
    };

    const deleteSurveyHandler = async (survey) => {
        if (window.confirm(`Are you sure you want to delete the survey "${survey.name}" and all its questions and user submissions? This action cannot be undone.`)) {
            try {
                isLoading = true;
                await deleteSurvey(survey.id);
                await loadSurveys();
                if (selectedSurveyIdForEditing === survey.id && showAnalysisView) {
                    showAnalysisView = false;
                    analysisData = null;
                    showUserResponseDetailView = false; // Reset detail view
                    selectedUserForDetail = null;     // Reset selected user
                }
                isLoading = false;
            } catch (error) {
                console.error("Error deleting survey:", error);
                isLoading = false;
            }
        }
    };

    const deleteQuestionHandler = async (questionId) => {
        if (window.confirm('Are you sure you want to delete this question?')) {
            try {
                isLoading = true;
                await deleteQuestion(questionId);
                existingQuestions = await getQuestionsForSurvey(selectedSurveyIdForEditing);
                isLoading = false;
            } catch (error) {
                console.error("Error deleting question:", error);
                isLoading = false;
            }
        }
    };


    const initializeTopics = () => {
        numTopics = Math.max(2, Math.min(10, Number(numTopics) || 2));
        topics = new Array(numTopics).fill('');
    };

    const initializeButtons = () => {
        numOptions = Math.max(2, Math.min(10, Number(numOptions) || 2));
        // Ensure topics array is populated before using its length
        const currentTopicsLength = Array.isArray(topics) ? topics.length : 0;
        buttons = Array(numOptions).fill().map(() => ({
            text: '',
            selectedTopics: new Array(currentTopicsLength).fill(false)
        }));
    };


    const addSurveyName = () => {
        if (!surveyName.trim()) {
            alert('Please enter a survey name.');
            return;
        }
        if (!editMode && existingSurveys.some(s => s.name.toLowerCase() === surveyName.trim().toLowerCase())) {
            alert('A survey with this name already exists. Please choose a different name.');
            return;
        }
        isSurveyNameAdded.set(true);
    };

    const addTopics = async () => {
        numTopics = Math.max(2, Math.min(10, Number(numTopics) || 2));
        if (topics.length !== numTopics) {
            topics = topics.slice(0, numTopics);
            while(topics.length < numTopics) topics.push('');
        }

        if (topics.some(topic => !topic.trim())) {
            alert('Please enter all topic names.');
            return;
        }
        if (new Set(topics.map(t => t.trim().toLowerCase())).size !== topics.length) {
            alert('Topic names must be unique.');
            return;
        }

        try {
            isLoading = true;
            const surveyData = {
                name: surveyName.trim(),
                topics: topics.map(t => t.trim())
            };
            selectedSurveyIdForEditing = await createSurvey(surveyData);
            selectedSurveyForEditing = surveyName.trim();
            areTopicsAdded.set(true);
            existingQuestions = [];
            initializeButtons();
            isLoading = false;
        } catch (error) {
            console.error("Error creating survey with topics:", error);
            alert("Failed to create survey. Check console for details.");
            isLoading = false;
        }
    };


    const addOrUpdateQuestion = async () => {
        if (!question.trim()) {
            alert('Please enter the question text.');
            return;
        }
        if (buttons.some(btn => !btn.text.trim())) {
            alert('Please enter text for all options.');
            return;
        }
        if (buttons.some(btn => !btn.selectedTopics.some(t => t))) {
            alert('Each option must be associated with at least one topic.');
            return;
        }

        try {
            isLoading = true;
            const questionData = {
                question: question.trim(),
                buttons: buttons.map(btn => ({
                    text: btn.text.trim(),
                    selectedTopics: topics.filter((_, index) => btn.selectedTopics[index])
                }))
            };

            if (editingQuestionId) {
                await updateQuestion(editingQuestionId, questionData);
            } else {
                await addQuestion(selectedSurveyIdForEditing, questionData);
            }

            existingQuestions = await getQuestionsForSurvey(selectedSurveyIdForEditing);
            question = '';
            editingQuestionId = null;
            editingQuestion = null;
            initializeButtons();
            showAddQuestionForm = false;
            isLoading = false;
        } catch (error) {
            console.error(editingQuestionId ? "Error updating question:" : "Error adding question:", error);
            alert("Failed to save question. Check console for details.");
            isLoading = false;
        }
    };

    const cancelEditingQuestion = () => {
        question = '';
        editingQuestionId = null;
        editingQuestion = null;
        showAddQuestionForm = false;
    };

    const handleNumTopicsChange = () => {
        numTopics = Math.max(2, Math.min(10, Number(numTopics) || 2));
        initializeTopics();
    };

    const handleNumOptionsChange = () => {
        numOptions = Math.max(2, Math.min(10, Number(numOptions) || 2));
        initializeButtons();
    };


    const goBackToSurveyList = () => {
        showSurveySelection = true;
        editMode = false;
        isSurveyNameAdded.set(false);
        areTopicsAdded.set(false);
        selectedSurveyForEditing = null;
        selectedSurveyIdForEditing = null;
        showAddQuestionForm = false;
        editingQuestion = null;
        editingQuestionId = null;
        showAnalysisView = false;
        analysisData = null;
        analysisError = '';
        showUserResponseDetailView = false; // Reset detail view
        selectedUserForDetail = null;     // Reset selected user
        loadSurveys();
    };


    const openAnalysisView = async (survey) => {
        isLoading = true;
        showSurveySelection = false;
        showAnalysisView = true;
        analyzedSurveyName = survey.name;
        analysisData = null;
        analysisError = '';
        showUserResponseDetailView = false; // Ensure detail view is closed when opening main analysis
        selectedUserForDetail = null;

        try {
            const submissions = await getSurveySubmissions(survey.id);
            if (submissions.length === 0) {
                analysisError = "No submissions found for this survey yet.";
                analysisData = {};
            } else {
                const groupedResults = submissions.reduce((acc, submission) => {
                    const result = submission.finalResult || "N/A";
                    if (!acc[result]) {
                        acc[result] = [];
                    }
                    acc[result].push({
                        id: submission.id, // Good to have the submission ID
                        userName: submission.userName,
                        userEmail: submission.userEmail,
                        submittedAt: submission.submittedAt?.toDate ? submission.submittedAt.toDate().toLocaleString() : new Date(submission.submittedAt).toLocaleString(),
                        answerHistory: submission.answerHistory || [], // Ensure answerHistory is an array
                        finalResult: submission.finalResult
                    });
                    return acc;
                }, {});
                analysisData = groupedResults;
            }
        } catch (error) {
            console.error("Error fetching or processing survey submissions:", error);
            analysisError = "Failed to load analysis data. Please try again.";
        } finally {
            isLoading = false;
        }
    };

    const closeAnalysisView = () => {
        showAnalysisView = false;
        analysisData = null;
        analyzedSurveyName = '';
        analysisError = '';
        showUserResponseDetailView = false; // Also close detail view
        selectedUserForDetail = null;
        showSurveySelection = true;
        loadSurveys();
    };

    // --- Functions for User Response Detail View ---
    const viewUserResponses = (user) => {
        selectedUserForDetail = user;
        showUserResponseDetailView = true;
    };

    const closeUserResponseDetailView = () => {
        showUserResponseDetailView = false;
        selectedUserForDetail = null;
        // Note: We remain in the main analysis view (showAnalysisView = true)
    };
    // --- End User Response Detail View Functions ---

    $: {
        if (!$areTopicsAdded && !editMode) {
            initializeTopics();
        }
    }
    $: {
        if (topics.length > 0 && ($areTopicsAdded || editMode)) {
            if (!editingQuestion) {
                initializeButtons();
            }
        }
    }

</script>

<main>
    {#if isLoading}
        <div class="loading-overlay">
             <div class="spinner"></div>
            Loading...
        </div>
    {/if}

    {#if showUserResponseDetailView && selectedUserForDetail}
        <div class="detail-modal-overlay" on:click|self={closeUserResponseDetailView}>
            <div class="detail-modal-content">
                <button class="close-modal-button" on:click={closeUserResponseDetailView} title="Close details">&times;</button>
                <h3>Responses from: {selectedUserForDetail.userName}</h3>
                <p><small>Email: {selectedUserForDetail.userEmail} | Submitted: {selectedUserForDetail.submittedAt}</small></p>
                {#if selectedUserForDetail.answerHistory && selectedUserForDetail.answerHistory.length > 0}
                    <ul class="response-detail-list">
                        {#each selectedUserForDetail.answerHistory as responseItem, i (responseItem.question + i)}
                            <li class="response-item-detail">
                                <p class="response-question"><strong>Q:</strong> {responseItem.question}</p>
                                <p class="response-answer"><strong>A:</strong> {responseItem.answer}</p>
                                {#if responseItem.topics && responseItem.topics.length > 0}
                                    <p class="response-topics"><small>Selected Topic(s): {responseItem.topics.join(', ')}</small></p>
                                {/if}
                            </li>
                        {/each}
                    </ul>
                {:else}
                    <p class="no-responses-msg">No detailed answer history recorded for this user.</p>
                {/if}
            </div>
        </div>
    {/if}


    {#if showAnalysisView && !showUserResponseDetailView} <div class="analysis-view">
            <button class="back-button" on:click={closeAnalysisView}>← Back to Survey List</button>
            <h2>Analysis for: {analyzedSurveyName}</h2>
            {#if analysisError}
                <p class="error-text">{analysisError}</p>
            {:else if analysisData}
                {#if Object.keys(analysisData).length === 0 && !analysisError}
                     <p>No submissions found for this survey yet, or no submissions with a final result.</p>
                {:else}
                    {#each Object.entries(analysisData) as [finalResult, users]}
                        <div class="result-group">
                            <h3>Final Result: {finalResult} ({users.length} user{#if users.length !== 1}s{/if})</h3>
                            {#if users.length > 0}
                                <ul class="user-list">
                                    {#each users as user (user.id)} <li>
                                            <strong class="clickable-username" on:click={() => viewUserResponses(user)} title="View {user.userName}'s detailed responses">
                                                {user.userName}
                                            </strong>
                                            ({user.userEmail})
                                            <br/>
                                            <small>Submitted: {user.submittedAt}</small>
                                        </li>
                                    {/each}
                                </ul>
                            {:else}
                                <p>No users achieved this result.</p>
                            {/if}
                        </div>
                    {/each}
                {/if}
            {:else if !isLoading}
                <p>Loading analysis data...</p>
            {/if}
        </div>

    {:else if showSurveySelection}
        <div class="survey-management">
            <h2>Survey Management</h2>
            <button class="create-new-survey-btn" on:click={createNewSurvey}>+ Create New Survey</button>

            {#if existingSurveys.length > 0}
                <div class="existing-surveys-list">
                    <h3>Existing Surveys</h3>
                    {#each existingSurveys as survey (survey.id)}
                        <div class="survey-item">
                            <span class="survey-item-name">{survey.name}</span>
                            <div class="survey-item-actions">
                                <button class="action-btn edit-btn" on:click={() => editExistingSurvey(survey)}>Edit</button>
                                <button class="action-btn analyze-btn" on:click={() => openAnalysisView(survey)}>Analyze</button>
                                <button class="action-btn share-btn" title="Copy survey link" on:click={() => navigator.clipboard.writeText(`${window.location.origin}?survey=${survey.id}`)}>Copy Link</button>
                                <button class="action-btn delete-btn" on:click={() => deleteSurveyHandler(survey)}>Delete</button>
                            </div>
                        </div>
                    {/each}
                </div>
            {:else if !isLoading}
                <p class="no-surveys-msg">No surveys created yet. Click "Create New Survey" to start.</p>
            {/if}
        </div>

    {:else if !$isSurveyNameAdded}
        <div class="form-container survey-name-form">
            <button class="back-button" on:click={goBackToSurveyList}>← Back to Survey List</button>
            <div class="form-section">
                <h2>Step 1: Enter Survey Name</h2>
                <input
                    type="text"
                    bind:value={surveyName}
                    placeholder="e.g., MBA vs MS Decision Aid"
                    aria-label="Survey Name"
                />
                <button class="submit-btn" on:click={addSurveyName}>Next: Add Topics</button>
            </div>
        </div>
    {:else if !$areTopicsAdded && !editMode}
        <div class="form-container topics-form">
             <button class="back-button" on:click={() => { isSurveyNameAdded.set(false); areTopicsAdded.set(false); surveyName = ''; }}>← Back to Survey Name</button>
            <div class="form-section">
                <h2>Step 2: Define Topics for "{surveyName}"</h2>
                <label for="numTopics">How many distinct outcome topics? (2-10)</label>
                <input
                    type="number"
                    id="numTopics"
                    bind:value={numTopics}
                    min="2"
                    max="10"
                    on:input={handleNumTopicsChange}
                    aria-label="Number of topics"
                />

                {#each topics as topic, i}
                    <input
                        type="text"
                        bind:value={topics[i]}
                        placeholder={`Topic ${i + 1} Name`}
                        aria-label={`Topic ${i + 1} Name`}
                    />
                {/each}
                <button class="submit-btn" on:click={addTopics}>Next: Add Questions</button>
            </div>
        </div>
    {:else}
        <div class="question-management-view">
            <button class="back-button" on:click={goBackToSurveyList}>← Back to Survey List</button>
            <h2>Managing Questions for: {surveyName}</h2>
            <div class="survey-link-section">
                <p>Share this survey link:</p>
                <div class="link-input-group">
                    <input
                        type="text"
                        readonly
                        value={`${window.location.origin}?survey=${selectedSurveyIdForEditing}`}
                        aria-label="Survey share link"
                    />
                    <button class="copy-btn" title="Copy link" on:click={() => navigator.clipboard.writeText(`${window.location.origin}?survey=${selectedSurveyIdForEditing}`)}>
                        Copy
                    </button>
                </div>
            </div>

            {#if !showAddQuestionForm}
                <div class="existing-questions-section">
                    <button class="add-question-btn" on:click={toggleAddQuestionForm}>+ Add New Question</button>
                    {#if existingQuestions.length > 0}
                        <h3>Current Questions:</h3>
                        {#each existingQuestions as q (q.id)}
                        <div class="question-item">
                            <span class="question-item-text">{q.question}</span>
                            <div class="question-item-actions">
                                <button class="action-btn edit-btn" on:click={() => editQuestion(q)}>Edit</button>
                                <button class="action-btn delete-btn" on:click={() => deleteQuestionHandler(q.id)}>Delete</button>
                            </div>
                        </div>
                        {/each}
                    {:else}
                        <p class="no-questions-msg">No questions added yet for this survey.</p>
                    {/if}
                </div>
            {:else}
                <div class="form-container add-edit-question-form">
                    <button class="back-button" on:click={cancelEditingQuestion}>← Back to Question List</button>
                    <h3>{editingQuestionId ? 'Edit Question' : 'Add a New Question'}</h3>
                    <div class="form-field">
                        <label for="questionText">Question Text:</label>
                        <input type="text" id="questionText" bind:value={question} placeholder="Enter your question" />
                    </div>

                    <div class="form-field">
                        <label for="numOptions">Number of answer options (2-10):</label>
                        <input
                            type="number"
                            id="numOptions"
                            bind:value={numOptions}
                            min="2"
                            max="10"
                            on:input={handleNumOptionsChange}
                        />
                    </div>

                    {#each buttons as buttonItem, buttonIndex (buttonIndex)}
                        <div class="option-config-item">
                            <h4>Option {buttonIndex + 1}</h4>
                            <div class="form-field">
                                <label for={`optionText-${buttonIndex}`}>Option Text:</label>
                                <input
                                    type="text"
                                    id={`optionText-${buttonIndex}`}
                                    bind:value={buttonItem.text}
                                    placeholder={`Answer Option ${buttonIndex + 1}`}
                                />
                            </div>
                            <div class="topic-association">
                                <p>Associate with topics:</p>
                                {#each topics as topicName, topicIndex (topicName)}
                                    <label class="checkbox-label">
                                        <input
                                            type="checkbox"
                                            bind:checked={buttonItem.selectedTopics[topicIndex]}
                                        />
                                        {topicName}
                                    </label>
                                {/each}
                            </div>
                        </div>
                    {/each}
                    <button class="submit-btn save-question-btn" on:click={addOrUpdateQuestion}>
                        {editingQuestionId ? 'Update Question' : 'Save Question'}
                    </button>
                </div>
            {/if}
        </div>
    {/if}
</main>

<style>
    /* ... (all your existing styles from previous response) ... */
    main {
        width: 100%;
        max-width: 900px;
        margin: 1rem auto;
        padding: 1rem;
        color: rgba(255, 255, 255, 0.87);
    }

    .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 1.5rem;
        z-index: 2000;
    }
    .spinner {
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: #FFBD2D;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        margin-bottom: 1rem;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    .back-button {
        align-self: flex-start;
        margin-bottom: 1.5rem;
        background-color: #6c757d;
        padding: 0.5rem 1rem;
    }
    .back-button:hover {
        background-color: #5a6268;
    }

    h2, h3, h4 {
        color: rgba(255, 255, 255, 0.9);
        margin-top: 0;
        margin-bottom: 1rem;
    }
    h2 { font-size: 1.8rem; }
    h3 { font-size: 1.4rem; }
    h4 { font-size: 1.1rem; }

    .survey-management, .question-management-view, .analysis-view {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 1.5rem;
        background-color: #1e1e1e;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }

    .create-new-survey-btn, .add-question-btn {
        background-color: #28a745;
        color: white;
        padding: 0.8rem 1.5rem;
        font-size: 1.1rem;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        transition: background-color 0.2s;
        align-self: flex-start;
    }
    .create-new-survey-btn:hover, .add-question-btn:hover {
        background-color: #218838;
    }

    .existing-surveys-list, .existing-questions-section {
        margin-top: 1rem;
    }

    .survey-item, .question-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: #2a2a2a;
        border-radius: 8px;
        margin-bottom: 0.75rem;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }
    .survey-item-name, .question-item-text {
        font-size: 1.1rem;
        flex-grow: 1;
    }
    .survey-item-actions, .question-item-actions {
        display: flex;
        gap: 0.5rem;
        flex-shrink: 0;
    }

    .action-btn {
        padding: 0.5rem 0.8rem;
        font-size: 0.9rem;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        transition: background-color 0.2s;
    }
    .edit-btn { background-color: #007bff; color: white; }
    .edit-btn:hover { background-color: #0056b3; }
    .analyze-btn { background-color: #17a2b8; color: white; }
    .analyze-btn:hover { background-color: #117a8b; }
    .share-btn { background-color: #6c757d; color: white; }
    .share-btn:hover { background-color: #545b62; }
    .delete-btn { background-color: #dc3545; color: white; }
    .delete-btn:hover { background-color: #b02a37; }

    .form-container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 1.5rem;
        background-color: #242424;
        border-radius: 12px;
    }
    .form-section, .form-field {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        width: 100%;
    }
    input[type="text"], input[type="number"] {
        padding: 0.75rem;
        font-size: 1rem;
        border-radius: 6px;
        border: 1px solid #444;
        background-color: #333;
        color: rgba(255, 255, 255, 0.87);
        width: 100%;
        box-sizing: border-box;
    }
    input[type="number"] { width: auto; min-width: 80px; }
    label, .checkbox-label {
        font-size: 0.95rem;
        color: rgba(255,255,255,0.7);
    }
    .checkbox-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background-color: #303030;
        padding: 0.5rem;
        border-radius: 4px;
    }
    input[type="checkbox"] { width: auto; }

    .submit-btn, .copy-btn, .save-question-btn {
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        background-color: #007bff;
        color: white;
        transition: background-color 0.2s;
    }
    .submit-btn:hover, .copy-btn:hover, .save-question-btn:hover {
        background-color: #0056b3;
    }
    .copy-btn { background-color: #28a745; }
    .copy-btn:hover { background-color: #1e7e34; }


    .survey-link-section {
        background-color: #2a2a2a;
        border-radius: 8px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .link-input-group {
        display: flex;
        gap: 0.5rem;
    }
    .link-input-group input { flex-grow: 1; }

    .option-config-item {
        padding: 1rem;
        border: 1px solid #383838;
        border-radius: 8px;
        margin-bottom: 1rem;
        background-color: #2c2c2c;
    }
    .topic-association { margin-top: 1rem; }
    .topic-association p { margin-bottom: 0.5rem; font-weight: bold; }

    .no-surveys-msg, .no-questions-msg, .no-responses-msg {
        color: rgba(255, 255, 255, 0.6);
        text-align: center;
        padding: 1rem;
        font-style: italic;
    }

    /* Analysis View Specific Styles */
    .analysis-view .error-text {
        color: #ff6b6b;
        font-weight: bold;
        background-color: #402020;
        padding: 1rem;
        border-radius: 6px;
    }
    .result-group {
        margin-bottom: 2rem;
        padding: 1rem;
        background-color: #2a2a2a;
        border-radius: 8px;
    }
    .result-group h3 {
        color: #FFBD2D;
        border-bottom: 1px solid #444;
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
    }
    .user-list {
        list-style: none;
        padding-left: 0;
    }
    .user-list li {
        padding: 0.75rem;
        background-color: #333;
        border-radius: 6px;
        margin-bottom: 0.5rem;
        font-size: 0.95rem;
    }
    .user-list li strong.clickable-username {
        color: #8ab4f8; /* Lighter blue for clickable names */
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: transparent;
        transition: text-decoration-color 0.2s;
    }
    .user-list li strong.clickable-username:hover {
        text-decoration-color: #8ab4f8;
    }
    .user-list li small {
        display: block;
        color: rgba(255,255,255,0.6);
        font-size: 0.8rem;
        margin-top: 0.25rem;
    }

    /* User Response Detail Modal Styles */
    .detail-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75); /* Darker overlay */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2500; /* Higher than loading overlay */
        padding: 1rem; /* Padding for smaller screens */
        box-sizing: border-box;
    }
    .detail-modal-content {
        background-color: #1e1e1e; /* Same as analysis view bg */
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.5);
        width: 100%;
        max-width: 700px; /* Max width for the modal */
        max-height: 90vh; /* Max height */
        overflow-y: auto; /* Scroll if content exceeds height */
        position: relative; /* For positioning the close button */
    }
    .detail-modal-content h3 {
        color: #FFBD2D;
        margin-top: 0;
    }
    .close-modal-button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        color: rgba(255,255,255,0.7);
        font-size: 2rem; /* Larger close icon */
        line-height: 1;
        padding: 0.25rem 0.5rem;
        cursor: pointer;
    }
    .close-modal-button:hover {
        color: #FFBD2D;
    }
    .response-detail-list {
        list-style: none;
        padding: 0;
        margin-top: 1rem;
    }
    .response-item-detail {
        background-color: #2a2a2a;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1rem;
        border-left: 4px solid #FFBD2D; /* Accent border */
    }
    .response-question, .response-answer, .response-topics {
        margin: 0.5rem 0;
    }
    .response-question strong, .response-answer strong {
        color: rgba(255,255,255,0.9);
    }
    .response-topics small {
        color: rgba(255,255,255,0.6);
    }

</style>