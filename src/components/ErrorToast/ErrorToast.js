import React, { Component } from 'react';
import './ErrorToast.css';

export default class ErrorToast extends Component {
  state = {
    errorClass: '',
  };

  handleClose = () => {
    this.setState({
      errorClass: 'hiddenToast',
    });
  };

  render() {
    return (
      <div className={`errorToast ${this.state.errorClass}`}>
        <div className="toastMessage">
          <p className="defaultMedium">Server Error:</p>
          <p className="serverMessage">{this.props.errorMessage}</p>
        </div>
        <button
          type="button"
          className="toastButton"
          onClick={() => this.handleClose()}
        >
          &#x2716;
        </button>
      </div>
    );
  }
}
