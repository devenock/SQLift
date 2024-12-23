"use client";

import { useEffect, useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { EditorView } from "@codemirror/view";
import { keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  onExecute: () => void;
  isExecuting: boolean;
}

export default function CodeEditor({
  value,
  onChange,
  onExecute,
  isExecuting,
}: CodeEditorProps) {
  const editorRef = useRef<EditorView>();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        onExecute();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onExecute]);

  return (
    <div className="border rounded-md overflow-hidden">
      <div className="bg-gray-50 px-4 py-2 flex items-center justify-between border-b">
        <div className="text-sm text-gray-600">
          SQL Editor
          <span className="ml-2 text-gray-400">
            Press Cmd/Ctrl + Enter to execute
          </span>
        </div>
        <button
          onClick={onExecute}
          disabled={isExecuting}
          className={`
            px-4 py-1.5 rounded-md text-sm font-medium
            ${
              isExecuting
                ? "bg-blue-100 text-blue-400"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }
          `}
        >
          {isExecuting ? "Executing..." : "Execute"}
        </button>
      </div>

      <CodeMirror
        value={value}
        height="200px"
        extensions={[
          sql(),
          keymap.of([
            ...defaultKeymap,
            {
              key: "Mod-Enter",
              run: () => {
                onExecute();
                return true;
              },
            },
          ]),
        ]}
        onChange={onChange}
        theme="light"
        basicSetup={{
          lineNumbers: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          autocompletion: true,
          closeBrackets: true,
          tabSize: 2,
        }}
      />
    </div>
  );
}
