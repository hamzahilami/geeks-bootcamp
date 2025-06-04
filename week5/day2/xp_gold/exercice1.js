async function getData() {
    await fetch(`https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Pick one random GIF from the data
            const gifs = data.data;
            const randomIndex = Math.floor(Math.random() * gifs.length);
            const gifUrl = gifs[randomIndex].images.original.url;

            // Create an image element and append it to the body
            const img = document.createElement('img');
            img.src = gifUrl;
            img.alt = "Random hilarious GIF";
            document.body.appendChild(img);
        })
        .catch(error => {
            console.error(`Fetch failed: ${error.message}`);
        });
}

getData();
