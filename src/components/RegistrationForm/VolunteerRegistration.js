import React, { Component } from 'react';

export default class VolunteerRegistration extends Component {
  render() {
    return (
      <div>
        <h2 className='pageHeader'>Sign up to offer help</h2>
        <div>
          <label htmlFor='email' className='registerLabel'>Email Address</label>
          <br />
          <input type='text' name='email' id='email' className='registerInput' />
        </div>
        <br />
        <div>
          <label htmlFor='password' className='registerLabel'>Password</label>
          <br />
          <input type='password' name='password' id='password' className='registerInput' />
        </div>
        <br />
        <div>
          <label htmlFor='full-name' className='registerLabel'>Full name</label>
          <br />
          <input type='text' name='name' id='name' className='registerInput' />
        </div>
        <br />
        <div>
          <label htmlFor='phone' className='registerLabel'>Phone Number (optional)</label>
          <br />
          <input type='text' name='phone' id='phone' className='registerInput' />
        </div>
      </div >
    )
  }
}