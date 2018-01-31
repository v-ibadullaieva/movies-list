import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import InputField from "./InputField";
import { required } from "../utils/validation";
import { importMovies } from "../features/movies/actions";
import { Link } from "react-router";
import { Col, Button, Form, FormGroup, FormText } from "reactstrap";

class AddFileForm extends Component {
  submit = values =>
    this.props
      .importMovies(values)
      .then(() => this.props.router.push("/"));

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <div>
        <Link to="/movies" className="page__link">
          Back to movies
        </Link>
        <Form onSubmit={handleSubmit(this.submit)}>
          <FormGroup row>
            <Col sm={5}>
              <Field
                type="file"
                name="file"
                component={InputField}
                className="form-control-file"
                validate={[required]}
              />
              <FormText color="muted">
                Import yout file with movies .txt
              </FormText>
            </Col>
            <Col sm={4}>
              <Button disabled={submitting} type="submit">
                Import
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

AddFileForm = reduxForm({
  form: "AddFileForm"
})(AddFileForm);

export default connect(null, { importMovies })(AddFileForm);
