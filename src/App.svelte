<script>
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
  
  let currentPage = writable('main'); // Use writable store to track current page
  let password = '';
  const correctPassword = import.meta.env.VITE_PASSWORD; // Access environment variable
  let isPasswordCorrect = writable(false); // Track if password is correct

  let currentPageComponent;
  let isLoading = true;

  onMount(() => {
    // Check URL for direct survey link
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('survey')) {
      // If survey ID is present, ensure we're on the main page
      currentPage.set('main');
    }
    isLoading = false;
  });

  // Function to check password
  const checkPassword = () => {
    if (password === correctPassword) {
      isPasswordCorrect.set(true); // Mark the password as correct
      currentPage.set('add'); // Navigate to the Add Survey page
    } else {
      alert('Incorrect password');
    }
  };

  // Handle page navigation
  const navigateToMain = () => {
    currentPage.set('main');
    isPasswordCorrect.set(false); // Reset password check when going back to main
    
    // Clear any survey from URL if we navigate to home directly
    const url = new URL(window.location);
    if (!url.searchParams.has('survey')) {
      url.searchParams.delete('survey');
      window.history.pushState({}, '', url);
    }
  };

  // Dynamically import components based on the currentPage
  $: {
    if ($currentPage === 'main') {
      import('./Home.svelte').then(module => currentPageComponent = module.default);
      password = '';
    }
    if ($currentPage === 'add' && $isPasswordCorrect) {
      import('./AddQuestion.svelte').then(module => currentPageComponent = module.default);
    }
  }
</script>

<svelte:head>
    <style>
        body {
            background-color: #002543; /* Dark blue-ish charcoal */
            color: rgba(255, 255, 255, 0.87); /* Default text color for dark mode */
            margin: 0; /* Good practice to reset body margin */
            font-family: inherit; /* Ensure consistent font if you set one on a wrapper */
            min-height: 100vh; /* Ensure body takes at least full viewport height */
        }
    </style>
</svelte:head>

{#if isLoading}
  <div class="loading">Loading app...</div>
{:else}
  <div class="app-container">
    <div>
        <img src="/lebow.png" alt="lebow logo">
    </div>
    <h1>LeBow Decision Aid</h1>
    <h3>
        Welcome to the Drexel LeBow Decision-Maker! Please answer the following questions to help us provide you with the best suggestion based on your choices and goals. 
    </h3>
    <div class="nav-buttons">
      <button on:click={navigateToMain}>Home</button>
      <button on:click={() => currentPage.set('add')}>Add/Edit/Analyze Surveys</button>
    </div>

    {#if !$isPasswordCorrect && $currentPage === 'add'}
      <!-- Password prompt only shows when trying to access 'add' page -->
      <div class="password-check">
        <input type="password" bind:value={password} placeholder="Enter password" />
        <button on:click={checkPassword}>Submit</button>
      </div>
    {:else if currentPageComponent}
      <svelte:component this={currentPageComponent} />
    {/if}
  </div>
{/if}

<style>
  .app-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    z-index: 1000;
  }

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.87);
  }

    h3 {
        font-weight: normal;
    }

    img {
        height: 150px;
    }

  .nav-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .password-check {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .password-check input {
    padding: 10px;
    margin: 10px;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #333;
    background-color: #1a1a1a;
    color: rgba(255, 255, 255, 0.87);
  }

  button {
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    border-radius: 8px;
    border: 1px solid transparent;
    color: white;
  }

  button:hover {
    border-color: #FFBD2D;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  .password-check button {
    padding: 10px 20px;
    background-color: #FFBD2D;
    color: white;
    border: none;
    cursor: pointer;
  }

  .password-check button:hover {
    background-color: #FFBD2D;
  }
</style>