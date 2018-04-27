const updateMovie = (movie) => {
  return `
    <h1>${movie.title}</h1>
    <img src="${movie.posterURL}" alt="poster" class="img-thumbnail poster">
    <form>
      <div class="form-group">
        <label for="formGroupExampleInput">Title</label>
        <input type="text" class="form-control" id="title" placeholder="${movie.title}">
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Director</label>
        <input type="text" class="form-control" id="director" placeholder="${movie.director}">
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Year</label>
        <input type="text" class="form-control" id="year" placeholder="${movie.year}">
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Rating</label>
        <input type="text" class="form-control" id="rating" placeholder="${movie.rating}">
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Post URL</label>
        <input type="text" class="form-control" id="poster" placeholder="${movie.posterURL}">
      </div>
      <div>
        <button id="updateButton" type="button" class="btn btn-outline-primary btn-lg float-right">Submit</button>
      </div>
    </form>
  `;
}

const displayEditForm = (movie) => {
  $('#editBox').html(updateMovie(movie));

  $('#updateButton').click(() => {
    const title = $('#title').val()
    const director = $('#director').val()
    const year = $('#year').val()
    const rating = $('#rating').val()
    const poster = $('#poster').val()
    update(movie.id, title, director, year, rating, poster).then((response) => {
      window.location = `home.html`;
      renderMovieList()
    })
  })
}