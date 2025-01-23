const UNSPLASH_API_URL = "https://api.unsplash.com/search/photos";
const UNSPLASH_ACCESS_KEY = "AnaKgpo5-r35ODYYH05pFl-b-Ps-h2BLYFH8I8YqPZM";

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Update Favorites Display
function updateFavorites() {
  const favoritesContainer = document.getElementById("favorites");
  favoritesContainer.innerHTML = "";

  favorites.forEach(photo => {
    const photoDiv = document.createElement("div");
    photoDiv.classList.add("photo");
    photoDiv.innerHTML = `
      <img src="${photo.urls.small}" alt="${photo.alt_description}">
      <span class="favorite saved">⭐</span>
    `;

    photoDiv.querySelector(".favorite").addEventListener("click", () => removeFavorite(photo.id));
    favoritesContainer.appendChild(photoDiv);
  });
}

// Add to Favorites
function addFavorite(photo) {
  if (!favorites.some(fav => fav.id === photo.id)) {
    favorites.push(photo);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateFavorites();
  }
}

// Remove from Favorites
function removeFavorite(photoId) {
  favorites = favorites.filter(photo => photo.id !== photoId);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  updateFavorites();
}

// Search Photos
function searchPhotos(query) {
  fetch(`${UNSPLASH_API_URL}?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`)
    .then(response => response.json())
    .then(data => {
      const resultsContainer = document.getElementById("results");
      resultsContainer.innerHTML = "";

      if (data.results.length === 0) {
        resultsContainer.innerHTML = "<p>No photos found.</p>";
        return;
      }

      data.results.forEach(photo => {
        const photoDiv = document.createElement("div");
        photoDiv.classList.add("photo");
        photoDiv.innerHTML = `
          <img src="${photo.urls.small}" alt="${photo.alt_description}">
          <span class="favorite">⭐</span>
        `;

        photoDiv.querySelector(".favorite").addEventListener("click", () => addFavorite(photo));
        resultsContainer.appendChild(photoDiv);
      });
    })
    .catch(error => {
      document.getElementById("results").innerHTML = `<p class="error">${error.message}</p>`;
    });
}

// Handle Search Bar Input
document.getElementById("searchBar").addEventListener("input", (e) => {
  const query = e.target.value.trim();
  if (query) {
    searchPhotos(query);
  } else {
    document.getElementById("results").innerHTML = "";
  }
});

// Initial Display of Favorites
updateFavorites();
