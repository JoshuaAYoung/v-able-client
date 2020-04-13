import React, { Component } from 'react';
import './ErrorToast.css'

export default class ErrorToast extends Component {
  state = {
    errorClass: ''
  }

  handleClose = () => {
    this.setState({
      errorClass: 'hiddenToast'
    })
  }

  render() {
    return (
      <div className={`errorToast ${this.state.errorClass}`} >
        <p className='defaultMedium'>Server Error:</p>
        <p>{this.props.errorMessage}</p>
        <button type='button' className='toastButton' onClick={() => this.handleClose()}>&#x2716;</button>
      </div >
    )
  }
}