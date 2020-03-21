import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import QualinteerContext from '../../context/QualinteerContext'
import uuid from 'react-uuid'
export default class JobPostForm extends Component {
  static contextType = QualinteerContext;

  getToday = () => {
    let today = new Date();
    let mm = today.getMonth();
    let dd = today.getDate();
    let yyyy = today.getFullYear();
    return (mm + '-' + dd + '-' + yyyy)
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const newJob = {
      id: uuid(),
      title: ev.target['title'].value,
      description: ev.target['description'].value,
      start: ev.target['start'].value,
      duration: ev.target['duration'].value,
      commitment: ev.target['commitment'].value,
      edlevel: ev.target['edlevel'].value,
      experience: ev.target['experience'].value,
      license: ev.target['license'].value,
      physical: ev.target['physical'].value,
      posted: this.getToday(),
      company: 'Stuff and Co.',
      location: 'Denver, CO 80220'
    };
    this.context.addJob(newJob);
    this.props.history.push('/jobboard');
  }

  render() {
    return (
      <div>
        <form className='post-htmlForm' onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='title'>Job Title</label>
            <br />
            <input placeholder='Example: Senior Architect' type='text' name='title' id='title' />
          </div>
          <br />
          <div>
            <label htmlFor='description'>Job Description</label>
            <br />
            <textarea rows='4' cols='50' placeholder='Write a little bit about expectations for the job...' type='description' name='description' id='description' ></textarea>
          </div>
          <br />
          <div>
            <label htmlFor='start'>Start Date</label>
            <br />
            <input placeholder='Enter a date. Defaults to today.' type='text' name='start' id='start' />
          </div>
          <br />
          <div>
            <label htmlFor='duration'>Duration</label>
            <br />
            <input placeholder='Example: 7 weeks' type='text' name='duration' id='duration' />
          </div>
          <br />
          <div>
            <label htmlFor='commitment'>Estimated Time Commitment Per Week</label>
            <br />
            <input placeholder='Number of Hours' type='text' name='commitment' id='commitment' />
          </div>
          <br />
          <div>
            <label htmlFor='edlevel'>Education Level (optional)</label>
            <br />
            <select id='edlevel' name='edlevel'>
              <option value='none'>None</option>
              <option value='highschool'>High School</option>
              <option value='associates'>Associates Degree</option>
              <option value='bachelors'>Bachelors Degree</option>
              <option value='masters'>Masters Degree</option>
              <option value='phd'>Ph. D.</option>
            </select>
          </div>
          <br />
          <div>
            <label htmlFor='experience'>Experience</label>
            <br />
            <input placeholder='Example: Residential Architecture' type='text' name='experience' id='experience' />
          </div>
          <br />
          <div>
            <label htmlFor='license'>License or Certification Required (optional)</label>
            <br />
            <input placeholder="Example: Driver's License" type='text' name='license' id='license' />
          </div>
          <br />
          <div>
            <label htmlFor='physical'>Can this job be done remotely?</label>
            <br />
            <select id='physical' name='physical'>
              <option value=''>Choose an option...</option>
              <option value='remote'>Yes.</option>
              <option value='in-person'>No.</option>
            </select>
          </div>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}


