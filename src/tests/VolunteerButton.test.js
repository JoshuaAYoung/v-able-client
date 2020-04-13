import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import VolunteerButton from '../components/VolunteerButton/VolunteerButton';

describe('VolunteerButton Component', () => {

  it('VolunteerButton Smoke Test', () => {
    const div = document.createElement('div')

    ReactDOM.render(<VolunteerButton />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('VolunteerButton Snapshot Test', () => {
    const wrapper = shallow(<VolunteerButton />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})