import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import VolunteerRegistration from '../components/RegistrationForms/VolunteerRegistration'

describe('VolunteerRegistration Component', () => {
  const props = {
    errorProps: {
      emailError: 'test error 1',
      passwordError1: 'test error 1',
      passwordError2: 'test error 1',
      passwordError3: 'test error 1',
      passwordError4: 'test error 1'
    }
  }

  it('VolunteerRegistration Smoke Test', () => {
    const div = document.createElement('div')

    ReactDOM.render(<VolunteerRegistration {...props} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('VolunteerRegistration Snapshot Test', () => {
    const wrapper = shallow(
      <VolunteerRegistration {...props} />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})