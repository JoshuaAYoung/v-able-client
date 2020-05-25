import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LoginForm from '../components/LoginForm/LoginForm';

describe('LoginForm Component', () => {
  it('LoginForm Smoke Test', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('LoginForm Snapshot Test', () => {
    const wrapper = shallow(<LoginForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
