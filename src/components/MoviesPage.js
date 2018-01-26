import React, { Component } from "react";
import { Link } from "react-router";
import Search from "./Search";
import MoviesList from "./MoviesList";

class MoviesPage extends Component {
  render() {
    return (
      <div>
        <Link to="/movies/new" className="page__link">
          Add new movie
        </Link>
        <Link to="/movies/import" className="page__link">
          Import movies
        </Link>
        <Search router={this.props.router} />
        <MoviesList router={this.props.router} location={this.props.location} />
      </div>
    );
  }
}

export default MoviesPage;
