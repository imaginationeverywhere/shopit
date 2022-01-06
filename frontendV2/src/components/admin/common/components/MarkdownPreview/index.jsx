import React from "react";
import MDEditor from '@uiw/react-md-editor';
import './MarkdownPreview.scss';


const MarkdownPreview = function ({ text }) {
  return (
    <div className="markdown-preview">
      <MDEditor.Markdown source={text} />
    </div>
  );
}

export default MarkdownPreview;