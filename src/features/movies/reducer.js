import {
  MOVIES_FETCH_SUCCESS,
  MOVIE_FETCH_SUCCESS,
  DELETE_MOVIE_SUCCESS,
  CREATE_MOVIE_SUCCESS
} from "./actions";

const initState = {
  movies: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case MOVIES_FETCH_SUCCESS: {
      const newMovies = {};
      action.payload.forEach(movie => (newMovies[movie.id] = movie));

      return {
        ...state,
        movies: newMovies
      };
    }
    case MOVIE_FETCH_SUCCESS: {
      return {
        ...state,
        movies: {
          ...state.movies,
          [action.payload.id]: action.payload
        }
      };
    }
    case CREATE_MOVIE_SUCCESS: {
      return {
        ...state,
        movies: {
          ...state.movies,
          [action.payload.id]: action.payload
        }
      };
    }
    case DELETE_MOVIE_SUCCESS: {
      const movies = Object.assign({}, state.movies);
      delete movies[action.payload];

      return {
        ...state,
        movies: movies
      };
    }
    default:
      return state;
  }
};
