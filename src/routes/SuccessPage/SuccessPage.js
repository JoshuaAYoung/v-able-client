import React, { Component } from 'react';
import './SuccessPage.css';

export default class SuccessPage extends Component {
  state = {
    redirect: '',
    message: ''
  }

  redirectTimer = (destination) => {
    setTimeout(() => {
      this.props.history.push(destination)
    }, 3000)
  }

  componentDidMount() {
    const params = this.props.match.params.destination;
    if (params === 'login') {
      this.setState({ redirect: 'login' })
      this.setState({ message: "You've successfully registered an account." })
      this.redirectTimer('/login')
    }
    else if (params === 'oppboard') {
      this.setState({ redirect: 'opportunity board' })
      this.setState({ message: 'Your opportunity was submitted successfully.' })
      this.redirectTimer('/opportunityboard')
    }
  }

  render() {
    return (
      <div className='successContainer'>
        <img src='/assets/checkmark.svg' alt='checkmark icon' className='checkIcon' />
        <p className='successTitle'>Congrats!</p>
        <p className='successCopy'>{this.state.message}</p>
        <p className='successCopy'>Redirecting you to the {this.state.redirect} page.</p>
      </div>
    )
  }
}