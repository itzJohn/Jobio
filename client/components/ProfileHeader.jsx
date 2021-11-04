import React, { Component } from 'react';

const ProfileHeader = ({pic,github,linkedin,stat}) => {
  return (
    <div className="profileHeader">
      <div className="right">
        <img src={pic} />
      </div>
      <div className='left'>
        <h3>Social Media</h3>
        <a href={github}>GitHub Icon</a>
        <a href={linkedin}>LinkedIn Icon</a>
        <a href={linkedin}>Youtube Icon</a>
        <br/>
        <h3>Job Search Tracker</h3>
        <p>Considering: <span>{stat[1]}</span></p>
        <p>Applied: <span>{stat[2]}</span></p>
        <p>In-Progress: <span>{stat[3]}</span></p>
        <p>Archived: <span>{stat[4]}</span></p>
        <p>Total Applications: <span>{stat[0]}</span></p>

      </div>

    
    </div>
  );
};


export default ProfileHeader;