import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import JobCards from './JobCards.jsx';
import ProfileHeader from './ProfileHeader.jsx';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePic: "https://randomuser.me/api/portraits/lego/1.jpg",
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/",
      fetchedJob: false,
      jobs: []
    };
  }

  componentDidMount() {
    fetch('/profile')
      .then(res => res.json())
      .then((jobs) => {
        if (!Array.isArray(jobs)) jobs = [];
        return this.setState({
          jobs,
          fetchedJob: true
        });
      })
      .catch(err => console.log('Profile.componentDidMount: get jobs cards: ERROR: ', err));
  }

  render() {
    if (!this.state.fetchedJob) return (
      <div>
        <h1>Loading data, please wait...</h1>
      </div>
    );

    const { jobs } = this.state;

    const jobCards = jobs.map((ele, i) => {
      return (
        <JobCards
          key={ele._id}
          info={ele}
        />
      );
    });

    return (
      <section className="mainSection">
        <ProfileHeader pic={this.state.profilePic} github={this.state.github} linkedin={this.state.linkedin}/>
        <header className="pageHeader">
          <h2>Jobs</h2>
          <Link to={'/create'}>
            <button
              type="button"
              className="btnSecondary"
            >
              Create Character
            </button>
          </Link>
        </header>
        <div className="jobCardContainer">
          {jobCards}
        </div>
      </section>
    );
  }
}

export default Profile;
