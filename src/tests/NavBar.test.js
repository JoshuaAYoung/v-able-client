import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavBar from '../components/NavBar/NavBar';

describe('NavBar Component', () => {
  it('NavBar Smoke Test', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('NavBar Snapshot Test', () => {
    const wrapper = shallow(<NavBar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
