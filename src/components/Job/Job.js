import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Job extends Component {

  truncate = (str, num_words) => {
    return str.split(' ').splice(0, num_words).join(' ');
  }

  render() {
    const { id, title, description, posted, company, location } = this.props
    return (
      <div className='jobCard'>
        <Link to={`/job/${id}`}>
          <h3 className='jobTitle'>{title}</h3>
          <h4 className='companyInfo'>{company}</h4>
          <h4 className='companyInfo'>{location}</h4>
          <p className='jobDescription'>Job Description: {this.truncate(description, 20)}...</p>
          <p className='jobPosted'>Job Posted On: {posted}</p>
        </Link>
      </div>
    );
  }
}