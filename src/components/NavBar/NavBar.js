import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QualinteerContext from '../../context/QualinteerContext';
import './NavBar.css';
import TokenService from '../../services/token-service'

export default class NavBar extends Component {
  static contextType = QualinteerContext;

  handleLogout = () => {
    TokenService.clearAuthToken();
    this.context.setUserType('');
    this.context.setUser({});
    this.props.history.push('/');
  }

  linkSeparator = (<span className='linkBullet'>&#8226;</span>)

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
        <div className='logoContainer'>
          <Link to='/'>
            <img src='/assets/qualinteerlogo.svg' alt='qualinteer logo' className='mainLogo' />
            <h1 className='navName'>Qualinteer</h1>
          </Link>
        </div>
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
