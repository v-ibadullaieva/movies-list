import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { Router, Route, browserHistory } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import MoviesPage from "./components/MoviesPage";
import Movie from "./components/Movie";
import AddMovieForm from "./components/AddMovieForm";
import AddFileForm from "./components/AddFileForm";

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="movies" component={MoviesPage} />
        <Route path="movies/new" component={AddMovieForm} />
        <Route path="movies/import" component={AddFileForm} />
        <Route path="movies/:id" component={Movie} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
