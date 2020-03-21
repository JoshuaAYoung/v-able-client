import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
export default class Job extends Component {

  truncate = (str, num_words) => {
    return str.split(' ').splice(0, num_words).join(' ');
  }

  render() {
    const { id, title, description, posted, company, location } = this.props
    return (
      <>
        <NavLink to={`/job/${id}`} className='jobLink'>
          <h3 className='jobTitle'>{title}</h3>
          <p className='companyInfo'>{company}</p>
          <p className='companyInfo'>{location}</p>
          <p className='jobDescription'><b>JOB DESCRIPTION:</b> {this.truncate(description, 20)}... CLICK TO READ MORE</p>
          <p className='jobPosted'><b>POSTED ON:</b> {posted}</p>
        </NavLink>
      </>
    );
  }
}