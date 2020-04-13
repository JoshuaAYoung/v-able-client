import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import OpportunityPostPage from '../routes/OpportunityPostPage/OpportunityPostPage';

describe('OpportunityPostPage Component', () => {

  it.skip('OpportunityPostPage Smoke Test', () => {
    const div = document.createElement('div')

    ReactDOM.render(<OpportunityPostPage />, div),
      ReactDOM.unmountComponentAtNode(div)
  })

  it('OpportunityPostPage Snapshot Test', () => {
    const wrapper = shallow(<OpportunityPostPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})