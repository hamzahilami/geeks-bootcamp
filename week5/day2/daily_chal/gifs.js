async function getData(query) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(query)}&rating=g&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

const form = document.getElementById("form");
const gifContainer = document.getElementById("gifContainer");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = document.getElementById("inp");
  const data = await getData(input.value);

  if (data?.data?.length > 0) {
    const gifBox = document.createElement("div");
    gifBox.className = "gif-box";

    const img = document.createElement("img");
    img.src = data.data[0].images.original.url;
    img.alt = input.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "DELETE";
    deleteBtn.addEventListener("click", () => gifBox.remove());

    gifBox.appendChild(img);
    gifBox.appendChild(deleteBtn);
    gifContainer.appendChild(gifBox);

    input.value = "";
  }
});

document.getElementById("deleteAll").addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
