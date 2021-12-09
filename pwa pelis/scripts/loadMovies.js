// cargar peliculas en la home

//  elementos DOM 
const moviesContainer = document.getElementById("movies-container");

// cargar pelis 
window.addEventListener('load', loadMovies);


function loadMovies() {
  fetch(LOAD_MOVIES_URL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      moviesContainer.innerHTML = `<p class="error-msg">En estos momentos no se puede mostrar ninguna película.<br>Vuelva a intentarlo más tarde.</p>`;
      throw new Error("Network response was not ok. No resource fetched.");
    })
    .then(objData => {
      moviesArray = objData.Search;
      moviesContainer.innerHTML = movieObjsToHTML(moviesArray, 20);
    })
    .catch(error => console.error(error));
}