import React, { Component } from "react";
import { Field, reduxForm, FieldArray } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router";
import { createMovie } from "../features/movies/actions";
import InputField from "./InputField";
import { required, maxLength } from "../utils/validation";
import { Col, Button, Form, FormGroup, Label } from "reactstrap";

const ActorsField = ({ fields }) => (
  <Col sm={9}>
    {fields.map((name, i) => (
      <FormGroup row key={i}>
        <Col sm={10}>
          <Field
            type="input"
            name={`${name}.name`}
            id="actors"
            component={InputField}
            className="form-control"
            validate={required}
          />
        </Col>
        <Col sm={2}>
          <Button color="danger" onClick={() => fields.remove(i)}>
            -
          </Button>
        </Col>
      </FormGroup>
    ))}

    <Button size="sm" color="success" onClick={() => fields.push({ name: "" })}>
      +
    </Button>
  </Col>
);

class AddMovieForm extends Component {
  submit = values =>
    this.props
      .createMovie(values)
      .then(() => this.props.router.push("/"));

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <div>
        <h3 className="mb-20">Add new movie</h3>
        <Link to="/movies" className="page__link">
          Back to movies
        </Link>

        <Form onSubmit={handleSubmit(this.submit)}>
          <FormGroup row>
            <Label for="title" sm={3}>
              Title
            </Label>

            <Col sm={9}>
              <Field
                type="text"
                name="title"
                component={InputField}
                placeholder="Enter movie name"
                validate={required}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="title" sm={3}>
              Release year
            </Label>

            <Col sm={9}>
              <Field
                type="number"
                name="year"
                component={InputField}
                placeholder="Enter release year"
                validate={[maxLength(4)]}
              />
            </Col>
          </FormGroup>

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

            <FieldArray name="actors" component={ActorsField} />
          </FormGroup>

          <FormGroup row>
            <Col sm={{ size: 9, offset: 3 }}>
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
    format: "vhs",
    actors: []
  }
})(AddMovieForm);

export default connect(null, { createMovie })(AddMovieForm);
