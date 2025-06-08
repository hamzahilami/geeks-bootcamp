const btn = document.getElementById("getCharacter");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const character = document.getElementById("character");

const nameEl = document.getElementById("name");
const heightEl = document.getElementById("height");
const genderEl = document.getElementById("gender");
const birthYearEl = document.getElementById("birthYear");
const homeworldEl = document.getElementById("homeworld");

btn.addEventListener("click", async () => {
  const randomId = Math.floor(Math.random() * 83) + 1;

  loading.classList.remove("hidden");
  error.classList.add("hidden");
  character.style.display = "none";

  try {
   
    const res = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
    const data = await res.json();

    const props = data.result.properties;

  
    const homeworldRes = await fetch(props.homeworld);
    const homeworldData = await homeworldRes.json();


    nameEl.textContent = props.name;
    heightEl.textContent = props.height;
    genderEl.textContent = props.gender;
    birthYearEl.textContent = props.birth_year;
    homeworldEl.textContent = homeworldData.result.properties.name;

    character.style.display = "block";
  } catch (err) {
    console.error(err);
    error.classList.remove("hidden");
  } finally {
    loading.classList.add("hidden");
  }
});