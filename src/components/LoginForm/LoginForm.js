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
    // const { error } = this.context
    return (
      //MAKE SURE TO CHANGE THE BUTTON TYPE BACK TO SUBMIT AND ADD AN EVENT HANDLER TO THE FORM
      <div>
        <h2 className='pageHeader'>Log In</h2>
        <h3>TO LOG IN AS A TEST USER:</h3>
        <p>Either click on the <b>"Sign In Company"</b> or <b>"Sign In Volunteer"</b> buttons below to login as one of the user types.</p>
        <p>User registration is disabled for now, though I could use some feedback on the form if you wouldn't mind checking out the "Sign Up" page if you have a moment.</p>
        <p>If you've tested one user type and want to try out the other one, click on the <b>logout</b> link in the navigation bar and come back to this page to sign is as the other user type.</p>
        <form className='signin-form'>
          <div>
            <label htmlFor='email' className='loginLabel'>Email Address: </label>
            <input type='text' name='email' id='email' className='loginInput' />
          </div>
          <div>
            <label htmlFor='password' className='loginLabel'>Password: </label>
            <input type='text' name='password' id='password' className='loginInput' />
          </div>
          <button type='button' onClick={() => this.demoLogin('company')} className='loginButton'>Sign In Company</button>
          <button type='button' onClick={() => this.demoLogin('volunteer')} className='loginButton'>Sign In Volunteer</button>
          <p>Don't have an account? <Link to='/register' className='registerLink'>Click Here</Link> to create one</p>
        </form>
      </div>
    )
  }
}