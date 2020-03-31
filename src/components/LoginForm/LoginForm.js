import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QualinteerContext from '../../context/QualinteerContext'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'

export default class LoginForm extends Component {
  static contextType = QualinteerContext;

  state = {
    error: null,
    emailTempValue: '',
    passwordTempValue: ''
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
        this.context.setUser(res.user)
        this.setState({
          emailTempValue: '',
          passwordTempValue: ''
        })
        this.props.history.push('/qualinteer/')
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
        <h3>TO LOG IN AS A TEST USER:</h3>
        <p>Either click on the <b>"Sign In Organization"</b> or <b>"Sign In Volunteer"</b> buttons below to login as one of the user types.</p>
        <p>User registration is disabled for now, though I could use some feedback on the form if you wouldn't mind checking out the "Sign Up" page if you have a moment.</p>
        <p>If you've tested one user type and want to try out the other one, click on the <b>logout</b> link in the navigation bar and come back to this page to sign is as the other user type.</p>
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
              type='password'
              name='password'
              id='password'
              className='loginInput'
              required
              onChange={ev => this.addTempValue('password', ev.target.value)}
            />
          </div>
          <button
            type='submit'
            className='loginButton'>
            Sign In
            </button>
          <p>Don't have an account? <Link to='/qualinteer/register' className='registerLink'>Click Here</Link> to create one</p>
        </form>
      </div>
    )
  }
}