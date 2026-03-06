import MonacoEditor from '@monaco-editor/react'

interface EditorProps {
  value: string
  onChange: (value: string | undefined) => void
  language: 'html' | 'css'
}

export default function CodeEditor({ value, onChange, language }: EditorProps) {
  return (
    <MonacoEditor
      height="100%"
      language={language}
      theme="vs-dark"
      value={value}
      onChange={onChange}
      options={{
        minimap: { enabled: false },
        fontSize: 13,
        lineNumbers: 'on',
        scrollBeyondLastLine: false,
        automaticLayout: true,
        tabSize: 2,
        wordWrap: 'on',
        padding: { top: 12, bottom: 12 },
        renderLineHighlight: 'line',
        smoothScrolling: true,
        cursorSmoothCaretAnimation: 'on',
        folding: true,
        formatOnPaste: true,
        suggestOnTriggerCharacters: true,
      }}
    />
  )
}
