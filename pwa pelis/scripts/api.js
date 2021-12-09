const APIKEY = '59f960d3';
const BASE_API_URL = `https://www.omdbapi.com`;
const BASE2_API_URL = `https://api.themoviedb.org/3/movie`;
// const LOAD_MOVIES_URL = BASE_API_URL + `/popular?page=1&language=en-US&api_key=${API_KEY}`;
const LOAD_MOVIES_URL = BASE_API_URL + `/?s=Ame&page=1&apikey=${APIKEY}`;
const armarLinkTrending = (time) => {
    return `https://api.themoviedb.org/3/trending/movie/${time}?api_key=${API_KEY}`;
}

// const armarLinkSearchMovies = (queryString) => {
//     return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${queryString}&include_adult=false`;
// }



const armarLinkSearchMovies = (queryString) => {
    return BASE_API_URL + `/?s=${queryString}&page=1&apikey=${APIKEY}`;
}



// const armarLinkMovieImages = (id) => {
//     return BASE2_API_URL + `/${id}/images?api_key=${API_KEY}`;
// }

// const armarLinkMovieDetails = (id) => {
//     return BASE2_API_URL + `/${id}?api_key=${API_KEY}`;
// }

const armarLinkMovieDetails = (id) => {
    return BASE_API_URL + `/?i=${id}&apikey=${APIKEY}`;
}