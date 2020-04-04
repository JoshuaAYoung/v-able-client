import React, { Component } from 'react';
import './SuccessPage.css';
import VableContext from '../../context/VableContext'

export default class SuccessPage extends Component {
  static contextType = VableContext;

  state = {
    message: '',
    redirectPath: ''
  }

  componentDidMount() {
    const params = this.props.match.params.destination;
    if (params === 'login') {
      this.setState({ redirectPath: '/login' })
    }
    else if (params === 'oppboard') {
      this.setState({ redirectPath: '/opportunityboard' })
    }
    else if (params === 'redirect') {
      this.setState({ redirectPath: '/login' })
    }
    else if (params === 'homepage') {
      this.setState({ redirectPath: '/' })
    }
    setTimeout(() => {
      this.props.history.push(this.state.redirectPath)
    }, 3000)
  }

  renderMessage = () => {
    const params = this.props.match.params.destination;
    console.log(this.props.match.params.destination)
    if (params === 'login') {
      return (
        <>
          <p className='successTitle'>Congrats!</p>
          <p className='successCopy'>You've successfully registered an account.</p>
          <p className='successCopy'>Redirecting you to the login page.</p>
        </>
      )
    }
    else if (params === 'oppboard') {
      return (
        <>
          <p className='successTitle'>Congrats!</p>
          <p className='successCopy'>Your opportunity was submitted successfully.</p>
          <p className='successCopy'>Redirecting you to the opportunity board page.</p>
        </>
      )
    }
    else if (params === 'redirect') {
      return (
        <>
          <p className='successTitle'>Login</p>
          <p className='successCopy'>You must be logged in as a volunteer user to apply.</p>
          <p className='successCopy'>Redirecting you to the login page.</p>
        </>
      )
    }
    else if (params === 'homepage') {
      return (
        <>
          <p className='successTitle'>Congrats!</p>
          <p className='successCopy'>You've successfully logged in as a {this.context.userType} user.</p>
          <p className='successCopy'>Redirecting you to the homepage.</p>
        </>
      )
    }
  }

  render() {
    return (
      <div className='successContainer'>
        <img src='/assets/checkmark.svg' alt='checkmark icon' className='checkIcon' />
        {this.renderMessage()}
      </div>
    )
  }
}