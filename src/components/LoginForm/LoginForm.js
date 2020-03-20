import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QualinteerContext from '../../context/QualinteerContext'

export default class LoginForm extends Component {
  static contextType = QualinteerContext;

  demoLogin = (userType) => {
    this.context.setUser(userType);
    userType === 'company'
      ? this.props.history.push('/')
      : this.props.history.push('/jobboard')
  }

  render() {
    return (
      //MAKE SURE TO CHANGE THE BUTTON TYPE BACK TO SUBMIT AND ADD AN EVENT HANDLER TO THE FORM
      <div>
        <h2 className='formHeader'>Log In</h2>
        <h3>TO LOG IN AS A TEST USER:</h3>
        <p>Either click on the "Sign In Company" or "Sign In Volunteer" buttons below to login as one of the user types.</p>
        <p>User registration is disabled for now, though I could use some feedback on the form if you wouldn't mind checking out the "Sign Up" page if you have a moment.</p>
        <p>If you've tested one user type and want to try out the other one, click on the logout link in the navigation bar and come back to this page to sign is as the other user type.</p>
        <form className='signin-form'>
          <div>
            <label htmlFor="email">Email Address</label>
            <input placeholder='Email' type="text" name='email' id='email' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input placeholder='Password' type="text" name='password' id='password' />
          </div>
          <button type='button' onClick={() => this.demoLogin('company')}>Sign In Company</button>
          <button type='button' onClick={() => this.demoLogin('volunteer')}>Sign In Volunteer</button>
          <p>Don't have an account? <Link to='/register'>Click Here</Link> to create one</p>
        </form>
      </div>
    )
  }
}