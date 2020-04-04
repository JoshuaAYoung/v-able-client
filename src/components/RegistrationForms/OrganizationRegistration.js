import React, { Component } from 'react';
import UserFields from './UserFields'
import ValidationError from '../../utilities/ValidationError';

export default class OrganizationRegistration extends Component {
  render() {
    const { zipcodeError } = this.props.errorProps
    return (
      <div>
        <header role="banner" className="checkpointBanner">
          <h1 className='pageHeader'>Find Help.</h1>
          <p className='pageInstructions'>All fields are required unless noted otherwise.</p>
        </header>
        <UserFields
          addTempValidation={this.props.addTempValidation}
          addTempValue={this.props.addTempValue}
          errorProps={this.props.errorProps}
        />
        <div>
          <label
            htmlFor='name'
            className='registerLabel'>
            Organization Name:
            </label>
          <br />
          <input
            type='text'
            name='name'
            id='name'
            className='registerInput'
            onChange={ev => this.props.addTempValue('name', ev.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label
            htmlFor='address'
            className='registerLabel'>
            Address (optional):
            </label>
          <br />
          <input
            type='text'
            name='address'
            id='address'
            className='registerInput'
            onChange={ev => this.props.addTempValue('address', ev.target.value)}
          />
        </div>
        <br />
        <div>
          <label
            htmlFor='city'
            className='registerLabel'>
            City:
            </label>
          <br />
          <input
            type='text'
            name='city'
            id='city'
            className='registerInput'
            onChange={ev => this.props.addTempValue('city', ev.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label
            htmlFor='state'
            className='registerLabel'>
            State:
            </label>
          <br />
          <input
            type='text'
            name='state'
            id='state'
            className='registerInput'
            onChange={ev => this.props.addTempValue('state', ev.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label
            htmlFor='zipcode'
            className='registerLabel'>
            Zipcode:
          </label>
          <br />
          <input
            type='text'
            name='zipcode'
            id='zipcode'
            className='registerInput'
            onChange={ev => this.props.addTempValidation('zipcode', ev.target.value)}
            required
          />
        </div>
        {zipcodeError && <ValidationError message={zipcodeError} />}
        <br />
        <div>
          <label
            htmlFor='phone'
            className='registerLabel'>
            Phone Number (optional):
            </label>
          <br />
          <input
            type='text'
            name='phone'
            id='phone'
            className='registerInput'
            onChange={ev => this.props.addTempValue('phone', ev.target.value)}
          />
        </div>
        <br />
        <div>
          <label
            htmlFor='website'
            className='registerLabel'>
            Website (optional):
            </label>
          <br />
          <input
            type='text'
            name='website'
            id='website'
            className='registerInput'
            onChange={ev => this.props.addTempValue('website', ev.target.value)}
          />
        </div>
      </div >
    )
  }
}