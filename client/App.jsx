import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from './components/Profile.jsx'
import CreateJob from './components/CreateJob.jsx';


const App = props => {
  return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={Profile}
          />
          <Route
            exact
            path="/create/"
            component={CreateJob}
          />
          <Route
            exact
            path="/create/:jobId"
            component={CreateJob}
          />
        </Switch>
      </main>
  );
};

export default App;
