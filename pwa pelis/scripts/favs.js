const favs = document.getElementById("favs");

function loadFavs() {
    document.getElementById("favs-title").innerHTML = `Tus favs`;

    JSON.parse(localStorage.getItem("favs")).map(fav => 
      agregarNodosHijos(fav)
      )
  }

  function agregarNodosHijos(fav){
    {
      let nodoArticle = document.createElement('article');
      let nodoA = document.createElement('a');
      let nodoDivImg = document.createElement('div');
      nodoDivImg.classList.add('item__img');
      let nodoImagen = document.createElement('img');
      nodoImagen.src = fav.img; 
      nodoDivImg.appendChild(nodoImagen);
      let nodoTitulo = document.createElement('h3');
      nodoTitulo.classList.add('item__title');
      nodoTitulo.innerText = fav.title;
      nodoA.appendChild(nodoDivImg);
      nodoA.appendChild(nodoTitulo);
      nodoArticle.append(nodoA);
      favs.appendChild(nodoArticle);
      
  }
}
  
  window.addEventListener('load', loadFavs);
