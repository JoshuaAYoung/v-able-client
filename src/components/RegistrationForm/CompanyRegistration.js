import React, { Component } from 'react';


export default class CompanyRegistration extends Component {
  render() {
    return (
      <div>
        <h2 className='formHeader'>Sign up to get help</h2>
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
          <input placeholder='Full Name' type='text' name='full-name' id='full-name' />
        </div>
        <div>
          <label htmlFor='company-name'>Company Name (optional)</label>
          <input placeholder='Company Name' type='text' name='company-name' id='company-name' />
        </div>
        <div>
          <label htmlFor='address'>Address (optional)</label>
          <input placeholder='Address' type='text' name='address' id='address' />
        </div>
        <div>
          <label htmlFor='city'>City</label>
          <input placeholder='City' type='text' name='city' id='city' />
        </div>
        <div>
          <label htmlFor='state'>State</label>
          <input placeholder='State' type='text' name='state' id='state' />
        </div>
        <div>
          <label htmlFor='zipcode'>Zipcode</label>
          <input placeholder='Zipcode' type='text' name='zipcode' id='zipcode' />
        </div>
        <div>
          <label htmlFor='phone'>Phone Number (optional)</label>
          <input placeholder='Phone Number' type='text' name='phone' id='phone' />
        </div>
        <div>
          <label htmlFor='website'>Website (optional)</label>
          <input placeholder='Website URL' type='text' name='website' id='website' />
        </div>
      </div >
    )
  }
}