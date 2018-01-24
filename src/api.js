// let MOVIES = [
//   {
//     id: 895734897,
//     title: "Titanic",
//     year: 1999,
//     format: "Blue-Ray",
//     actors: ["Leo", "Kate"]
//   },
//   {
//     id: 98734287,
//     title: "Avatar",
//     year: 2010,
//     format: "DVD",
//     actors: ["Bob", "Jane"]
//   },
//   {
//     id: 9873984753,
//     title: "Begining",
//     year: 2015,
//     format: "DVD",
//     actors: ["Stive", "Lora"]
//   }
// ];

// export const fetchMovies = () =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       // TODO: ignore capital letters

//       MOVIES.sort((a, b) => {
//         if (a.title < b.title) return -1;
//         if (a.title > b.title) return 1;
//         return 0;
//       });

//       resolve(MOVIES);
//     }, 500)
//   );

export const fetchMovies = () =>
  fetch(`${process.env.REACT_APP_API_URL}/api/movies`).then(res => res.json());

// export const fetchMovie = id =>
//   new Promise((resolve, reject) =>
//     setTimeout(
//       () => resolve(MOVIES.find(movie => movie.id === Number.parseInt(id))),
//       500
//     )
//   );
export const fetchMovie = id =>
  fetch(`${process.env.REACT_APP_API_URL}/api/movies/${id}`).then(res =>
    res.json()
  );

// export const createMovie = movie =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       const newMovie = {
//         ...movie,
//         id: Math.round(Math.random() * 100000)
//       };

//       MOVIES.push(newMovie);
//       resolve(newMovie);
//     }, 500)
//   );

export const createMovie = movie =>
  fetch(`${process.env.REACT_APP_API_URL}/api/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(movie)
  }).then(res => res.json());

// export const deleteMovie = id =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       MOVIES = MOVIES.filter(movie => movie.id !== id);
//       resolve(null);
//     }, 500)
//   );

export const deleteMovie = id =>
  fetch(`${process.env.REACT_APP_API_URL}/api/movies/${id}`, {
    method: "DELETE"
  }).then(res => res.json());
