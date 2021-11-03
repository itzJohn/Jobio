import React from 'react';

const JobCards = ({ info }) => {
  const { title, company, location} = info;

  return (
    <article className="jobCard">
      <ul className="detailsList">
        <li className="charDetail">Title: {title}</li>
        <li className="charDetail">Company: {company} </li>
        <li className="charDetail">Location: {location}</li>
      </ul>
      
    </article>
  );
};

export default JobCards;