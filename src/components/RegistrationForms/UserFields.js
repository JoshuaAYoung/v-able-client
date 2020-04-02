
import React, { Component } from 'react';
import ValidationError from '../../utilities/ValidationError';

export default class UserFields extends Component {
  state = {
    showPassword: 'password',
    showHide: 'Show'
  }

  toggleShowPassword = () => {
    if (this.state.showPassword === 'password') {
      this.setState({
        showPassword: 'text',
        showHide: 'Hide'
      })
    }
    else {
      this.setState({
        showPassword: 'password',
        showHide: 'Show'
      })
    }
  }

  render() {
    const { emailError, passwordError1, passwordError2, passwordError3, passwordError4 } = this.props.errorProps
    return (
      <>
        <div>
          <label
            htmlFor='email'
            className='registerLabel'>
            Email Address:
          </label>
          <br />
          <input
            type='text'
            name='email'
            id='email'
            className='registerInput'
            onChange={ev => this.props.addTempValidation('email', ev.target.value)}
            required
          />
        </div>
        {emailError && <ValidationError message={emailError} />}
        <br />
        <div>
          <label
            htmlFor='password'
            className='registerLabel'>
            Password:
          </label>
          <br />
          <input
            type={this.state.showPassword}
            name='password'
            id='password'
            className='registerInput'
            onChange={ev => this.props.addTempValidation('password', ev.target.value)}
            required
          />
          <button
            type='button'
            className='showButton'
            onClick={() => this.toggleShowPassword()}>
            {this.state.showHide}
          </button>
        </div>
        {passwordError1 && <ValidationError message={passwordError1} />}
        {passwordError2 && <ValidationError message={passwordError2} />}
        {passwordError3 && <ValidationError message={passwordError3} />}
        {passwordError4 && <ValidationError message={passwordError4} />}
        <br />
        <div>
          <label
            htmlFor='full_Name'
            className='registerLabel'>
            Full Name:
          </label>
          <br />
          <input
            type='text'
            name='full_Name'
            id='full_Name'
            className='registerInput'
            onChange={ev => this.props.addTempValue('full_name', ev.target.value)}
            required
          />
        </div>
        <br />
      </>
    )
  }
}