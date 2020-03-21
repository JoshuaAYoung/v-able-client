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
      remote: ev.target['remote'].value,
      posted: this.getToday(),
      company: 'Stuff and Co.',
      location: 'Denver, CO 80220',
      website: 'www.companywebsite.com'
    };
    this.context.addJob(newJob);
    this.props.history.push('/jobboard');
  }

  render() {
    return (
      <div>
        <form className='post-htmlForm' onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='title' className='postLabel'>Job Title</label>
            <br />
            <input placeholder='Example: Senior Architect' type='text' name='title' id='title' className='postInput' />
          </div>
          <br />
          <div>
            <label htmlFor='description' className='postLabel'>Job Description</label>
            <br />
            <textarea rows='4' cols='30' placeholder='Write a little bit about expectations for the job...' type='description' name='description' id='description' className='descriptionBox'></textarea>
          </div>
          <br />
          <div>
            <label htmlFor='start' className='postLabel'>Start Date</label>
            <br />
            <input placeholder='Enter a starting date.' type='text' name='start' id='start' className='postInput' />
          </div>
          <br />
          <div>
            <label htmlFor='duration' className='postLabel'>Duration</label>
            <br />
            <input placeholder='Example: 7 weeks' type='text' name='duration' id='duration' className='postInput' />
          </div>
          <br />
          <div>
            <label htmlFor='commitment' className='postLabel'>Estimated Hours Per Week</label>
            <br />
            <input placeholder='Number of Hours' type='text' name='commitment' id='commitment' className='postInput' />
          </div>
          <br />
          <div>
            <label htmlFor='edlevel' className='postLabel'>Education Level</label>
            <br />
            <select id='edlevel' name='edlevel' className='postInput'>
              <option value=''>...</option>
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
            <label htmlFor='experience' className='postLabel'>Experience (optional)</label>
            <br />
            <input placeholder='Example: Residential Architecture' type='text' name='experience' id='experience' className='postInput' />
          </div>
          <br />
          <div>
            <label htmlFor='license' className='postLabel'>License or Certification Required (optional)</label>
            <br />
            <input placeholder="Example: Driver's License" type='text' name='license' id='license' className='postInput' />
          </div>
          <br />
          <div>
            <label htmlFor='remote' className='postLabel'>Can this job be done remotely?</label>
            <br />
            <select id='remote' name='remote' className='postInput'>
              <option value=''>Choose an option...</option>
              <option value='remote'>Yes.</option>
              <option value='in-person'>No.</option>
            </select>
          </div>
          <br />
          <button type='submit' className='postButton'>Submit</button>
        </form>
      </div>
    )
  }
}


