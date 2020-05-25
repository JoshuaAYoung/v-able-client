import React, { Component } from 'react';
import VableContext from '../../context/VableContext';
import { cleanDate } from '../../utilities/Utils';
import OppApiService from '../../services/opp-api-service';
import ValidationError from '../../utilities/ValidationError';
import TextEditor from '../TextEditor/TextEditor';
import ErrorToast from '../ErrorToast/ErrorToast';

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
    editorState: null,
  };

  addTempValue = (field, input) => {
    this.setState({
      [field + 'TempValue']: input,
    });
  };

  addTempValidation = (field, input) => {
    this.setState({
      [field + 'TempValue']: {
        value: input,
        touched: true,
      },
    });
  };

  handleEditorChange = (editorState) => {
    this.setState({ editorState });
  };

  convertBoolean = (value) => {
    if (value === 'Yes') {
      return true;
    } else {
      return false;
    }
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const {
      titleTempValue,
      contactTempValue,
      start_dateTempValue,
      durationTempValue,
      commitmentTempValue,
      ed_levelTempValue,
      experienceTempValue,
      licenseTempValue,
      remoteTempValue,
    } = this.state;
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
      posted: cleanDate(),
    };
    OppApiService.postOpportunity(newOpp)
      .then((res) => this.context.addOpportunity)
      .then((res) => this.props.history.push('/success/oppboard'))
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  generateError = () => {
    //eslint-disable-next-line
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      this.state.contactTempValue.touched === true &&
      !emailRegEx.test(this.state.contactTempValue.value)
    ) {
      return 'Please enter a valid email address.';
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        {error && <ErrorToast errorMessage={error} />}
        <form className="postForm" onSubmit={this.handleSubmit}>
          <div className="postInputs">
            <div className="inputContainer">
              <input
                type="text"
                name="title"
                id="title"
                className="postInput"
                placeholder="Position Title"
                aria-label="Position Title"
                required
                onChange={(ev) => this.addTempValue('title', ev.target.value)}
              />
            </div>
            <div className="inputContainer">
              <input
                type="text"
                name="contact"
                id="contact"
                className="postInput"
                required
                placeholder="Contact Person's Email"
                aria-label="Contact Person's Email"
                onChange={(ev) =>
                  this.addTempValidation('contact', ev.target.value)
                }
              />
              {this.generateError() && (
                <ValidationError message={this.generateError()} />
              )}
            </div>
            <div className="inputContainer">
              <input
                type="text"
                name="start_date"
                id="start_date"
                className="postInput"
                required
                placeholder="Start Date"
                aria-label="Start Date"
                onChange={(ev) =>
                  this.addTempValue('start_date', ev.target.value)
                }
              />
            </div>
            <div className="inputContainer">
              <input
                type="text"
                name="duration"
                id="duration"
                className="postInput"
                required
                placeholder="Volunteer Duration"
                aria-label="Volunteer Duration"
                onChange={(ev) =>
                  this.addTempValue('duration', ev.target.value)
                }
              />
            </div>
            <div className="inputContainer">
              <input
                type="text"
                name="commitment"
                id="commitment"
                className="postInput"
                required
                placeholder="Estimated Hours Per Week"
                aria-label="Estimated Hours Per Week"
                onChange={(ev) =>
                  this.addTempValue('commitment', ev.target.value)
                }
              />
            </div>
            <div className="inputContainer">
              <select
                id="ed_level"
                name="ed_level"
                className="postInput postSelect"
                aria-label="education level"
                onChange={(ev) =>
                  this.addTempValue('ed_level', ev.target.value)
                }
              >
                <option value="" hidden>
                  Education Level (optional)
                </option>
                <option value="none">None</option>
                <option value="highschool">High School</option>
                <option value="associates">Associates Degree</option>
                <option value="bachelors">Bachelors Degree</option>
                <option value="masters">Masters Degree</option>
                <option value="phd">Ph. D.</option>
              </select>
            </div>
            <div className="inputContainer">
              <input
                type="text"
                name="experience"
                id="experience"
                className="postInput"
                placeholder="Experience (optional)"
                aria-label="Experience"
                onChange={(ev) =>
                  this.addTempValue('experience', ev.target.value)
                }
              />
            </div>
            <div className="inputContainer">
              <input
                type="text"
                name="license"
                id="license"
                className="postInput"
                placeholder="Licensure (optional)"
                aria-label="Licensure"
                onChange={(ev) => this.addTempValue('license', ev.target.value)}
              />
            </div>
            <div className="inputContainer">
              <select
                id="remote"
                name="remote"
                className="postInput postSelect"
                aria-label="remote option"
                onChange={(ev) => this.addTempValue('remote', ev.target.value)}
              >
                <option value="" hidden>
                  Option To Work Remotely?
                </option>
                <option value="No" defaultValue="No">
                  No.
                </option>
                <option value="Yes">Yes.</option>
              </select>
            </div>
          </div>
          <TextEditor />
          <div className="postButtonContainer">
            <button
              type="submit"
              className="postButton"
              disabled={this.generateError()}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}
