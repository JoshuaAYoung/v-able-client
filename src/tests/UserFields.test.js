import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UserFields from '../components/RegistrationForms/UserFields';

describe('UserFields Component', () => {
  const props = {
    errorProps: {
      emailError: 'test error 1',
      passwordError1: 'test error 1',
      passwordError2: 'test error 1',
      passwordError3: 'test error 1',
      passwordError4: 'test error 1',
    },
  };

  it('UserFields Smoke Test', () => {
    const div = document.createElement('div');

    ReactDOM.render(<UserFields {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('UserFields Snapshot Test', () => {
    const wrapper = shallow(<UserFields {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
