const API_KEY = "dc6zaTOxFJmzC"; // Replace this with your Giphy API key if needed

const form = document.getElementById("gif-form");
const input = document.getElementById("search-input");
const container = document.getElementById("gif-container");

const fetchGifs = async (searchTerm) => {
  try {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(searchTerm)}&limit=10`;

    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error("Failed to fetch GIFs");
    }

    const data = await response.json();
    displayGifs(data.data); // Giphy's GIFs are inside `data.data`
  } catch (error) {
    console.error("Error fetching GIFs:", error);
    container.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
};

const displayGifs = (gifs) => {
  container.innerHTML = ""; // Clear previous gifs

  if (gifs.length === 0) {
    container.innerHTML = "<p>No GIFs found.</p>";
    return;
  }

  gifs.forEach(gif => {
    const img = document.createElement("img");
    img.src = gif.images.fixed_height.url;
    img.alt = gif.title || "Giphy GIF";
    container.appendChild(img);
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = input.value.trim();
  if (searchTerm) {
    fetchGifs(searchTerm);
    input.value = ""; // Clear input
  }
});
