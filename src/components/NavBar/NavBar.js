import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import VableContext from '../../context/VableContext';
import './NavBar.css';
import TokenService from '../../services/token-service'

export default class NavBar extends Component {
  static contextType = VableContext;

  handleLogout = () => {
    TokenService.clearAuthToken();
    this.context.setUserType('');
    this.context.setUser({});
    this.props.history.push('/');
  }

  linkSeparator = (<span className='linkBullet'>&bull;</span>)

  userLinks = () => {
    if (this.context.userType === 'volunteer' && TokenService.hasAuthToken()) {
      return (
        <>
          <Link
            to='/'
            onClick={() => this.handleLogout()}>
            Logout
          </Link>
        </>
      )
    }
    else if (this.context.userType === 'organization' && TokenService.hasAuthToken()) {
      return (
        <>
          <Link
            to='/'
            onClick={() => this.handleLogout()}>
            Logout
          </Link>
          {this.linkSeparator}
          <Link
            to='/opportunitypost'
            className='navLink'>
            Recruit Volunteers
          </Link>
        </>
      )
    }
    else {
      return (
        <>
          <Link to='/login' className='navLink'>
            Log In
          </Link>
          {this.linkSeparator}
          <Link to='/register' className='navLink'>
            Sign Up
          </Link>
        </>
      )
    }


  }

  render() {
    return (
      <div className='navContainer'>
        <NavLink to='/' className='logoContainer'>
          <img src='/assets/v-able-logo.svg' alt='v-able logo' className='mainLogo' />
          <h1 className='navName'>v<span className='inlineBullet'>&bull;</span>able</h1>
        </NavLink>
        <div className='navLinks'>
          {this.userLinks()}
          {this.linkSeparator}
          <Link to='/opportunityboard' className='navLink'>
            Find Opportunities
          </Link>
        </div>
      </div >
    );
  }
}
