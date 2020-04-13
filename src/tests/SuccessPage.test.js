import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SuccessPage from '../routes/SuccessPage/SuccessPage';


describe('SuccessPage Component', () => {
  const props = {
    match: {
      params: 'login'
    }
  }

  it('SuccessPage Smoke Test', () => {
    const div = document.createElement('div')

    ReactDOM.render(<SuccessPage {...props} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('SuccessPage Snapshot Test', () => {
    const wrapper = shallow(<SuccessPage {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})