import React from 'react';
import { Link } from 'react-router-dom';

const JobCards = ({ info }) => {
  const { title, company, location, salary, status, notes} = info;

  const passInfo = {
    pathname: "/create/" + info._id, 
    title, 
    company, 
    location, 
    salary, 
    status, 
    notes,
  }

  return (
    <article className="jobCard">
      <ul className="detailsList">
        <li className="charDetail">Title: {title}</li>
        <li className="charDetail">Company: {company} </li>
        <li className="charDetail">Location: {location}</li>
        <li className="charDetail">Salary: {salary}</li>
        <hr/>
        <li className="charDetail">Status: {status}</li>
        <li className="charDetail">Notes: {notes}</li>
      </ul>

      <Link to={passInfo}>
        <button
         type="button"
         className="btnSecondary"
        >
        Edit
        </button>
      </Link>
    </article>
  );
};

export default JobCards;