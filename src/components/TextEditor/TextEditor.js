import React, { Component } from 'react';
import JoditEditor from "jodit-react";
import QualinteerContext from '../../context/QualinteerContext'
import TextEditorUtils from '../../utilities/TextEditorUtils'

export default class TextEditor extends Component {
  static contextType = QualinteerContext;

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
        tabIndex={1} // tabIndex of textarea
        onBlur={description => this.setContent(description)} // preferred to use only this option to update the content for performance reasons
      />
    );
  }
}