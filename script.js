document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    const quote = document.getElementById('quote');
    const author = document.getElementById('author');

    const apiUrl = 'https://inspirational-quote-generator.p.rapidapi.com/quoteGenerator';

    async function fetchQuote() {
        try {
            preloader.style.display = 'flex';
            content.style.display = 'none';

            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'd77e8efd8cmsh17d2c3a506c7339p1612fdjsn70f0fd0b1ea4',
                    'X-RapidAPI-Host': 'inspirational-quote-generator.p.rapidapi.com'
                }
            });

            if (!response.ok) {
                throw new Error('Network request is not ok: ' + response.statusText);
            }

            const data = await response.json();
            console.log(data)
            quote.innerText = data.quote || data.data || "No quote found.";
            author.innerText = data.author || data.data;

            preloader.style.display = 'none';
            content.style.display = 'flex';
        } catch (error) {
            console.error('Error fetching quote:', error);
            quote.innerText = "Failed to load quote. Try again.";
            preloader.style.display = 'none';
            content.style.display = 'flex';
        }
    }

    fetchQuote();

    const getMoreButton = document.querySelector('.btn');
    getMoreButton.addEventListener('click', fetchQuote);
});
