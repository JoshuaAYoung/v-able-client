import React, { Component } from 'react';
import JobDetails from '../../components/JobDetails/JobDetails'

export default class JobBoardPage extends Component {

  render() {
    console.log(this.props.job)
    return (
      <div className='jobDetails'>
        <JobDetails job={this.props.job} />
      </div>
    );
  }
}
