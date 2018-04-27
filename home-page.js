const baseURL = "https://shrouded-escarpment-19270.herokuapp.com";

$(document).ready(() => {

  getAll().then(response => {
    const movies = response.data.movies;
    renderMovieList(movies)
  })

  $('#new-movie-button').click(() => {
    window.location = './newpage.html';
  })

});
