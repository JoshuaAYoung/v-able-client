import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import VableContext from '../../context/VableContext';
import './NavBar.css';
import TokenService from '../../services/token-service';
import './Hamburger.css';

export default class NavBar extends Component {
  static contextType = VableContext;

  state = {
    showBurger: false,
    animationClass: 'Hidden',
  };

  hideHamburger = () => {
    this.setState({
      showBurger: false,
      animationClass: 'Hidden',
    });
  };

  toggleHamburger = () => {
    if (
      this.state.showBurger === false ||
      this.state.animationClass === 'Hidden'
    ) {
      this.setState({
        showBurger: true,
        animationClass: 'Down',
      });
    } else {
      this.setState({
        showBurger: false,
        animationClass: 'Up',
      });
    }
  };

  handleLogout = () => {
    this.hideHamburger();
    TokenService.clearAuthToken();
    this.context.setUserType('');
    this.context.setUser({});
  };

  linkSeparator = (<span className="linkBullet">&bull;</span>);

  userLinks = () => {
    if (this.context.userType === 'volunteer' && TokenService.hasAuthToken()) {
      return (
        <>
          <div className="linkContainer">
            <NavLink
              to="/success/logout"
              onClick={() => this.handleLogout()}
              className="navLink"
            >
              Log Out
            </NavLink>
          </div>
        </>
      );
    } else if (
      this.context.userType === 'organization' &&
      TokenService.hasAuthToken()
    ) {
      return (
        <>
          <div className="linkContainer">
            <NavLink
              to="/opportunitypost"
              className="navLink"
              onClick={() => this.hideHamburger()}
            >
              Recruit Help
            </NavLink>
          </div>
          {this.linkSeparator}
          <div className="linkContainer">
            <NavLink
              to="/success/logout"
              className="navLink"
              onClick={() => this.handleLogout()}
            >
              Log Out
            </NavLink>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="linkContainer">
            <NavLink
              to="/login"
              className="navLink"
              onClick={() => this.hideHamburger()}
            >
              Log In
            </NavLink>
          </div>
          {this.linkSeparator}
          <div className="linkContainer">
            <NavLink
              to="/register"
              className="navLink"
              onClick={() => this.hideHamburger()}
            >
              Sign Up
            </NavLink>
          </div>
        </>
      );
    }
  };

  render() {
    return (
      <div className="menuContainer">
        <div className={`navMenu fadeMenu${this.state.animationClass}`}>
          <div className="linkContainer">
            <NavLink
              to="/"
              className="navLink"
              onClick={() => this.hideHamburger()}
            >
              Home
            </NavLink>
          </div>
          {this.linkSeparator}
          {this.userLinks()}
          {this.linkSeparator}
          <div className="linkContainer">
            <NavLink
              to="/opportunityboard"
              className="navLink"
              onClick={() => this.hideHamburger()}
            >
              Opportunity Board
            </NavLink>
          </div>
        </div>
        <div className="navBarContainer">
          <NavLink
            to="/"
            className="logoLink"
            onClick={() => this.hideHamburger()}
          >
            <img
              src="/assets/v-able-logo.svg"
              alt="v-able logo"
              className="mainLogo"
            />
            <h1 className="navName">
              v<span className="inlineBullet">&bull;</span>able
            </h1>
          </NavLink>
          <div className="hamburgerContainer">
            <div
              className={`burgerButton ${this.state.showBurger}Burger`}
              onClick={() => this.toggleHamburger()}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
