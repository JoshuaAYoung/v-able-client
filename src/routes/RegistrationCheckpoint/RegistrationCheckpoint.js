import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './RegistrationCheckpoint.css'

export default class RegistrationCheckpoint extends Component {
  render() {
    return (
      <div className='checkpointContainer'>
        <div className="userLinkContainer">
          <NavLink className='userTypeLink' to={'/register/organization'}>Sign up to find help <span className='linkArrow'>&#8594;</span></NavLink>
        </div>
        <div className="userLinkContainer">
          <NavLink className='userTypeLink' to={'/register/volunteer'}>Sign up to volunteer <span className='linkArrow'>&#8594;</span></NavLink>
        </div>
      </div >
    );
  }
}
