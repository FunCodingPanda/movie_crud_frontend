const baseURL = "https://shrouded-escarpment-19270.herokuapp.com";

$(document).ready(() => {

  const hash = window.location.hash;
  const id = parseInt(hash.slice(1));

  getById(id).then((response) => {
    const movie = response.data.movies[0];
    displayEditForm(movie);
  });

});
