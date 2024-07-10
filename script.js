
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    // Hide preloader initially
    preloader.style.display = 'none';
    const apiUrl = 'https://thought-of-the-day.p.rapidapi.com/thought';

    async function fetchQuote() {
        try {
            // show preloader and hide content after fetching
            preloader.style.display = 'flex';
            content.style.display = 'none';

            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'd77e8efd8cmsh17d2c3a506c7339p1612fdjsn70f0fd0b1ea4',
                    'X-RapidAPI-Host': 'thought-of-the-day.p.rapidapi.com'
                }
            });

            if (!response.ok) {
                throw new Error('Network request is not ok: ' + response.statusText);
            }

            const data = await response.json();
            console.log(data);
            quote.innerText = data.data;

            // Hide preloader and show content after fetching
            preloader.style.display = 'none';
            content.style.display = 'flex';
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    }

    fetchQuote();

    const getMoreButton = document.querySelector('.btn');
    getMoreButton.addEventListener('click', fetchQuote);
});
