



var myMov = {};
//   URL 
let queryValue = getUrlParams(window.location.href).q;

 
function searchMovies(queryString) {  
  const encodedQuery = encodeURI(queryString);
   fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${queryString}&include_adult=false`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      localStorage.setItem("searchMovies", `<p class="error-msg">En estos momentos no se puede mostrar ninguna película.<br>Vuelva a intentarlo más tarde.</p>`);
      throw new Error("Network response was not ok. No resource fetched.");
    })
    .then(objData => {
      moviesArray = objData.results;
      console.log(moviesArray);
      
      localStorage.setItem("searchMovies", movieObjsToHTML(moviesArray, 20));
      window.location.replace("search-movies.html");
    })
    .catch(error => console.error(error));
}


document.getElementById("formu").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(document.getElementById("search-input").value)
  searchMovies(document.getElementById("search-input").value);
  
});