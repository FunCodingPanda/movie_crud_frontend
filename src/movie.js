const movieRowTemplate = (movie) => {
  return `
    <tr>
      <td><a href="movie.html#${movie.id}">${movie.title}</a></td>
      <td>${movie.director}</td>
      <td>${movie.year}</td>
      <td>${movie.rating}</td>
      <td><button type="button" data-id="${movie.id}" class="btn btn-outline-success btn-sm buttonMargin editButton">Edit</button>
      <button type="button" data-id="${movie.id}" class="btn btn-outline-danger btn-sm deleteButton">Delete</button></td>
    </tr>
  `;
}

const movieTemplate = (movie) => {
  return `
    <div>
      <h1>${movie.title}</h1>
      <img src="${movie.posterURL}" alt="poster" class="img-thumbnail poster">
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>Title</b>: ${movie.title}</li>
      <li class="list-group-item"><b>Director</b>: ${movie.director}</li>
      <li class="list-group-item"><b>Year</b>: ${movie.year}</li>
      <li class="list-group-item"><b>My Rating</b>: ${movie.rating}</li>
    </ul>
  `;
}

const renderMovie = (movie) => {
  $('#box').html(movieTemplate(movie));
}

const renderMovieList = (movies) => {
  $('#view').html('');
  movies.map(movie => $('#view').append(movieRowTemplate(movie)));
  $('.editButton').click((event)=> {
    const id = $(event.target).data('id');
    window.location = `./edit.html#${id}`;
  })
  $('.deleteButton').click((event) => {
    const id = $(event.target).data('id')
    deleteById(id).then(() => {
      window.location.hash = '';
      window.location.reload();
    });
  });
}

const getById = (id) => {
  return axios.get(`${baseURL}/movies/${id}`);
}

const getAll = () => {
  return axios.get(`${baseURL}/movies`);
}

const create = (title, director, year, rating, posterURL) => {
  return axios.post(`${baseURL}/movies`, { title, director, year, rating, posterURL });
}

const update = (id, title, director, year, rating, posterURL) => {
  return axios.put(`${baseURL}/movies/${id}`, { title, director, year, rating, posterURL });
}

const deleteById = (id) => {
  return axios.delete(`${baseURL}/movies/${id}`, { id })
}