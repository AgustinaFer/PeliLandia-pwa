var myMov = {};
//   URL 
let queryValue = getUrlParams(window.location.href);

 
function searchMovies(queryString) {  
  const encodedQuery = encodeURI(queryString);
   fetch(armarLinkSearchMovies(queryString))
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      localStorage.setItem("searchMovies", `<p class="error-msg">En estos momentos no se puede mostrar ninguna película.<br>Vuelva a intentarlo más tarde.</p>`);
      throw new Error("Network response was not ok. No resource fetched.");
    })
    .then(objData => {
      moviesArray = objData.Search;
      console.log(moviesArray);
      window.location.replace("search-movies.html");
      localStorage.setItem("searchMovies", movieObjsToHTML(moviesArray, 20));
    })
    .catch(error => console.error(error));
}


document.getElementById("formu").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(document.getElementById("search-input").value);
  searchMovies(document.getElementById("search-input").value);
  
});