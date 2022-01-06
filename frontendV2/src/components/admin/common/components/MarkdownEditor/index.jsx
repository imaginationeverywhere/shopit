import React from "react";
import ReactMde from "react-mde";
import './MarkdownEditor.scss';
import ReactMarkdown from "react-markdown";
import "react-mde/lib/styles/css/react-mde-all.css";


const MarkdownEditor = function ({ labelName, required, value, name , handleChange}) {
  const [selectedTab, setSelectedTab] = React.useState("write");
  return (
    <div className="markdown">
      <div className="flexed-space-between">
        <label>
        {labelName} {required && <small className="asterik ml-1">*</small>}
      </label>
      </div>   
      <ReactMde
        value={value}
        onChange={(val) => handleChange({ target: { name, value: val } })}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={markdown =>
          Promise.resolve(<ReactMarkdown source={markdown} />)
        }
        childProps={{
          writeButton: {
            tabIndex: -1
          }
        }}
      />
    </div>
  );
}

export default MarkdownEditor;