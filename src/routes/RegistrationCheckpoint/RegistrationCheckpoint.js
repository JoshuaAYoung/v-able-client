import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class RegistrationCheckpoint extends Component {
  render() {
    return (
      <div className='userTypeContainer'>
        <Link className='userTypeLink' to={'/register/company'}>Get Help</Link>
        <Link className='userTypeLink' to={'/register/volunteer'}>Volunteer</Link>
      </div >
    );
  }
}
