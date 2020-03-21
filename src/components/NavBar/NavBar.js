import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QualinteerContext from '../../context/QualinteerContext';
import qualinteerlogo from '../../images/qualinteerlogo.svg';
import './NavBar.css';

//Implement the logic from header.js in blogful once this isn't static anymore
export default class NavBar extends Component {
  static contextType = QualinteerContext;

  demoLogout = () => {
    this.context.setUser('');
  }

  linkSeparator = (<span className='linkBullet'>&#8226;</span>)

  //Can probably keep this logic but update with my auth service to see if we're logged in.
  userLinks = () => {
    if (this.context.userType === '') {
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
    else {
      return (
        <>
          <Link to='/' onClick={() => this.demoLogout()}>Logout</Link>
          {this.context.userType === 'company' &&
            (
              <>
                {this.linkSeparator}
                <Link to='/jobpost' className='navLink'>
                  Post A Job
                </Link>
              </>
            )
          }
        </>
      )
    }
  }

  render() {
    return (
      <div className='navContainer'>
        <div className='logoContainer'>
          <Link to='/'>
            <img src={qualinteerlogo} alt='qualinteer logo' className='mainLogo' />
            <h1 className='navName'>Qualinteer</h1>
          </Link>
        </div>
        <div className='navLinks'>
          {this.userLinks()}
          {this.linkSeparator}
          <Link to='/jobboard' className='navLink'>
            Job Board
          </Link>
        </div>
      </div >
    );
  }
}
