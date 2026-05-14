import React, { useCallback } from 'react';
import Editor from '@monaco-editor/react';
import '../styles/code-editor.css';

interface CodeEditorProps {
  language: 'html' | 'css' | 'javascript';
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  height?: string;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  language,
  value,
  onChange,
  readOnly = false,
  height = '400px',
}) => {
  const handleChange = useCallback(
    (newValue: string | undefined) => {
      if (newValue !== undefined) {
        onChange(newValue);
      }
    },
    [onChange]
  );

  return (
    <div className="code-editor-wrapper">
      <div className="editor-header">
        <span className="editor-language">{language.toUpperCase()}</span>
      </div>
      <Editor
        height={height}
        defaultLanguage={language}
        language={language}
        value={value}
        onChange={handleChange}
        theme="vs-dark"
        options={{
          minimap: { enabled: true },
          fontSize: 14,
          fontFamily: '"Fira Code", "Source Code Pro", monospace',
          lineNumbers: 'on',
          folding: true,
          wordWrap: 'on',
          automaticLayout: true,
          readOnly,
          scrollBeyondLastLine: false,
          smoothScrolling: true,
          formatOnPaste: true,
          formatOnType: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};
