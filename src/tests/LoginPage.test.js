import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LoginPage from '../routes/LoginPage/LoginPage';

describe('LoginPage Component', () => {
  it('LoginPage Smoke Test', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('LoginPage Snapshot Test', () => {
    const wrapper = shallow(<LoginPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
