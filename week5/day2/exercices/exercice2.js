async function getData() {

    await fetch(`https://api.giphy.com/v1/gifs/search?q=sun&rating=g&offset=2&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(`Fetch failed: ${error.message}`);
        });
}

getData();