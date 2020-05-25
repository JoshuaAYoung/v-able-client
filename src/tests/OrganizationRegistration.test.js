import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import OrganizationRegistration from '../components/RegistrationForms/OrganizationRegistration';

describe('OrganizationRegistration Component', () => {
  const props = {
    errorProps: {
      zipcodeError: 'Test Error',
    },
  };

  it('OrganizationRegistration Smoke Test', () => {
    const div = document.createElement('div');

    ReactDOM.render(<OrganizationRegistration {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('OrganizationRegistration Snapshot Test', () => {
    const wrapper = shallow(<OrganizationRegistration {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
