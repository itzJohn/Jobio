import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from './components/Profile.jsx'
// import CreateJob from './components/CreateJob.jsx'


const App = props => {
  return (
      <main>
        <Profile />
      </main>
  );
};

export default App;
