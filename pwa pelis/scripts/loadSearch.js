// cargar la peli elegida
window.addEventListener('load', loadSearch);

function loadSearch(){
    document.getElementById("movies-results").innerHTML = localStorage.getItem("searchMovies");
}