import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './RegistrationCheckpoint.css'

export default class RegistrationCheckpoint extends Component {
  render() {
    return (
      <div className='checkpointContainer'>
        <header role="banner" className="checkpointBanner">
          <h1 className='pageHeader'>Choose your Path.</h1>
          <p className='pageInstructions'>Registration only takes a minute. Click on the option that applies to you.</p>
        </header>
        <div className='userTypeContainer'>
          <div className="userLinkContainer">
            <NavLink className='userTypeLink' to={'/register/organization'}>
              Find Help
              <img src='/assets/checkpoint-arrow.svg' alt='arrow' className='checkpointArrow' />
            </NavLink>
          </div>
          <div className="userLinkContainer">
            <NavLink className='userTypeLink' to={'/register/volunteer'}>Volunteer
              <img src='/assets/checkpoint-arrow.svg' alt='arrow' className='checkpointArrow' />
            </NavLink>
          </div>
        </div>
      </div >
    );
  }
}
