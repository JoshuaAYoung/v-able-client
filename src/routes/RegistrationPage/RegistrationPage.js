import React, { Component } from 'react';
import OrganizationRegistration from '../../components/RegistrationForms/OrganizationRegistration'
import VolunteerRegistration from '../../components/RegistrationForms/VolunteerRegistration'
import './RegistrationPage.css'
import AuthApiService from '../../services/auth-api-service'
import ErrorToast from '../../components/ErrorToast/ErrorToast'
import ScrollToTopOnMount from '../../utilities/ScrollToTopOnMount'

export default class RegistrationPage extends Component {
  state = {
    error: null,
    header: '',
    emailTempValue: { value: '', touched: false },
    passwordTempValue: { value: '', touched: false },
    full_nameTempValue: '',
    user_typeTempValue: '',
    nameTempValue: '',
    addressTempValue: '',
    cityTempValue: '',
    stateTempValue: '',
    zipcodeTempValue: { value: '', touched: false },
    phoneTempValue: '',
    websiteTempValue: '',
  }

  addTempValue = (field, input) => {
    this.setState({
      [field + 'TempValue']: input
    })
  }

  addTempValidation = (field, input) => {
    this.setState({
      [field + 'TempValue']: {
        value: input,
        touched: true
      }
    })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    let allFields
    const userType = this.props.match.params.user
    const userFields = {
      email: this.state.emailTempValue.value,
      password: this.state.passwordTempValue.value,
      full_name: this.state.full_nameTempValue,
      user_type: userType
    }
    if (userType === 'organization') {
      const orgFields = {
        name: this.state.nameTempValue,
        address: this.state.addressTempValue,
        city: this.state.cityTempValue,
        state: this.state.stateTempValue,
        zipcode: this.state.zipcodeTempValue.value,
        phone: this.state.phoneTempValue,
        website: this.state.websiteTempValue
      }
      allFields = { ...userFields, ...orgFields }
    }
    else {
      allFields = { ...userFields }
    }

    this.setState({ error: null })
    AuthApiService.postUser(allFields)
      .then(user => {
        this.props.history.push('/success/login')
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  generateError = () => {
    const { emailTempValue, passwordTempValue, zipcodeTempValue } = this.state;
    //eslint-disable-next-line
    const passRegEx = /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/;
    //eslint-disable-next-line
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const zipcodeRegEx = /\b\d{5}\b/;
    const errorProps = {};
    if (this.state.emailTempValue.touched === true && !emailRegEx.test(emailTempValue.value)) {
      errorProps.emailError = 'Please enter a valid email address.';
    }
    if (this.state.passwordTempValue.touched === true && !passRegEx.test(passwordTempValue.value)) {
      errorProps.passwordError1 = 'Password must contain an upper case letter, a lower case letter and a number.';
    }
    if (this.state.passwordTempValue.touched === true && passwordTempValue.value.length < 8) {
      errorProps.passwordError2 = 'Password must be equal to or longer than 8 characters.';
    }
    if (this.state.passwordTempValue.touched === true && passwordTempValue.value.length > 71) {
      errorProps.passwordError3 = 'Password must be less than 72 characters.';
    }
    if (this.state.passwordTempValue.touched === true && (passwordTempValue.value.startsWith(' ') || passwordTempValue.value.endsWith(' '))) {
      errorProps.passwordError4 = 'Password must not start or end with empty spaces.';
    }
    if (this.state.zipcodeTempValue.touched === true && (zipcodeTempValue.value.length !== 5 || !zipcodeRegEx.test(zipcodeTempValue.value))) {
      errorProps.zipcodeError = 'Zipcode must be a 5 digit number.';
    }
    return errorProps;
  }

  componentDidMount() {
    if (this.props.match.params.user === 'organization') {
      this.setState({ header: 'Find Help.' })
    }
    else if (this.props.match.params.user === 'volunteer') {
      this.setState({ header: 'Volunteer.' })
    }
  }

  formRender = () => {
    if (this.props.match.params.user === 'organization') {
      return (
        <OrganizationRegistration
          addTempValidation={this.addTempValidation}
          addTempValue={this.addTempValue}
          errorProps={this.generateError()}
        />
      )
    }
    else if (this.props.match.params.user === 'volunteer') {
      return (
        <VolunteerRegistration
          addTempValidation={this.addTempValidation}
          addTempValue={this.addTempValue}
          errorProps={this.generateError()}
        />
      )
    }
  }

  render() {
    const { error } = this.state
    return (
      <div>
        <ScrollToTopOnMount />
        <section className='registrationContainer'>
          <div className="registerBanner">
            <h1 className='pageHeader'>{this.state.header}</h1>
            <p className='pageInstructions'>All fields are required unless noted otherwise.</p>
          </div>
          {error && <ErrorToast errorMessage={error} />}
          <form className='signupForm' onSubmit={ev => this.handleSubmit(ev)}>
            {this.formRender()}
            <button
              type='submit'
              className='registerButton'
              disabled={Object.keys(this.generateError()).length}
            >
              Sign Up
              </button>
          </form>
        </section >
      </div >
    );
  }
}
