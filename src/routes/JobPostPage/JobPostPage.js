import React, { Component } from 'react';
import JobPostForm from '../../components/JobPostForm/JobPostForm'
export default class JobPostPage extends Component {
  render() {
    return (
      <div className="jobPostContainer">
        <JobPostForm history={this.props.history} />
      </div>
    );
  }
}