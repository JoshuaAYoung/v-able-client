import React, { Component } from 'react';
import VableContext from '../../context/VableContext';
import TokenService from '../../services/token-service'

export default class VolunteerButton extends Component {
  static contextType = VableContext;

  handleRedirect = () => {
    const { title, contact, name } = this.props;
    const { full_name } = localStorage;
    if (this.context.userType === 'volunteer' && TokenService.hasAuthToken()) {
      return (
        <div className='volunteerButton'>
          <a href={`mailto:${contact}?subject=${name}%20-%20See%20enclosed%20Volunteer%20Application&body=Good News!%20${full_name}%20would%20like%20to%20apply%20to%20volunteer%20for%20the%20${title}%20position%20at%20${name}!%0D%0A%0D%0ASee%20below%20for%20a%20message%20from%20${full_name}:%0D%0A%0D%0A**${full_name}, please erase this message and enter some information about yourself. You could start off by explaining why you want to volunteer for ${name}. Are there any qualifications that you have that would help you in the volunteer position?**%0D%0A%0D%0A**If the volunteer description indicated that they required specific experience or professional licenses, it might be helpful to attach your resume or other qualifying documents to this email.**`} className='volunteerLink'
            target='_blank'
            rel="noopener noreferrer">
            Volunteer!
          </a>
        </div>
      )
    }
    else if (this.context.userType === 'organization' && TokenService.hasAuthToken()) {
      return (<> </>
      )
    }
    else {
      return (
        <div className='volunteerButton'>
          <a href='/success/redirect' className='volunteerLink'>
            Login to Volunteer!
          </a>
        </div>
      )
    }
  }

  render() {
    return (
      <>
        {this.handleRedirect()}
      </>
    )
  }
}
