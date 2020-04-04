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
    showHide: 'show'
  }

  toggleShowPassword = () => {
    if (this.state.showPassword === 'password') {
      this.setState({
        showPassword: 'text',
        showHide: 'hide'
      })
    }
    else {
      this.setState({
        showPassword: 'password',
        showHide: 'show'
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
        this.props.history.push('success/homepage')
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }


  render() {
    const { error } = this.state
    return (
      <div>
        <header role="banner" className="loginBanner">
          <h1 className='pageHeader'>Login.</h1>
          <p className='pageInstructions'>Enter your email and password or choose a demo user.</p>
        </header>
        <div role='alert'>
          {error && <p className='apiError'>Error: {error}</p>}
        </div>
        <div className='demoInstructions'>
          <p className='defaultMedium'>Volunteer Demo:</p>
          <p className='demoLogin'>email@email.com / Joshs4pp</p>
          <p className='defaultMedium'>Organization Demo:</p>
          <p className='demoLogin'>j@young.net / P4ssword</p>
        </div>
        <form
          className='loginForm'
          onSubmit={this.handleSubmitJwtAuth}
        >
          <div className='inputContainer'>
            <input
              type='text'
              name='email'
              id='email'
              className='loginInput'
              required
              placeholder='Email'
              onChange={ev => this.addTempValue('email', ev.target.value)}
            />
          </div>
          <div className='inputContainer'>
            <input
              type={this.state.showPassword}
              name='password'
              id='password'
              className='loginInput'
              required
              placeholder='Password'
              onChange={ev => this.addTempValue('password', ev.target.value)}
            />
            <button
              type='button'
              className={`${this.state.showHide}LoginButton`}
              onClick={() => this.toggleShowPassword()}>
            </button>
          </div>
          <button
            type='submit'
            className='loginButton'>
            Sign In
            </button>
          <p className='registerInstructions'>Need an account? <Link to='/register' className='registerLink'>Click Here</Link> to create one.</p>
        </form>
      </div>
    )
  }
}