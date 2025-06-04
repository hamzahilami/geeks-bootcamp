async function getData() {

    await fetch("https://www.swapi.tech/api/starships/9/")
    .then(response => response.json())
    .then(objectStarWars => console.log(objectStarWars.result))
    .catch(error => console.log(error));

}

getData();
