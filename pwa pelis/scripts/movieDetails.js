//  DOM 
const movieDetails = document.getElementById("movie-details");
const movieImagesContainer = document.getElementById("movie-images");

//  URL 
let movieId = getUrlParams(window.location.href).id;


window.addEventListener('load', () => {
  loadMovieData(movieId);
  loadMovieImages(movieId, 10);
});


function loadMovieData(id) {
  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4beb6761259147c71086e8f4a4e96308`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error api.");
    })
    .then(objData => {
      document.title = `${objData.title} | PeliLandia`;
      const genres = objData.genres.map(genre => `<span>${genre.name}</span>`).join('');
      movieDetails.innerHTML = `
        <div class="movie-poster"><img src="https://image.tmdb.org/t/p/w500${objData.poster_path}"></div>
        <h1 class="movie-title">${objData.title}</h1>
        <p class="movie-vote">${objData.vote_average}</p>
        <p class="release-date">${objData.release_date}</p>
        <p class="movie-description">${objData.overview}</p>
        <p class="movie-genres">${genres}</p>
      `;
    })
    .catch(error => console.error(error));
}



const mediaQuery830 = window.matchMedia("(hover) and (min-width: 830px)");



let movieImages = undefined;



function loadMovieImages(id, amount) {
  fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=4beb6761259147c71086e8f4a4e96308`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error api");
    })
    .then(objData => {
      const images = [];
      let i = 0;
      while (i < objData.backdrops.length && i < amount) {
        images.push(`<img src="https://image.tmdb.org/t/p/w500${objData.backdrops[i].file_path}">`);
        i++;
      }
      movieImagesContainer.innerHTML = images.join('');
      movieImages = document.querySelectorAll('#movie-images > img');
      return movieImages;
    })
    .then(images => {
      
      if (mediaQuery830.matches) {
        roundPicturesLayout(images);
      }
    })
    .catch(error => console.error(error));
}



function checkMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {
    movieImages.forEach(image => {
      image.dataset.roundLayout = "true"; 
    });
    roundPicturesLayout(movieImages);
  } else {
    movieImages.forEach(image => {
      image.style.transform = "unset";
      image.dataset.roundLayout = "false";
    });
  }
}


mediaQuery830.addListener(checkMediaQuery)