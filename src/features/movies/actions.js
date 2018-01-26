import * as api from "../../api";
export const MOVIES_FETCH_SUCCESS = "MOVIES_FETCH_SUCCESS";
export const MOVIE_FETCH_SUCCESS = "MOVIE_FETCH_SUCCESS";
export const DELETE_MOVIE_SUCCESS = "DELETE_MOVIE_SUCCESS";
export const CREATE_MOVIE_SUCCESS = "CREATE_MOVIE_SUCCESS";
export const IMPORT_MOVIES_SUCCESS = "IMPORT_MOVIES_SUCCESS";

export const fetchMovies = ({ title, actor }) => dispatch =>
	api
		.fetchMovies({ title, actor })
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
		.then(movie => dispatch({ type: CREATE_MOVIE_SUCCESS, payload: movie }));

export const importMovies = file => dispatch =>
	api.importMovies(file).then(() => dispatch({ type: IMPORT_MOVIES_SUCCESS }));
