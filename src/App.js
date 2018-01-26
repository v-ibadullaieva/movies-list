import React from "react";
import "./App.css";
import { Container } from "reactstrap";

export default (props) => 
  <div className="App">
    <Container>
      <h1 className="pt-10">Movie app</h1>
      {props.children}
    </Container>
  </div>
