// Generate a random cat fact to display on the page using the APT at catfact.ninja

// Initial version will be without imposing a character limit on the returned fact

const url = "https://catfact.ninja/fact";
const catFactBox = document.getElementById("fact-text");

const generateCatFact = async () => {
  try {
    // Fetch a fact from the cat facts site
    const response = await fetch(url);
    // Check that the response is okay
    if (response.ok) {
      // If the response is valid, convert the response to json format
      const jsonResponse = await response.json();
      // Update the HTML in the cat fact box to add the text from the cat fact response
      catFactBox.innerHTML = `<p>${jsonResponse.fact}</p>`;
    }
    // Log any error to the console
  } catch (error) {
    console.log(error);
  }
};

generateCatFact();
