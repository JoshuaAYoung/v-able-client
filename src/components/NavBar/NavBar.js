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
    this.props.history.push('/qualinteer/');
  }

  linkSeparator = (<span className='linkBullet'>&#8226;</span>)

  userLinks = () => {
    if (this.context.userType === 'volunteer' && TokenService.hasAuthToken()) {
      return (
        <>
          <Link
            to='/qualinteer/'
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
            to='/qualinteer/'
            onClick={() => this.handleLogout()}>
            Logout
          </Link>
          {this.linkSeparator}
          <Link
            to='/qualinteer/opportunitypost'
            className='navLink'>
            Recruit Volunteers
          </Link>
        </>
      )
    }
    else {
      return (
        <>
          <Link to='/qualinteer/login' className='navLink'>
            Log In
          </Link>
          {this.linkSeparator}
          <Link to='/qualinteer/register' className='navLink'>
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
          <Link to='/qualinteer/'>
            <img src='/qualinteer/assets/qualinteerlogo.svg' alt='qualinteer logo' className='mainLogo' />
            <h1 className='navName'>Qualinteer</h1>
          </Link>
        </div>
        <div className='navLinks'>
          {this.userLinks()}
          {this.linkSeparator}
          <Link to='/qualinteer/opportunityboard' className='navLink'>
            Find Opportunities
          </Link>
        </div>
      </div >
    );
  }
}
