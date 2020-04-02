import React, { Component } from 'react';
import VableContext from '../../context/VableContext'
import { cleanDate } from '../../utilities/Utils'
import OppApiService from '../../services/opp-api-service'
import ValidationError from '../../utilities/ValidationError'
import TextEditor from '../TextEditor/TextEditor'

export default class OpportunityPostForm extends Component {
  static contextType = VableContext;

  state = {
    error: null,
    titleTempValue: '',
    contactTempValue: { value: '', touched: false },
    start_dateTempValue: '',
    durationTempValue: '',
    commitmentTempValue: '',
    ed_levelTempValue: 'none',
    experienceTempValue: '',
    licenseTempValue: '',
    remoteTempValue: 'No',
    editorState: null
  }

  addTempValue = (field, input) => {
    this.setState({
      [field + 'TempValue']: input
    })
  }

  addTempValidation = (field, input) => {
    this.setState({
      [field + 'TempValue']: {
        value: input,
        touched: true
      }
    })
  }

  handleEditorChange = (editorState) => {
    this.setState({ editorState })
  }

  convertBoolean = value => {
    if (value === 'Yes') {
      return true
    }
    else {
      return false
    }
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const {
      titleTempValue,
      contactTempValue,
      start_dateTempValue,
      durationTempValue,
      commitmentTempValue,
      ed_levelTempValue,
      experienceTempValue,
      licenseTempValue,
      remoteTempValue } = this.state
    const newOpp = {
      title: titleTempValue,
      description: this.context.user.description,
      contact: contactTempValue.value,
      start_date: start_dateTempValue,
      duration: durationTempValue,
      commitment: commitmentTempValue,
      ed_level: ed_levelTempValue,
      experience: experienceTempValue,
      license: licenseTempValue,
      remote: this.convertBoolean(remoteTempValue),
      posted: cleanDate()
    }
    OppApiService.postOpportunity(newOpp)
      .then(res => this.context.addOpportunity)
      .then(res => this.props.history.push('/success/oppboard'))
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  generateError = () => {
    //eslint-disable-next-line
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.contactTempValue.touched === true && !emailRegEx.test(this.state.contactTempValue.value)) {
      return 'Please enter a valid email address.';
    }
  }

  render() {
    const { error } = this.state
    return (
      <div>
        <div role='alert'>
          {error && <p className='apiError'>Server Error: {error}</p>}
        </div>
        <form
          className='post-htmlForm'
          onSubmit={this.handleSubmit}
        >
          <div>
            <label
              htmlFor='title'
              className='postLabel'>
              Position Title:
              </label>
            <br />
            <input
              placeholder='Example: Volunteer Coordinator'
              type='text'
              name='title'
              id='title'
              className='postInput'
              required
              onChange={ev => this.addTempValue('title', ev.target.value)}
            />
          </div>
          <br />
          <div>
            <label
              htmlFor='contact'
              className='postLabel'>
              Contact Person's Email:
              </label>
            <br />
            <input
              placeholder='Who should we send applications to?'
              type='text'
              name='contact'
              id='contact'
              className='postInput'
              required
              onChange={ev => this.addTempValidation('contact', ev.target.value)}
            />
          </div>
          {this.generateError() && <ValidationError message={this.generateError()} />}
          <br />
          <div>
            <label
              htmlFor='start_date'
              className='postLabel'>
              Start Date:
              </label>
            <br />
            <input
              placeholder='Example: 09-22-2020'
              type='text'
              name='start_date'
              id='start_date'
              className='postInput'
              required
              onChange={ev => this.addTempValue('start_date', ev.target.value)}
            />
          </div>
          <br />
          <div>
            <label
              htmlFor='duration'
              className='postLabel'>
              Duration:
              </label>
            <br />
            <input
              placeholder='Example: 7 weeks'
              type='text'
              name='duration'
              id='duration'
              className='postInput'
              required
              onChange={ev => this.addTempValue('duration', ev.target.value)}
            />
          </div>
          <br />
          <div>
            <label
              htmlFor='commitment'
              className='postLabel'>
              Estimated Hours Per Week:
              </label>
            <br />
            <input
              placeholder='Number of Hours'
              type='text'
              name='commitment'
              id='commitment'
              className='postInput'
              required
              onChange={ev => this.addTempValue('commitment', ev.target.value)}
            />
          </div>
          <br />
          <div>
            <label
              htmlFor='ed_level'
              className='postLabel'>
              Education Level:
              </label>
            <br />
            <select
              id='ed_level'
              name='ed_level'
              className='postInput'
              onChange={ev => this.addTempValue('ed_level', ev.target.value)}>
              <option value='none' defaultValue='none'>None</option>
              <option value='highschool'>High School</option>
              <option value='associates'>Associates Degree</option>
              <option value='bachelors'>Bachelors Degree</option>
              <option value='masters'>Masters Degree</option>
              <option value='phd'>Ph. D.</option>
            </select>
          </div>
          <br />
          <div>
            <label
              htmlFor='experience'
              className='postLabel'>
              Experience (optional):
              </label>
            <br />
            <input
              placeholder='Example: Residential Architecture'
              type='text'
              name='experience'
              id='experience'
              className='postInput'
              onChange={ev => this.addTempValue('experience', ev.target.value)}
            />
          </div>
          <br />
          <div>
            <label
              htmlFor='license'
              className='postLabel'>
              License or Certification Required (optional):
              </label>
            <br />
            <input
              placeholder="Example: Driver's License"
              type='text'
              name='license'
              id='license'
              className='postInput'
              onChange={ev => this.addTempValue('license', ev.target.value)}
            />
          </div>
          <br />
          <div>
            <label
              htmlFor='remote'
              className='postLabel'>
              Can this opportunity be done remotely?:
              </label>
            <br />
            <select
              id='remote'
              name='remote'
              className='postInput'
              onChange={ev => this.addTempValue('remote', ev.target.value)}>
              <option value='No'>No.</option>
              <option value='Yes'>Yes.</option>
            </select>
          </div>
          <br />
          <div>
            <label
              htmlFor='description'
              className='postLabel'>
              Opportunity Description:
    </label>
            <br />
            <TextEditor
            />
          </div>
          <br />
          <button
            type='submit'
            className='postButton'
            disabled={this.generateError()}>
            Submit
            </button>
        </form>
      </div>
    )
  }
}


