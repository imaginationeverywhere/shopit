import React from "react";
import ReactMde from "react-mde";
// import './MarkdownEditor.scss';
import ReactMarkdown from "react-markdown";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});


const MarkdownEditor = function ({ labelName, required, value, name , handleChange}) {
  const [selectedTab, setSelectedTab] = React.useState("preview");
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
          Promise.resolve(converter.makeHtml(markdown))
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