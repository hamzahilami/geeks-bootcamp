async function getPerson(rand) {
  try {
    const response = await fetch(`https://www.swapi.tech/api/people/${rand}`);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

async function getWorld(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}


document.querySelector("button").addEventListener("click", async (e) => {
  const load = document.querySelector(".fa-solid");
  load.style.display = "block";
  const rand = Math.floor(Math.random() * 83) + 1;
  let data = await getPerson(rand);
  load.style.display = "none";

  data = data.result.properties;
  const box = document.querySelector(".box");
  box.querySelectorAll("*:not(.fa-solid)").forEach((el) => el.remove());

  const name = document.createElement("h1");
  name.innerText = data.name;

  const height = document.createElement("p");
  height.innerText = `Height: ${data.height}`;

  const gender = document.createElement("p");
  gender.innerText = `Gender: ${data.gender}`;

  const birth = document.createElement("p");
  birth.innerText = `Birth Year: ${data.birth_year}`;
  let world = await getWorld(data.homeworld);
  const worldName = world.result.properties.name;
  const home = document.createElement("p");
  home.innerText = `Home World: ${worldName}`;

  box.appendChild(name);
  box.appendChild(height);
  box.appendChild(gender);
  box.appendChild(birth);
  box.appendChild(home);
});

