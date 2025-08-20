// Generate a random cat fact to display on the page using the APT at catfact.ninja

// Initial version will be without imposing a character limit on the returned fact

const url = "https://catfact.ninja/fact";

const catFact = async () => {
  try {
    // Fetch a fact from the cat facts site
    const response = await fetch(url);
    // Check that the response is okay
    if (response.ok) {
      const jsonResponse = await response.json();
      // For now, just log the fact to the console
      console.log(jsonResponse.fact);
    }
    // Log any error to the console
  } catch (error) {
    console.log(error);
  }
};

catFact();
