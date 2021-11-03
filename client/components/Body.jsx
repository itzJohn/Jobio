import React, { Component } from 'react';
import JobCards from './JobCards.jsx';
import { Link } from 'react-router-dom';

const Body = ({jobs}) => {
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
      </header>

    <div className="jobCardContainer">
      {jobCards}
    </div>
  </div>
  )
};

export default Body;