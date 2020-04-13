import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import OpportunityCard from '../components/OpportunityCard/OpportunityCard'
import VableContext from '../context/VableContext'

describe('OpportunityCard Component', () => {
  const props = {
    opportunity: {
      opportunity_id: 1,
      title: 'test title',
      description: 'test description',
      posted: '2019-12-22T16:28:32.615Z',
      name: 'test name',
      city: 'test city',
      state: 'test state',
      zipcode: 90210
    }
  }

  it('OpportunityCard Smoke Test', () => {
    const div = document.createElement('div')

    ReactDOM.render(<OpportunityCard {...props} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('OpportunityCard Snapshot Test', () => {
    const wrapper = shallow(<OpportunityCard {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})