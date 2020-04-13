import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import OpportunityBoardPage from '../routes/OpportunityBoardPage/OpportunityBoardPage';
import VableContext from '../context/VableContext'

describe('OpportunityBoardPage Component', () => {
  const opportunities = [
    {
      "opportunity_id": 1,
      "org_id": 3,
      "title": "Community Outreach Coordinator",
      "description": "This individual will work with the Executive Board Member in charge of Community Outreach to: Plan and implement outreach events Be RPI's connection to the community Cultivate relationships and collaborations with individuals, businesses, and other non-profit organizations doing similar work. Provide assistance to RPI's program assistants in supporting our constituents.", "posted": "2019-10-25T00:00:00.000Z",
      "usr_id": 1,
      "name": "Restoration Project International",
      "city": "Aurora",
      "state": "CO",
      "zipcode": 80010
    },
    {
      "opportunity_id": 2,
      "org_id": 3,
      "title": "Community Outreach Coordinator",
      "description": "This individual will work with the Executive Board Member in charge of Community Outreach to: Plan and implement outreach events Be RPI's connection to the community Cultivate relationships and collaborations with individuals, businesses, and other non-profit organizations doing similar work. Provide assistance to RPI's program assistants in supporting our constituents.", "posted": "2019-10-25T00:00:00.000Z",
      "usr_id": 2,
      "name": "Restoration Project International",
      "city": "Aurora",
      "state": "CO",
      "zipcode": 80010
    }
  ]

  it('OpportunityBoardPage Smoke Test', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <VableContext.Provider value={{ opportunities: opportunities }}>
        <OpportunityBoardPage />
      </VableContext.Provider>,
      div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('OpportunityBoardPage Snapshot Test', () => {
    const wrapper = shallow(
      <VableContext.Provider value={{ opportunities: opportunities }}>
        <OpportunityBoardPage />
      </VableContext.Provider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})