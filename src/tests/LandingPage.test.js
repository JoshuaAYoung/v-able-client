import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LandingPage from '../routes/LandingPage/LandingPage';

describe('LandingPage Component', () => {
  it('LandingPage Smoke Test', () => {
    const div = document.createElement('div');

    ReactDOM.render(<LandingPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('LandingPage Snapshot Test', () => {
    const wrapper = shallow(<LandingPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
