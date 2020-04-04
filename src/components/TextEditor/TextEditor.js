import React, { Component } from 'react';
import JoditEditor from "jodit-react";
import VableContext from '../../context/VableContext'
import TextEditorUtils from '../../utilities/TextEditorUtils'

export default class TextEditor extends Component {
  static contextType = VableContext;

  constructor(props) {
    super(props)
    this.editor = null;
  }

  setContent = (description) => {
    this.context.setDescription({
      description
    })
  }

  config = TextEditorUtils;

  render() {
    return (
      <JoditEditor
        ref={editor => { this.editor = editor }}
        value={this.context.user.description}
        config={this.config}
        tabIndex={1}
        onBlur={description => this.setContent(description)}
      />
    );
  }
}