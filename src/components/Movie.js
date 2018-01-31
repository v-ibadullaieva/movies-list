import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { fetchMovie } from "../features/movies/actions";

export class Movie extends Component {
  componentDidMount() {
    if (!this.props.movie) {
      this.props.fetchMovie(this.props.params.id);
    }
  }

  render() {
    const { movie } = this.props;

    if (movie) {
      return (
        <div>
          <Link to="/" className="page__link">
            Back to movies
          </Link>
          <li>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <p>{movie.format}</p>
            <ul>
              {movie.actors.map((actor, i) => <li key={i}>{actor.name}</li>)}
            </ul>
          </li>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default connect(
  (state, props) => ({
    movie: state.app.movies[props.params.id]
  }),
  { fetchMovie }
)(Movie);
