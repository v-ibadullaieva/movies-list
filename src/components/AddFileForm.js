import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Col, Button, Form, FormGroup, FormText } from "reactstrap";

// TODO: add form validation

class AddFileForm extends Component {
  render() {
    const { handleSubmit, reset, submitting } = this.props;
    const submit = values => this.props.createMovie(values).then(reset);

    return (
      <Form onSubmit={handleSubmit(submit)} className="collapse__wrap">
        <FormGroup row>
          <Col sm={5}>
            <Field
              type="file"
              name="file"
              id="file"
              component="input"
              className="form-control-file"
            />
            <FormText color="muted">Import yout file with movies .txt</FormText>
          </Col>
          <Col sm={4}>
            <Button disabled={submitting} type="submit">
              Import
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

AddFileForm = reduxForm({
  form: "AddFileForm"
})(AddFileForm);

export default connect(null)(AddFileForm);
// export default connect(null, { importMovies })(AddFileForm);
