import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies, deleteMovie } from "../features/movies/actions";
import { Button } from "reactstrap";
import { Link } from "react-router";

export class MoviesList extends Component {
  componentDidMount() {
    this.props.fetchMovies({
      title: this.props.location.query.title || "",
      actor: this.props.location.query.actor || ""
    });
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.location.query.title !== nextProps.location.query.title ||
      this.props.location.query.actor !== nextProps.location.query.actor
    ) {
      this.props.fetchMovies({
        title: nextProps.location.query.title,
        actor: nextProps.location.query.actor
      });
    }
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
