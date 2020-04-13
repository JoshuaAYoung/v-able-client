import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Footer from '../components/Footer/Footer'

describe('Footer Component', () => {

  it('Footer Smoke Test', () => {
    const div = document.createElement('div')

    ReactDOM.render(<Footer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Footer Snapshot Test', () => {
    const wrapper = shallow(
      <Footer />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})