import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import QualinteerContext from '../../context/QualinteerContext'

export default class JobPostForm extends Component {
  static contextType = QualinteerContext;

  render() {
    return (
      <div>
        <form className='post-htmlForm'>
          <div>
            <label htmlFor='title'>Job Title</label>
            <br />
            <input placeholder='Job Title' type='text' name='title' id='title' />
          </div>
          <br />
          <div>
            <label htmlFor='description'>Job Description</label>
            <br />
            <input placeholder='Job Description' type='description' name='description' id='description' />
          </div>
          <br />
          <div>
            <label htmlFor='start'>Start Date</label>
            <br />
            <input placeholder='Start Date' type='text' name='start' id='start' />
          </div>
          <br />
          <div>
            <label htmlFor='end'>End Date</label>
            <br />
            <input placeholder='End Date' type='text' name='end' id='end' />
          </div>
          <br />
          <div>
            <label htmlFor='committment'>Estimated Time Committment Each Week</label>
            <br />
            <input placeholder='Number of Hours Per Week' type='text' name='committment' id='committment' />
          </div>
          <br />
          <div>
            <label htmlFor='ed-level'>Education Level (optional)</label>
            <br />
            <select id='ed-level' name='ed-level'>
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
            <input type='radio' id='no-exp' name='no-exp' value='no-exp' />
            <label htmlFor='no-exp'>No experience required</label>
            <br />
            <input placeholder='Example: Architect' type='text' name='experience' id='experience' />
          </div>
          <br />
          <div>
            <label htmlFor='license'>License Required (optional)</label>
            <br />
            <input placeholder="Example: Architect's License" type='text' name='license' id='license' />
          </div>
          <br />
          <div>
            <label htmlFor='physical'>Need someone in-person?</label>
            <br />
            <select id='physical' name='physical'>
              <option value=''>...</option>
              <option value='remote'>Option to Volunteer Remotely</option>
              <option value='in-person'>In-Person Volunteer Needed</option>
            </select>
          </div>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}


