import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import Profile from './components/Profile.jsx'
import CreateJob from './components/CreateJob.jsx';



const App = props => {
  return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={Profile}
          />
          <Route
            exact
            path="/create"
            component={CreateJob}
          />
          <Route
            exact
            path="/create/:jobId"
            component={CreateJob}
          />
        </Switch>
      </Router>
  );
};

export default App;
