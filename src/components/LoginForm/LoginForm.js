import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VableContext from '../../context/VableContext';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import ErrorToast from '../ErrorToast/ErrorToast';
import Spinner from 'react-spinkit';

export default class LoginForm extends Component {
  static contextType = VableContext;

  // temp values for controlled form components
  state = {
    error: null,
    emailTempValue: '',
    passwordTempValue: '',
    showPassword: 'password',
    showHide: 'show',
    isLoading: false,
  };

  // toggles the input type from password to text
  toggleShowPassword = () => {
    if (this.state.showPassword === 'password') {
      this.setState({
        showPassword: 'text',
        showHide: 'hide',
      });
    } else {
      this.setState({
        showPassword: 'password',
        showHide: 'show',
      });
    }
  };

  // temp values capture input data for controlled components
  addTempValue = (field, input) => {
    this.setState({
      [field + 'TempValue']: input,
    });
  };

  // auth request to server
  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ isLoading: true });
    this.setState({ error: null });
    const { emailTempValue, passwordTempValue } = this.state;

    AuthApiService.postLogin({
      email: emailTempValue,
      password: passwordTempValue,
    })
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
        this.context.setUserType(res.userType);
        localStorage.userType = res.userType;
        localStorage.full_name = res.user.full_name;
        this.context.setUser(res.user);
        this.setState({
          emailTempValue: '',
          passwordTempValue: '',
        });
        this.props.history.push('success/homepage');
      })
      .catch((res) => {
        this.setState({ error: res.error });
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <div className="loginBanner">
          <h1 className="pageHeader">Login.</h1>
          <p className="pageInstructions">
            Enter your email and password or choose a demo user.
          </p>
        </div>
        {/* displays error notification if a server error exists */}
        {error && <ErrorToast errorMessage={error} />}
        <div className="demoInstructions">
          <p className="defaultMedium">Volunteer Demo:</p>
          <p className="demoLogin">email@email.com / Joshs4pp</p>
          <p className="defaultMedium">Organization Demo:</p>
          <p className="demoLogin">j@young.net / P4ssword</p>
        </div>
        <form className="loginForm" onSubmit={this.handleSubmitJwtAuth}>
          <div className="inputContainer tallerInput">
            <input
              type="text"
              name="email"
              id="email"
              className="loginInput"
              required
              placeholder="Email"
              aria-label="email"
              onChange={(ev) => this.addTempValue('email', ev.target.value)}
            />
          </div>
          <div className="inputContainer tallerInput">
            <input
              type={this.state.showPassword}
              name="password"
              id="password"
              className="loginInput"
              required
              placeholder="Password"
              aria-label="password"
              onChange={(ev) => this.addTempValue('password', ev.target.value)}
            />
            <button
              type="button"
              className={`${this.state.showHide}LoginButton`}
              aria-label="show password"
              onClick={() => this.toggleShowPassword()}
            ></button>
          </div>
          <button type="submit" className="loginButton">
            {this.state.isLoading ? (
              <Spinner
                fadeIn="none"
                name="ball-beat"
                color="black"
                className="loadingLogin"
              />
            ) : (
              'Sign In'
            )}
          </button>
          <p className="registerInstructions">
            Need an account?{' '}
            <Link to="/register" className="registerLink">
              Click Here
            </Link>{' '}
            to create one.
          </p>
        </form>
      </div>
    );
  }
}
