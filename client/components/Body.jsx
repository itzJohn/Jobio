import React, { Component } from 'react';
import JobCards from './JobCards.jsx';
import { Link } from 'react-router-dom';

const Body = ({jobs, filter}) => {
  //map all the cards into an array
  const jobCards = jobs.map((ele, i) => {
    return (
      <JobCards
      key={ele._id}
      info={ele}
      />
    );
  });

  return(
    <div className="BodyWrapper">
      <header className="ProfileBodyHeader">
      <h1>Jobs</h1>
      <Link to={'/create'}>
        <button
         type="button"
         className="btnSecondary"
        >
        Add a Job
        </button>
      </Link>
      <div className='filterWrapper'>
        <label>Filter: </label>
        <button onClick={() => filter('All')}>All</button>
        <button onClick={() => filter('Considering')}>Considering</button>
        <button onClick={() => filter('Applied')}>Applied</button>
        <button onClick={() => filter('In-Progress')}>In-progress</button>
        <button onClick={() => filter('Archived')}>Archived</button>
      </div>
      </header>

    <div className="jobCardContainer">
      {jobCards}
    </div>
  </div>
  )
};

export default Body;