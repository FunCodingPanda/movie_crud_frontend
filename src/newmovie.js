const createNewMovie = () => {
  return `
    <form>
      <div class="form-group">
        <label for="formGroupExampleInput">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title">
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput">Director</label>
        <input type="text" class="form-control" id="director" placeholder="Director">
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput">Year</label>
        <input type="text" class="form-control" id="year" placeholder="Year">
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput">Rating</label>
        <input type="text" class="form-control" id="rating" placeholder="Rating">
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput">Poster URL</label>
        <input type="text" class="form-control" id="posterURL" placeholder="Poster URL">
      </div>
      <div>
        <button id="Submit" type="button" class="btn btn-outline-primary btn-lg float-right">Submit</button>
      </div>
    </form>
  `;
}

const displayMovieForm = () => {
  $('#newMovie').html(createNewMovie())
}

const setupCreateButton = () => {
  $('#Submit').click(() => {
    const title = $('#title').val();
    const director = $('#director').val();
    const year = $('#year').val();
    const rating = $('#rating').val();
    const posterURL = $('#posterURL').val();
    create(title, director, year, rating, posterURL).then((response) => {
      const movie = response.data.movie;
      window.location = `./movie.html#${movie.id}`
    })
  })
}