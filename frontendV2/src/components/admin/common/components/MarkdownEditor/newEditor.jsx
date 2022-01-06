import React, { useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import './MarkdownEditor.scss';
import rehypeSanitize from "rehype-sanitize";


const MarkdownEditor = function ({ labelName, required, value, name , handleChange}) {
  const [view, setView] = useState("edit");
  const isEdit = view === "edit";
  return (
    <div className="markdown">       
      <label>
        {labelName} {required && <small className="asterik ml-1">*</small>}
      </label>
      <div className="markd-cover">
      <div className="flexed-row span-wrapper">
        <span onClick={() => setView('edit')} className={`${isEdit ? 'active-span' : ''}`}>Write</span>
        <span onClick={() => setView('preview')} className={`${!isEdit ? 'active-span' : ''}`}>Preview</span>
      </div>
      
      <MDEditor
        height={250}
        value={value}
        onChange={(val) => handleChange({ target: { name, value: val } })}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]]
        }}
         preview={view} 
          hideToolbar={!isEdit}
         />
         
        </div>
    </div>
  );
}

export default MarkdownEditor;
