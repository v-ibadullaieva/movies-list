import React from "react";
import { Input, FormFeedback } from "reactstrap";

const InputField = ({
  input,
  type,
  name,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <div>
    <Input
      {...input}
      value={type === "file" ? undefined : input.value}
      type={type}
      name={name}
      placeholder={placeholder}
      valid={touched && error ? false : undefined}
    />
    {touched && (error && <FormFeedback>{error}</FormFeedback>)}
  </div>
);

export default InputField;
