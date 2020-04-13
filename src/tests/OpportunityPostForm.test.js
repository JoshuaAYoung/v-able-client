import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import OpportunityPostForm from '../components/OpportunityPostForm/OpportunityPostForm'

describe('OpportunityPostForm Component', () => {

  it.skip('OpportunityPostForm Smoke Test', () => {
    const div = document.createElement('div')

    ReactDOM.render(<OpportunityPostForm />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('OpportunityPostForm Snapshot Test', () => {
    const wrapper = shallow(
      <OpportunityPostForm />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})