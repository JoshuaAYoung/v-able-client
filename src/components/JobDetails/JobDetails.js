import React, { Component } from 'react';
import QualinteerContext from '../../context/QualinteerContext'

export default class JobDetails extends Component {
  static contextType = QualinteerContext;

  render() {
    const { title, description, start, duration, commitment, edlevel, experience, license, physical, posted, company, location } = this.props.job
    return (
      <>
        <h3 className='jobTitle'>{title}</h3>
        <h4 className='companyInfo'>{company}</h4>
        <h4 className='companyInfo'>{location}</h4>
        {this.context.userType === 'volunteer' && <button type='button' className='volunteerButton'>Volunteer!</button>}
        <p className='jobInfo'>Posted On: {posted}</p>
        <p className='jobInfo'>Job Begins: {start}</p>
        <p className='jobInfo'>Job Duration: {duration}</p>
        <p className='jobInfo'>Job Committment (hrs/week): {commitment}</p>
        <p className='jobInfo'>Education Level Requested: {edlevel}</p>
        <p className='jobInfo'>Experience Requested: {experience}</p>
        <p className='jobInfo'>License Requested: {license}</p>
        <p className='jobInfo'>Option to Volunteer Remotely: {physical}</p>
        <p className='jobDescription'>Job Description: {description}</p>
      </>
    );
  }
}