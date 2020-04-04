import React, { Component } from 'react';
import UserFields from './UserFields'

export default class VolunteerRegistration extends Component {
  render() {
    return (
      <div>
        <header role="banner" className="checkpointBanner">
          <h1 className='pageHeader'>Volunteer.</h1>
          <p className='pageInstructions'>All fields are required unless noted otherwise.</p>
        </header>
        <UserFields
          addTempValidation={this.props.addTempValidation}
          addTempValue={this.props.addTempValue}
          errorProps={this.props.errorProps}
        />
      </div >
    )
  }
}