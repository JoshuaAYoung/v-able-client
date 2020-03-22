import React, { Component } from 'react';
import CompanyRegistration from '../../components/RegistrationForm/CompanyRegistration'
import VolunteerRegistration from '../../components/RegistrationForm/VolunteerRegistration'
import './RegistrationPage.css'
export default class RegistrationPage extends Component {
  // static defaultProps = {
  //   onRegistrationSuccess: () => { }
  // }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   const { full_name, nick_name, user_name, password } = event.target

  //   this.setState({ error: null })
  //   AuthApiService.postUser({
  //     user_name: user_name.value,
  //     password: password.value,
  //     full_name: full_name.value,
  //     nickname: nick_name.value,
  //   })
  //     .then(user => {
  //       full_name.value = ''
  //       nick_name.value = ''
  //       user_name.value = ''
  //       password.value = ''
  //       this.props.onRegistrationSuccess()
  //     })
  //     .catch(res => {
  //       this.setState({ error: res.error })
  //     })
  //CLEAR THE STATE USERTYPE HERE
  // }

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.history.push('/login')
  }

  formRender = () => {
    if (this.props.userType === 'company') {
      return <CompanyRegistration />
    }
    else if (this.props.userType === 'volunteer') {
      return <VolunteerRegistration />
    }
  }
  render() {
    return (
      <div>
        <section>
          <form className='signup-form' onSubmit={ev => this.handleSubmit(ev)}>
            {this.formRender()}
            <br />
            <button type='submit' className="registerButton">Sign Up</button>
          </form>
        </section >
      </div >
    );
  }
}
