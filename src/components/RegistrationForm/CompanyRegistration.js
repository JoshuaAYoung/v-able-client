import React, { Component } from 'react';


export default class CompanyRegistration extends Component {
  render() {
    return (
      <div>
        <h2 className='pageHeader'>Sign up to get help</h2>
        <div>
          <label htmlFor='email' className='registerLabel'>Email Address: </label>
          <br />
          <input type='text' name='email' id='email' className='registerInput' />
        </div>
        <br />
        <div>
          <label htmlFor='password' className='registerLabel'>Password: </label>
          <br />
          <input type='password' name='password' id='password' className='registerInput' />
        </div>
        <br />
        <div>
          <label htmlFor='fullName' className='registerLabel'>Full name: </label>
          <br />
          <input type='text' name='fullName' id='fullName' className='registerInput' />
        </div>
        <br />
        <div>
          <label htmlFor='company-name' className='registerLabel'>Company Name (optional): </label>
          <br />
          <input type='text' name='company-name' id='company-name' className='registerInput' />
        </div>
        <br />
        <div>
          <label htmlFor='address' className='registerLabel'>Address (optional): </label>
          <br />
          <input type='text' name='address' id='address' className='registerInput' />
        </div>
        <br />
        <div>
          <label htmlFor='city' className='registerLabel'>City: </label>
          <br />
          <input type='text' name='city' id='city' className='registerInput' />
        </div>
        <br />
        <div>
          <label htmlFor='state' className='registerLabel'>State: </label>
          <br />
          <input type='text' name='state' id='state' className='registerInput' />
        </div>
        <br />
        <div>
          <label htmlFor='zipcode' className='registerLabel'>Zipcode: </label>
          <br />
          <input type='text' name='zipcode' id='zipcode' className='registerInput' />
        </div>
        <br />
        <div>
          <label htmlFor='phone' className='registerLabel'>Phone Number (optional): </label>
          <br />
          <input type='text' name='phone' id='phone' className='registerInput' />
        </div>
        <br />
        <div>
          <label htmlFor='website' className='registerLabel'>Website (optional): </label>
          <br />
          <input type='text' name='website' id='website' className='registerInput' />
        </div>
      </div >
    )
  }
}