import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism.css';
import dedent from 'dedent';
import './styles/CodeEditor.css';

const CodeEditor = () => {
  const [code, setCode] = useState(dedent`
    import React from 'react';
    function App() {
      return (
        <div className="App">
          <h1>Helloo!</h1>
        </div>
      );
    }

    export default App;
  `);

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className='codeEditorWrapper'>
      <h2>Code-Editor</h2>
      <div className="code-editor">
        <textarea
          value={code}
          onChange={handleChange}
          className="code-input"
          spellCheck="false"
        />
        <pre className="code-output">
          <code
            dangerouslySetInnerHTML={{ __html: Prism.highlight(code, Prism.languages.jsx, 'jsx') }}
          />
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;