// 1. Select the HTML elements where we will display the quote and author
const quoteText = document.getElementById("quote");      // The <h4> or <div> that will show the quote from html names as id no class
const quoteAuthor = document.getElementById("author");   // The <div> that will show the author
const newQuotebtn = document.getElementById("button"); // The button to fetch a new quote

// 2. Async function to fetch a random quote from API
async function getQuote() {
  try {
    const response = await fetch("https://motivational-spark-api.vercel.app/api/quotes/random");
    const data = await response.json();
    quoteText.textContent = `"${data.quote}"`;         // Display the quote text inside the HTML element
    quoteAuthor.textContent = data.author ? `— ${data.author}` : ""; // Display author if available

  } catch (error) {
    quoteText.textContent = "Oops! Could not fetch a quote."; // Show error message if API fails
    quoteAuthor.textContent = ""; // Remove author text
    console.error("Error fetching quote:", error); // Log error to console for debugging
  }
}
// 3. Attach click event to button
newQuotebtn.addEventListener("click", getQuote);
