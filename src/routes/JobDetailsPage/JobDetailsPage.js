import React, { Component } from 'react';
import JobDetails from '../../components/JobDetails/JobDetails'
import './JobDetailsPage.css'

export default class JobBoardPage extends Component {

  render() {
    console.log(this.props.job)
    return (
      <div className='jobDetails'>
        <h2 className='pageHeader'>Job Details</h2>
        <JobDetails job={this.props.job} />
      </div>
    );
  }
}
