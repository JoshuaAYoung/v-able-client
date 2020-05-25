import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import OpportunityDetails from '../components/OpportunityDetails/OpportunityDetails';
import VableContext from '../context/VableContext';

describe('OpportunityDetails Component', () => {
  const opportunity = {
    title: 'test title',
    description: 'test description',
    contact: 'test contact',
    start_date: 'test start_date',
    duration: 'test duration',
    commitment: 'test commitment',
    ed_level: 'none',
    experience: 'test experience',
    license: 'test license',
    remote: false,
    posted: '2019-12-22T16:28:32.615Z',
    name: 'test name',
    address: 'test address',
    city: 'test city',
    state: 'test state',
    zipcode: 90210,
    phone: 'test phone',
    website: 'test website',
  };

  it('OpportunityDetails Smoke Test', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <VableContext.Provider value={{ opportunity }}>
        <OpportunityDetails />
      </VableContext.Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('OpportunityDetails Snapshot Test', () => {
    const wrapper = shallow(
      <VableContext.Provider value={{ opportunity }}>
        <OpportunityDetails />
      </VableContext.Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
