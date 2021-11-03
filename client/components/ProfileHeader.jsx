import React, { Component } from 'react';

const ProfileHeader = ({pic,github,linkedin}) => {

  return (
    <div className="profileHeader primary">
      <div className='left'>
        <h3>Social Media</h3>
        <a href={github}>GitHub Icon</a>
        <a href={linkedin}>LinkedIn Icon</a>
        <a href={linkedin}>Youtube Icon</a>
        <br/>
        <h3>Job Search Tracker</h3>
        <p>Considering:<span></span></p>
        <p>Applied:<span></span></p>
        <p>Interview Process:<span></span></p>
        <p>Archived:<span></span></p>
        <p>Total Applications:<span></span></p>

      </div>
      <div className="right">
        <img src={pic} />
      </div>
    
    </div>
  );
};


export default ProfileHeader;