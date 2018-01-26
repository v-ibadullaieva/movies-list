import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "reactstrap";
import { fetchMovies } from "../features/movies/actions";

class Search extends Component {
  submit = ({ title, actor }) => {
    this.props.router.push(`/movies?title=${title || ""}&actor=${actor || ""}`);
  };

  render() {
    return (
      <Form className="search" onSubmit={this.props.handleSubmit(this.submit)}>
        <Field
          type="search"
          name="title"
          component="input"
          placeholder="Search by movie title"
          className="form-control search__input"
        />
        <Field
          type="search"
          name="actor"
          component="input"
          placeholder="Search by actor name"
          className="form-control search__input"
        />
        <Button type="submit">Search</Button>
      </Form>
    );
  }
}

Search = reduxForm({
  form: "Search"
})(Search);

export default connect(null, { fetchMovies })(Search);
