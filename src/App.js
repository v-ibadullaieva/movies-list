import React, { Component } from "react";
import "./App.css";
// import MoviesList from "./components/MoviesList";
import { Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <h1 className="pt-10">Movie app</h1>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default App;
