import React, { Component } from 'react';
import QualinteerContext from '../../context/QualinteerContext';
import TokenService from '../../services/token-service'

export default class VolunteerButton extends Component {
  static contextType = QualinteerContext;

  renderVolunteer = () => {
    const { title, contact, name } = this.props;
    const { full_name } = localStorage;
    if (this.context.userType === 'volunteer' && TokenService.hasAuthToken()) {
      return (
        <div className='volunteerButton'>
          <a href={`mailto:${contact}?subject=${name}%20-%20See%20enclosed%20Volunteer%20Application&body=Good News!%20${full_name}%20would%20like%20to%20apply%20to%20volunteer%20for%20the%20${title}%20position%20at%20${name}!%0D%0A%0D%0ASee%20below%20for%20a%20message%20from%20${full_name}:`}
            className='volunteerButton'>
            VOLUNTEER
          </a>
        </div>
      )
    }
    else {
      return <></>
    }
  }
  render() {
    return (
      <div className='testing'>
        {this.renderVolunteer()}
      </div>
    )
  }
}
