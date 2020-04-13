import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import OpportunityDetailsPage from '../routes/OpportunityDetailsPage/OpportunityDetailsPage';

describe('OpportunityDetailsPage Component', () => {
  const props = {
    match: {
      params: '1'
    }
  }

  it('OpportunityDetailsPage Smoke Test', () => {
    const div = document.createElement('div')

    ReactDOM.render(<OpportunityDetailsPage {...props} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('OpportunityDetailsPage Snapshot Test', () => {
    const wrapper = shallow(<OpportunityDetailsPage {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})