import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import QualinteerContext from '../../context/QualinteerContext'

//Implement the logic from header.js in blogful once this isn't static anymore
export default class NavBar extends Component {
  static contextType = QualinteerContext;

  demoLogout = () => {
    this.context.setUser('');
  }

  //Can probably keep this logic but update with my auth service to see if we're logged in.
  userLinks = () => {
    if (this.context.userType === '') {
      return (
        <>
          <Link to='/login' className='navLink'>
            Log In
          </Link>
          <span className='linkBullet'>&#9900;</span>
          <Link to='/register' className='navLink'>
            Sign Up
          </Link>
        </>
      )
    }
    else {
      return (
        <Link to='/' onClick={() => this.demoLogout()}>Logout</Link>
        // {
        // this.context.userType['company'] &&
        //   <span className='linkBullet'>&#9900;</span>
        //   <Link to='/jobpost' className='navLink'>
        //     Post Job
        //   </Link>
        // }
      )
    }
  }

  render() {
    return (
      <div className='navContainer'>
        <div className='logoContainer'>
          <Link to='/'>
            <h1 className='navName'>Qualinteer</h1>
          </Link>
        </div>
        <div className='navLinks'>
          {this.userLinks()}
          <span className='linkBullet'>&#9900;</span>
          <Link to='/jobboard' className='navLink'>
            Job Board
          </Link>
        </div>
      </div >
    );
  }
}
