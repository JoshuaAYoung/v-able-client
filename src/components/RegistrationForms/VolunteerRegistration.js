import React, { Component } from 'react';
import UserFields from './UserFields'

export default class VolunteerRegistration extends Component {
  render() {
    return (
      <div>
        <UserFields
          addTempValidation={this.props.addTempValidation}
          addTempValue={this.props.addTempValue}
          errorProps={this.props.errorProps}
        />
      </div >
    )
  }
}