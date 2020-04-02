import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VableContext from '../../context/VableContext'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'

export default class LoginForm extends Component {
  static contextType = VableContext;

  state = {
    error: null,
    emailTempValue: '',
    passwordTempValue: '',
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

  addTempValue = (field, input) => {
    this.setState({
      [field + 'TempValue']: input
    })
  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { emailTempValue, passwordTempValue } = this.state

    AuthApiService.postLogin({
      email: emailTempValue,
      password: passwordTempValue
    })
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        this.context.setUserType(res.userType)
        localStorage.userType = res.userType
        localStorage.full_name = res.user.full_name
        this.context.setUser(res.user)
        this.setState({
          emailTempValue: '',
          passwordTempValue: ''
        })
        this.props.history.push('/')
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }


  render() {
    const { error } = this.state
    return (
      <div>
        <h2 className='pageHeader'>Log In</h2>
        <h3>TO LOG IN:</h3>
        <p>You can either click <b>"Sign Up"</b> on the navigation bar to create an account or login using the following email and password combinations:</p>
        <h2>Organization Demo Login</h2>
        <p>email: <b>testuser1@gmail.com </b></p>
        <p>password: <b>myPassword</b></p>
        <h2>Organization Demo Login</h2>
        <p>email: <b>testuser3@gmail.com </b></p>
        <p>password: <b>secretpassword</b></p>
        <div role='alert'>
          {error && <p className='apiError'>{error}</p>}
        </div>
        <form
          className='signin-form'
          onSubmit={this.handleSubmitJwtAuth}
        >
          <div>
            <label
              htmlFor='email'
              className='loginLabel'>
              Email Address:
              </label>
            <input
              type='text'
              name='email'
              id='email'
              className='loginInput'
              required
              onChange={ev => this.addTempValue('email', ev.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='loginLabel'>
              Password:
              </label>
            <input
              type={this.state.showPassword}
              name='password'
              id='password'
              className='loginInput'
              required
              onChange={ev => this.addTempValue('password', ev.target.value)}
            />
            <button
              type='button'
              className='showButton'
              onClick={() => this.toggleShowPassword()}>
              {this.state.showHide}
            </button>
          </div>
          <button
            type='submit'
            className='loginButton'>
            Sign In
            </button>
          <p>Don't have an account? <Link to='/register' className='registerLink'>Click Here</Link> to create one</p>
        </form>
      </div>
    )
  }
}