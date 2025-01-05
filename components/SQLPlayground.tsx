"use client";
import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { Play } from "lucide-react";

interface SQLPlaygroundProps {
  initialQuery: string;
  challengeId: number;
}

interface QueryResult {
  columns: string[];
  rows: any[][];
  error?: string;
}

export default function SQLPlayground({
  initialQuery,
  challengeId,
}: SQLPlaygroundProps) {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<QueryResult | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const executeQuery = async () => {
    setIsExecuting(true);
    setError(null);

    try {
      const response = await fetch("/api/execute-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query,
          challengeId, // Using the challengeId prop directly
        }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
        setResults(null);
      } else {
        setResults(data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to execute query");
      setResults(null);
    } finally {
      setIsExecuting(false);
    }
  };

  // Update query when initialQuery prop changes
  React.useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  return (
    <div className="flex flex-col h-full">
      {/* Query Editor */}
      <div className="h-1/2 border-b border-gray-200">
        <Editor
          height="100%"
          defaultLanguage="sql"
          value={query}
          onChange={(value) => setQuery(value || "")}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            contextmenu: true,
            wordWrap: "on",
          }}
          theme="vs-dark"
        />
      </div>

      {/* Toolbar */}
      <div className="p-2 border-b border-gray-200 bg-gray-50">
        <button
          className="flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 disabled:opacity-50"
          onClick={executeQuery}
          disabled={isExecuting || !query.trim()}
        >
          <Play className="w-4 h-4 mr-2" />
          {isExecuting ? "Executing..." : "Run Query"}
        </button>
      </div>

      {/* Results Area */}
      <div className="flex-1 overflow-auto p-4">
        {error && (
          <div className="text-red-500 mb-4 p-4 bg-red-50 rounded">{error}</div>
        )}

        {results && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  {results.columns.map((column, i) => (
                    <th
                      key={i}
                      className="px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {results.rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-4 py-2 text-sm text-gray-900 border-b border-gray-200"
                      >
                        {cell === null ? "NULL" : cell.toString()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
