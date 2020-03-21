import React, { Component } from 'react';
import QualinteerContext from '../../context/QualinteerContext'

export default class JobDetails extends Component {
  static contextType = QualinteerContext;

  //MAKE SURE TO REPLACE THE USER TYPE WITH OUR AUTH
  render() {
    const { title, description, start, duration, commitment, edlevel, experience, license, remote, posted, company, location, website } = this.props.job
    return (
      <>
        <h3 className='jobTitle'>{title}</h3>
        <p className='companyInfo'>{company}</p>
        <p className='companyInfo'>{location}</p>
        {website && <p className='companyInfo'>{website}</p>}
        {this.context.userType === 'volunteer' && <button type='button' className='volunteerButton'>Volunteer!</button>}
        <p className='jobInfo'><b>POSTED ON: </b>{posted}</p>
        <p className='jobInfo'><b>START DATE: </b>{start}</p>
        <p className='jobInfo'><b>JOB DURATION: </b>{duration}</p>
        <p className='jobInfo'><b>JOB COMMITMENT (HRS/WK): </b>{commitment}</p>
        <p className='jobInfo'><b>EDUCATION LEVEL REQUESTED: </b>{edlevel}</p>
        {experience && <p className='jobInfo'><b>EXPERIENCE REQUESTED: </b>{experience}</p>}
        {license && <p className='jobInfo'><b>LICENSE REQUESTED: </b>{license}</p>}
        <p className='jobInfo'><b>OPTION TO VOLUNTEER REMOTELY: </b>{remote}</p>
        <p className='jobDescription'><b>JOB DESCRIPTION: </b>{description}</p>
      </>
    );
  }
}