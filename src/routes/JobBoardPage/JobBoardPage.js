import React, { Component } from 'react';
import Job from '../../components/Job/Job'
import QualinteerContext from '../../context/QualinteerContext'
export default class JobBoardPage extends Component {
  static contextType = QualinteerContext;



  render() {
    return (
      <div>
        <h2 className='pageHeader'>Job Board</h2>
        <ul>
          {this.context.jobs.map(job =>
            <li key={job.id}>
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
