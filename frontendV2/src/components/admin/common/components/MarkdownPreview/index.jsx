import React from "react";
import MDEditor from '@uiw/react-md-editor';
import './MarkupEditor.scss';
import rehypeSanitize from "rehype-sanitize";


const MarkupEditor = function ({ labelName, required, value, name , handleChange}) {
  return (
    <div className="markup">
      <div className="flexed-space-between">
        <label>
        {labelName} {required && <small className="asterik ml-1">*</small>}
      </label>
      <span className="preview span">Preview</span>
      </div>
      
      <MDEditor
        value={value}
        onChange={(val) => handleChange({ target: { name, value: val } })}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]]
        }}
        preview="edit" />
    </div>
  );
}

export default MarkupEditor;