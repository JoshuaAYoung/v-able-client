import React, { Component } from 'react';
import JobPostForm from '../../components/JobPostForm/JobPostForm'
import './JobPostPage.css'
export default class JobPostPage extends Component {
  render() {
    return (
      <div className="jobPostContainer">
        <h2 className='pageHeader'>Post a Job</h2>
        <JobPostForm history={this.props.history} />
      </div>
    );
  }
}