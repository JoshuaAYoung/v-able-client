import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import RegistrationPage from '../routes/RegistrationPage/RegistrationPage';


describe('RegistrationPage Component', () => {
  const props = {
    match: {
      params: {
        user: 'volunteer'
      }
    }
  }

  it('RegistrationPage Smoke Test', () => {
    const div = document.createElement('div')

    ReactDOM.render(<RegistrationPage {...props} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('RegistrationPage Snapshot Test', () => {
    const wrapper = shallow(<RegistrationPage {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})