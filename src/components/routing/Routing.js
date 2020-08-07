import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AllJokesContainer } from '../AllJokes'
import { SelectedJoke } from '../SelectedJoke'

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllJokesContainer} />
        <Route path="/joke/:id" component={SelectedJoke} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Routing;
