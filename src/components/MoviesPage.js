import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchMovies, deleteMovie } from "../features/movies/actions";
import { Button, Collapse } from "reactstrap";
import { Link } from "react-router";
import SearchByTitle from "./SearchByTitle";
import SearchByActor from "./SearchByActor";
import MoviesList from "./MoviesList";
import AddFileForm from "./AddFileForm";

class MoviesPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <div>
          <Button
            color="primary"
            onClick={this.toggle}
            style={{ marginBottom: "1rem" }}
          >
            Import file
          </Button>
          <Collapse isOpen={this.state.isOpen}>
            <AddFileForm />
          </Collapse>
        </div>
        <Link to={`/movies/new`} className="page__link">
          Add new movie
        </Link>
        <SearchByTitle />
        <SearchByActor />
        <MoviesList />
      </div>
    );
  }
}

export default MoviesPage;
