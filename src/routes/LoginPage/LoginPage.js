import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'
import ScrollToTopOnMount from '../../utilities/ScrollToTopOnMount'

export default class LoginPage extends Component {
  render() {
    return (
      <div className="loginFormContainer">
        <ScrollToTopOnMount />
        <LoginForm history={this.props.history} />
      </div>
    );
  }
}
