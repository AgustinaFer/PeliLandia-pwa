

const API_KEY = '4beb6761259147c71086e8f4a4e96308';




// elementos DOM
const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownContent = document.getElementById("dropdown-content");
const contentCover = document.getElementById("content-cover");


function navbarMenuCollapsable() {
  dropdownBtn.classList.toggle('is-active');
  contentCover.classList.toggle('content-cover');
  dropdownContent.classList.toggle('closed');
}
// hambur
dropdownBtn.addEventListener('click', navbarMenuCollapsable);

contentCover.addEventListener('click', navbarMenuCollapsable);



//  DOM 
const searchForm = document.forms["search-form"];
const searchInput = null;


function validateSearchForm() {
  const queryValue = searchInput.value;
  return (queryValue.length > 0 && /[\S]/.test(queryValue)) ? true : false;
}



function getUrlParams(url) {
  const params = {};
  const parser = document.createElement('a');
  parser.href = url;
  const vars = parser.search.substring(1).split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    params[pair[0]] = decodeURIComponent(pair[1]);
  }
  return params;
};



function movieObjsToHTML(dataArray, limit) {
  let finalLimit;
  if (limit && limit < dataArray.length) {
    finalLimit = limit;
  } else {
    finalLimit = dataArray.length;
  }
  const moviesArray = [];
  for (let i = 0; i < finalLimit; i++) {
    moviesArray.push(`<article>
    <a href="movie-details.html?id=${dataArray[i].id}">
      <div class="item__img">
        <img src="https://image.tmdb.org/t/p/w500${dataArray[i].poster_path}" alt="${dataArray[i].title} poster">
      </div>
      <h3 class="item__title">${dataArray[i].title}</h3>
      <p class="item__description">${dataArray[i].overview}</p>
    </a>
  </article>`);
  }
  return moviesArray.join('');
}