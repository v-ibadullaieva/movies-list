import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies, deleteMovie } from "../features/movies/actions";
import { Button } from "reactstrap";
import { Link } from "react-router";

class MoviesList extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <ul className="list">
        {this.props.movies.map(movie => (
          <li key={movie.id} className="list__item">
            <Link to={`/movies/${movie.id}`} className="list__link">
              {movie.title}
            </Link>
            <Button size="sm" onClick={() => this.props.deleteMovie(movie.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    );
  }
}

export default connect(
  state => ({
    movies: Object.values(state.app.movies)
  }),
  { fetchMovies, deleteMovie }
)(MoviesList);
