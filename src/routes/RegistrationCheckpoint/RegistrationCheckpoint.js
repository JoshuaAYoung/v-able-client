import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class RegistrationCheckpoint extends Component {
  render() {
    return (
      <div className='userTypeContainer'>
        <Link className='userTypeLink' to={'/register/company'}>Sign up to get help</Link>
        <Link className='userTypeLink' to={'/register/volunteer'}>Sign up to offer help</Link>
      </div >
    );
  }
}
