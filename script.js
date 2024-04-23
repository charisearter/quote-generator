// Manipulate DOM to populate results
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuote = document.getElementById('new-quote');

let apiQuotes = [];

// Get Quotes from API
async function getQuotes() {
	const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

	//  Show new quote
	function newQuote() {
		// get random quote
		const quote =
			apiQuotes[Math.floor(Math.random() * Math.floor(apiQuotes.length))];
		console.log(quote);
	}

	try {
		const res = await fetch(apiUrl);
		apiQuotes = await res.json();
		newQuote();
	} catch (error) {
		// Catch error here
	}
}

// on load
getQuotes();
