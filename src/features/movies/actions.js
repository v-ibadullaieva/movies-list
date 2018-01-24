import * as api from "../../api";
export const MOVIES_FETCH_SUCCESS = "MOVIES_FETCH_SUCCESS";
export const MOVIE_FETCH_SUCCESS = "MOVIE_FETCH_SUCCESS";
export const DELETE_MOVIE_SUCCESS = "DELETE_MOVIE_SUCCESS";
export const CREATE_MOVIE_SICCESS = "CREATE_MOVIE_SICCESS";

export const fetchMovies = movies => dispatch =>
	api
		.fetchMovies()
		.then(movies => dispatch({ type: MOVIES_FETCH_SUCCESS, payload: movies }));

export const fetchMovie = id => dispatch =>
	api
		.fetchMovie(id)
		.then(movie => dispatch({ type: MOVIE_FETCH_SUCCESS, payload: movie }));

export const deleteMovie = id => dispatch =>
	api
		.deleteMovie(id)
		.then(() => dispatch({ type: DELETE_MOVIE_SUCCESS, payload: id }));

export const createMovie = movie => dispatch =>
	api
		.createMovie(movie)
		.then(movie => dispatch({ type: CREATE_MOVIE_SICCESS, payload: movie }));
