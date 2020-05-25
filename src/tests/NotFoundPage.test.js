import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NotFoundPage from '../routes/NotFoundPage/NotFoundPage';

describe('NotFoundPage Component', () => {
  it('NotFoundPage Smoke Test', () => {
    const div = document.createElement('div');

    ReactDOM.render(<NotFoundPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('NotFoundPage Snapshot Test', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
