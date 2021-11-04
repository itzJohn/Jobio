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
      stat: [0,0,0,0,0],
    };

    this.filter = this.filter.bind(this);
  }

  componentDidMount() {
    fetch('/profile')
      .then(res => res.json())
      .then(({jobs, stat}) => {
        if (!Array.isArray(jobs)) jobs = [];
        return this.setState({
          jobs,
          stat,
          fetchedJob: true
        });
      })
      .catch(err => console.log('Profile.componentDidMount: get jobs cards: ERROR: ', err));
  }

  //test api

  filter(type){
    // check if name is empty
    if (type === 'All') {
      this.componentDidMount();
    } else {
    fetch('/profile/filter?type=' + type)
      .then(res => res.json())
      .then(jobs => {
        console.log(jobs)
        if (!Array.isArray(jobs)) jobs = [];
        return this.setState({jobs});
      })
      .catch(err => console.log('CreateJob fetch /profile/updateJob: ERROR: ', err));
    }
  }

  render() {
    if (!this.state.fetchedJob) return (
      <div>
        <h1>Loading data, please wait...</h1>
      </div>
    );


    return (
      <section className="mainSection">
        <ProfileHeader stat={this.state.stat} pic={this.state.profilePic} github={this.state.github} linkedin={this.state.linkedin}/>
        <Body jobs={this.state.jobs} filter={this.filter} />
      </section>
    );
  }
}

export default withRouter(Profile);
