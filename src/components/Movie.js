import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../features/movies/actions";

class Movie extends Component {
  componentDidMount() {
    if (!this.props.movie) {
      this.props.fetchMovie(this.props.params.id);
    }
  }

  render() {
    const { movie } = this.props;

    if (movie) {
      return (
        <li>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <p>{movie.format}</p>
          <ul>{movie.actors.map((actor, i) => <li key={i}>{actor}</li>)}</ul>
        </li>
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
