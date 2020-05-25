import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';
import ScrollToTopOnMount from '../../utilities/ScrollToTopOnMount';

export default function LoginPage(props) {
  return (
    <div className="loginFormContainer">
      <ScrollToTopOnMount />
      <LoginForm history={props.history} />
    </div>
  );
}
