function searchTrendings(time) {
     fetch(` https://api.themoviedb.org/3/trending/movie/${time}?api_key=${API_KEY}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        moviesContainer.innerHTML = `<p class="error-msg">En estos momentos no se puede mostrar ninguna película.<br>Vuelva a intentarlo más tarde.</p>`;
        throw new Error("Network response was not ok. No resource fetched.");
      })
      .then(objData => {
        moviesArray = objData.results;
        console.log(moviesArray);
        
        let timeOption = time=="week"? 'esta semana': 'de hoy';
        console.log(timeOption);
        document.getElementById("trending-title").innerHTML = `Tendencias de ${timeOption}`;
        document.getElementById("trendings").innerHTML = movieObjsToHTML(moviesArray, 20);
      })
      .catch(error => console.error(error));
  }
  
  
  document.getElementById("button-weekly").addEventListener("click", function () {
      searchTrendings("week");
  });

  document.getElementById("button-daily").addEventListener("click", function () {
      searchTrendings("day");
  });