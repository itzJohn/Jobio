import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Body from './Body.jsx';
import ProfileHeader from './ProfileHeader.jsx';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePic: "https://randomuser.me/api/portraits/lego/1.jpg",
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/",
      fetchedJob: false,
      jobs: [],
      modalState: {
        open: false,
        type: null,
        position: { top: 0, left: 0 },
        id: null
      }
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


    return (
      <section className="mainSection">
        <ProfileHeader pic={this.state.profilePic} github={this.state.github} linkedin={this.state.linkedin}/>
        <Body jobs={this.state.jobs} />
      </section>
    );
  }
}

export default withRouter(Profile);
