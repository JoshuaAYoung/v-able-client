import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TextEditor from '../components/TextEditor/TextEditor';
import VableContext from '../context/VableContext';

describe('TextEditor Component', () => {
  it.skip('TextEditor Smoke Test', () => {
    const div = document.createElement('div');

    ReactDOM.render(<TextEditor />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('TextEditor Snapshot Test', () => {
    const wrapper = shallow(
      <VableContext.Provider
        value={{ user: { description: 'Test Description' } }}
      >
        <TextEditor />
      </VableContext.Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
