//  DOM 
const movieDetails = document.getElementById("movie-details");

//  URL 
let movieId = getUrlParams(window.location.href).id;


window.addEventListener('load', () => {
  if(movieId != undefined && movieId != null){
    loadMovieData(movieId);
  }
});


function loadMovieData(id) {
  fetch(armarLinkMovieDetails(id))
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error api.");
    })
    .then(objData => {
      document.title = `${objData.title} | PeliLandia`;
      movieDetails.innerHTML = `
        <div class="movie-poster"><img src="${objData.Poster}" id="img-details"></div>
        <h1 class="movie-title" id="title-details">${objData.Title}</h1>
        <p class="movie-vote">${objData.imdbRating}</p>
        <p class="release-date">${objData.Released}</p>
        <p class="movie-description">${objData.Plot}</p>
        <p class="movie-genres">${objData.Genre}</p>
        <button onclick="saveToFavs()"> Agregar a favoritos </button> 
      `;
    })
    .catch(error => console.error(error));
}

function saveToFavs() {
  let img = document.getElementById("img-details").src;
  let title = document.getElementById("title-details").innerText;
  let fav = {"title": title, "img": img};
  var allFavs = JSON.parse(localStorage.getItem("favs")) || [];
  if(allFavs.some(actualFav => actualFav['title'] === title)){
    alert("Ya fue agregada a favoritos");
  }
  else{
    allFavs.push(fav);
    localStorage.setItem("favs", JSON.stringify(allFavs));
  }
}

function deleteButtonToSave(){
  let actualString = document.getElementById("movie-details").innerHTML;
  let finalString = actualString.replace('<button id="buttonfav" onclick="saveToFavs()"> Agregar a favoritos </button>','');
  return finalString;
}


const mediaQuery830 = window.matchMedia("(hover) and (min-width: 830px)");



function checkMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {
    movieImages.forEach(image => {
      image.dataset.roundLayout = "true"; 
    });
    roundPicturesLayout(movieImages);
  } else {
    //movieImages.forEach(image => {
     // image.style.transform = "unset";
      //image.dataset.roundLayout = "false";
   // });
  }
}


mediaQuery830.addListener(checkMediaQuery)