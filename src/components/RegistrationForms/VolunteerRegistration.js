import React, { Component } from 'react';
import UserFields from './UserFields'

export default class VolunteerRegistration extends Component {
  render() {
    return (
      <div>
        <h2 className='pageHeader'>Sign up to volunteer</h2>
        <UserFields
          addTempValidation={this.props.addTempValidation}
          addTempValue={this.props.addTempValue}
          errorProps={this.props.errorProps}
        />
      </div >
    )
  }
}