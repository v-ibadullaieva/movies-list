import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Form } from "reactstrap";

class SearchByTitle extends Component {
  render() {
    const { handleSubmit, reset } = this.props;
    const submit = values => this.props.searchByTitle(values).then(reset);

    return (
      <Form className="search" onSubmit={this.props.handleSubmit}>
        <Field
          type="search"
          name="search"
          component="input"
          placeholder="Search by movie title"
          className="form-control search__input"
        />
        <span className="search__icon">🔍</span>
      </Form>
    );
  }
}

SearchByTitle = reduxForm({
  form: "SearchByTitle"
})(SearchByTitle);

export default SearchByTitle;
