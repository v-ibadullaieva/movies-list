import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createMovie } from "../features/movies/actions";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

// TODO: add form validation

const required = value => (value ? undefined : "Required");

const renderField = ({
  input,
  label,
  type,
  name,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <FormGroup row>
      <Label for="title" sm={3}>
        {label}
      </Label>
      <Col sm={9}>
        <input
          {...input}
          type={type}
          name={name}
          placeholder={placeholder}
          className="form-control"
        />
        {touched && (error && <span className="form-error">{error}</span>)}
      </Col>
    </FormGroup>
  );
};

class AddMovieForm extends Component {
  render() {
    const { handleSubmit, reset, submitting } = this.props;
    const submit = values => this.props.createMovie(values).then(reset);

    return (
      <div>
        <h3 className="mb-20">Add new movie</h3>
        <Form onSubmit={handleSubmit(submit)}>
          <Field
            type="text"
            name="title"
            label="Title"
            component={renderField}
            placeholder="Enter movie name"
            validate={[required]}
          />
          <Field
            type="number"
            name="year"
            label="Release year"
            component={renderField}
            placeholder="Enter release year"
            validate={[required]}
          />
          <FormGroup row>
            <Label for="format" sm={3}>
              Format
            </Label>
            <Col sm={9}>
              <Field
                name="format"
                id="format"
                component="select"
                className="form-control"
              >
                <option value="vhs">VHS</option>
                <option value="dvd">DVD</option>
                <option value="blue-ray">Blue-ray</option>
              </Field>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="actors" sm={3}>
              Actors
            </Label>
            <Col sm={9}>
              <Field
                type="textarea"
                name="actors"
                id="actors"
                component="input"
                className="form-control"
              />
              <span size="xs" className="form-plus-btn">
                +
              </span>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button disabled={submitting} type="submit">
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

AddMovieForm = reduxForm({
  form: "MovieForm",
  initialValues: {
    format: "vhs"
  }
})(AddMovieForm);

export default connect(null, { createMovie })(AddMovieForm);
