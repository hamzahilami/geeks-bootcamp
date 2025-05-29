document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("libform");
  const storySpan = document.getElementById("story");


  const shuffleButton = document.createElement("button");
  shuffleButton.textContent = "Shuffle Story";
  shuffleButton.type = "button";
  form.appendChild(shuffleButton);

  const inputs = ["noun", "adjective", "person", "verb", "place"];
  let userWords = {};
  const storyTemplates = [
    (w) => `${w.person} took a ${w.adjective} ${w.noun} and decided to ${w.verb} it at the ${w.place}.`,
    (w) => `In ${w.place}, ${w.person} found a ${w.adjective} ${w.noun} and couldn't resist ${w.verb}ing it.`,
    (w) => `Once upon a time, ${w.person} was on a journey to ${w.place} with a ${w.adjective} ${w.noun}, trying to ${w.verb} bravely.`,
  ];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    userWords = {};
    let allFilled = true;

    inputs.forEach(id => {
      const value = document.getElementById(id).value.trim();
      if (!value) allFilled = false;
      userWords[id] = value;
    });

    if (!allFilled) {
      alert("Please fill in all the fields!");
      return;
    }

    const story = storyTemplates[0](userWords);
    storySpan.textContent = story;
  });

  shuffleButton.addEventListener("click", () => {
    if (!Object.keys(userWords).length) {
      alert("Please fill in the form and generate a story first!");
      return;
    }

    const randomIndex = Math.floor(Math.random() * storyTemplates.length);
    const randomStory = storyTemplates[randomIndex](userWords);
    storySpan.textContent = randomStory;
  });
});
