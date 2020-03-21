import React, { Component } from 'react';
import Job from '../../components/Job/Job'
import QualinteerContext from '../../context/QualinteerContext'
import './JobBoardPage.css'

export default class JobBoardPage extends Component {
  static contextType = QualinteerContext;

  render() {
    return (
      <div className='boardContainer'>
        <h2 className='pageHeader'>Job Board</h2>
        <p className='instructions'>Click on a job to see more details</p>
        <ul >
          {this.context.jobs.map(job =>
            <li key={job.id} className='jobCard'>
              <Job
                id={job.id}
                title={job.title}
                description={job.description}
                posted={job.posted}
                company={job.company}
                location={job.location}
              />
            </li>
          )}
        </ul>
      </div>
    );
  }
}
