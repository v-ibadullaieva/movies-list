const API_URL = `${process.env.REACT_APP_API_URL}/api/movies`;

export const fetchMovies = ({ title, actor }) =>
  fetch(`${API_URL}?title=${title}&actor=${actor}`).then(res => res.json());

export const fetchMovie = id =>
  fetch(`${API_URL}/${id}`).then(res => res.json());

export const createMovie = movie =>
  fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(movie)
  }).then(res => res.json());

export const importMovies = values => {
  const formData = new FormData();
  formData.append("file", values.file[0]);

  return fetch(`${API_URL}/import`, {
    method: "POST",
    body: formData
  }).then(res => res.json());
};

export const deleteMovie = id =>
  fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  }).then(res => res.json());
