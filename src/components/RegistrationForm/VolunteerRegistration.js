import React, { Component } from 'react';

export default class VolunteerRegistration extends Component {
  render() {
    return (
      <div>
        <h2 className='formHeader'>Sign up to offer help</h2>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input placeholder='Email' type='text' name='email' id='email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input placeholder='Password' type='password' name='password' id='password' />
        </div>
        <div>
          <label htmlFor='full-name'>Full name</label>
          <input placeholder='Full Name' type='text' name='name' id='name' />
        </div>
        <div>
          <label htmlFor='phone'>Phone Number (optional)</label>
          <input placeholder='Phone Number' type='text' name='phone' id='phone' />
        </div>
      </div >
    )
  }
}