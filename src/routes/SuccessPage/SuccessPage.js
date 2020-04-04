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
          <h1 className='pageHeader'>Congrats!</h1>
          <p className='pageInstructions'>You've successfully registered an account.
          </p>
        </>
      )
    }
    else if (params === 'oppboard') {
      return (
        <>
          <h1 className='pageHeader'>Congrats!</h1>
          <p className='pageInstructions'>Your opportunity was submitted successfully.
          </p>
        </>
      )
    }
    else if (params === 'redirect') {
      return (
        <>
          <h1 className='pageHeader'>Login</h1>
          <p className='pageInstructions'>You must be logged in as a volunteer user to apply.
          </p>
        </>
      )
    }
    else if (params === 'homepage') {
      return (
        <>
          <h1 className='pageHeader'>Congrats!</h1>
          <p className='pageInstructions'>You've successfully logged in as a {this.context.userType} user.
          </p>
        </>
      )
    }
  }

  render() {
    return (
      <header role="banner" className="successBanner">
        {this.renderMessage()}
        <div className='successImageContainer'>
          <img src='/assets/success-cloud.svg' alt='not found' className='successImage' />
        </div>
      </header>
    )
  }
}