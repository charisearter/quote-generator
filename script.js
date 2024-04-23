// Manipulate DOM to populate results
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Show loading
function loading() {
	loader.hidden = false;
	quoteContainer.hidden = true;
}

// Hide loading
function complete() {
	quoteContainer.hidden = false;
	loader.hidden = true;
}

//  Show new quote
function newQuote() {
	loading();
	// get random quote
	const quote =
		apiQuotes[Math.floor(Math.random() * Math.floor(apiQuotes.length))];
	// Populate UI with res data
	// Check if there is an author, if not replace with Unknown
	if (!quote.author) {
		authorText.textContent = 'Unknown';
	} else {
		authorText.textContent = quote.author;
	}

	//  Check quote length to determine styling
	if (quote.text.length > 120) {
		quoteText.classList.add('long-quote');
	} else {
		quoteText.classList.remove('long-quote');
	}
	// Set quote and hide loader
	quoteText.textContent = quote.text;
	complete();
}
// Get Quotes from API
async function getQuotes() {
	loading();
	const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

	// Try to Get API data
	try {
		const res = await fetch(apiUrl);
		apiQuotes = await res.json();
		newQuote();
	} catch (error) {
		// Catch error here
	}
}

// Tweet Quote
function tweetQuote() {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
	// open twitter window in a new tab
	window.open(twitterUrl, '_blank');
}
// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// on load
getQuotes();
