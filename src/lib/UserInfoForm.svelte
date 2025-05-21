<script>
    import { createEventDispatcher } from 'svelte';

    export let surveyName = "Survey";

    let userName = '';
    let userEmail = '';
    let errorMessage = '';
    let isSubmitting = false;

    const dispatch = createEventDispatcher();

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async function handleSubmit() {
        errorMessage = '';
        if (!userName.trim()) {
            errorMessage = 'Please enter your name.';
            return;
        }
        if (!userEmail.trim()) {
            errorMessage = 'Please enter your email address.';
            return;
        }
        if (!isValidEmail(userEmail)) {
            errorMessage = 'Please enter a valid email address.';
            return;
        }

        isSubmitting = true;
        try {
            // Dispatch an event that the parent (Home.svelte) will handle for saving
            dispatch('submitUserInfo', {
                userName: userName.trim(),
                userEmail: userEmail.trim()
            });
            // Parent will handle actual async submission and navigation
        } catch (error) {
            errorMessage = 'An unexpected error occurred. Please try again.';
            console.error("Error in UserInfoForm dispatching:", error);
            isSubmitting = false; // Re-enable form if dispatch itself somehow fails or parent indicates failure
        }
        // isSubmitting will be reset by parent component logic after successful operation or if parent handles error display
    }
</script>

<div class="user-info-container">
    <h1>Almost there!</h1>
    <p>Before you see your results for "<strong>{surveyName}</strong>", please provide your name and email to save your answers.</p>

    <form on:submit|preventDefault={handleSubmit}>
        <div class="form-group">
            <label for="userName">Name:</label>
            <input type="text" id="userName" bind:value={userName} required disabled={isSubmitting} />
        </div>
        <div class="form-group">
            <label for="userEmail">Email:</label>
            <input type="email" id="userEmail" bind:value={userEmail} required disabled={isSubmitting} />
        </div>

        {#if errorMessage}
            <p class="error-message">{errorMessage}</p>
        {/if}

        <button type="submit" class="submit-button" disabled={isSubmitting}>
            {#if isSubmitting}
                Saving...
            {:else}
                Save and See Results
            {/if}
        </button>
    </form>
</div>

<style>
    .user-info-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        gap: 1.5rem;
        width: 100%;
        max-width: 600px;
        margin: 2rem auto;
        background: #1e1e1e;
        border-radius: 12px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        color: rgba(255, 255, 255, 0.87);
    }

    h1 {
        font-size: 2rem;
        text-align: center;
        color: #FFBD2D;
    }
    
    p strong {
        color: #FFBD2D;
    }

    p {
        font-size: 1.1rem;
        text-align: center;
        margin-bottom: 1rem;
    }

    .form-group {
        width: 100%;
        margin-bottom: 1.5rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
    }

    input[type="text"],
    input[type="email"] {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 8px;
        background-color: #2a2a2a;
        color: rgba(255, 255, 255, 0.87);
        font-size: 1rem;
        box-sizing: border-box;
    }

    input[type="text"]:focus,
    input[type="email"]:focus {
        outline: none;
        border-color: #FFBD2D;
        box-shadow: 0 0 0 2px rgba(255, 189, 45, 0.5);
    }

    input:disabled {
        background-color: #333;
        cursor: not-allowed;
    }

    .submit-button {
        padding: 0.8rem 1.5rem;
        font-size: 1.1rem;
        background-color: #646cff;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.2s;
        width: 100%;
    }

    .submit-button:hover:not(:disabled) {
        background-color: #535bf2;
    }
    .submit-button:disabled {
        background-color: #4a4f9a;
        cursor: not-allowed;
    }


    .error-message {
        color: #ff6b6b;
        margin-top: -0.5rem;
        margin-bottom: 1rem;
        font-size: 0.9rem;
        text-align: center;
    }
</style>