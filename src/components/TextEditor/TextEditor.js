import React, { Component } from 'react';
import JoditEditor from "jodit-react";
import VableContext from '../../context/VableContext'
import TextEditorUtils from './TextEditorUtils'
import './TextEditor.css'
import ValidationError from '../../utilities/ValidationError'

export default class TextEditor extends Component {
  static contextType = VableContext;

  state = {
    touched: false,
  }

  constructor(props) {
    super(props)
    this.editor = null;
  }

  setContent = (description) => {
    this.context.setDescription({
      description
    })
    this.setState({
      touched: true
    })
  }

  generateError = () => {
    if (this.state.touched === true && !this.context.user.description) {
      return 'Please enter a description.';
    }
  }

  config = TextEditorUtils;

  render() {
    return (
      <div className='editorContainer'>
        <JoditEditor
          ref={editor => { this.editor = editor }}
          value={this.context.user.description}
          config={this.config}
          tabIndex={1}
          onBlur={description => this.setContent(description)}
        />
        {this.generateError() && <ValidationError message={this.generateError()} />}
      </div>
    );
  }
}