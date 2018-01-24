import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Form } from "reactstrap";

class SearchByActor extends Component {
  render() {
    const { handleSubmit, reset } = this.props;
    const submit = values => this.props.searchByActor(values).then(reset);

    return (
      <Form className="search" onSubmit={this.props.handleSubmit}>
        <Field
          type="search"
          name="search"
          component="input"
          placeholder="Search by actor name"
          className="form-control search__input"
        />
        <span className="search__icon">🔍</span>
      </Form>
    );
  }
}

SearchByActor = reduxForm({
  form: "SearchByActor"
})(SearchByActor);

export default SearchByActor;
