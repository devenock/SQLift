"use client";

import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";

type QueryResult = Record<string, any>;

const Playground: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<QueryResult[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sampleQuery = "SELECT * FROM employee;";

  const executeQuery = async () => {
    setError(null);
    setResult(null);
    try {
      const response = await fetch("/api/execute-sql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.data);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="flex items-center space-x-4 flex-col w-3/4 mx-auto">
      <h1 className="text-3xl text-center font-bold mb-2">
        Sample SQL Playground
      </h1>
      <p className="mb-4">
        Try SQL in our in built playground. We have a sample employee table to
        help you get started writing SQL
      </p>
      <div className="bg-gray-800 border-2 border-gray-700 mb-16 w-full space-x-3 flex flex-col lg:flex-row h-[350px] px-4">
        <div className="w-1/2 flex flex-col py-3">
          <div className="shadow rounded">
            <button
              onClick={() => setQuery(sampleQuery)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Load Sample Query
            </button>
          </div>
          <div className="mb-4 py-3">
            <CodeMirror
              value={query}
              height="200px"
              extensions={[sql()]}
              theme="dark"
              onChange={(value) => setQuery(value)}
            />
          </div>
          <button
            onClick={executeQuery}
            className="bg-green-500 w-1/4 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Execute
          </button>
        </div>

        {/* Divider Line */}
        <hr className="border hidden lg:block border-gray-700 w-full lg:w-px lg:h-full mb-8 lg:mb-0 lg:mx-8" />

        <div className="w-1/2 flex flex-col  py-3">
          <h3 className="text-xl font-bold mb-6">Query Results</h3>
          {error && <p className="text-red-500">Error: {error}</p>}
          {result && (
            <table className="table-auto w-full  shadow p-4 rounded">
              <thead>
                <tr>
                  {Object.keys(result[0] || {}).map((key) => (
                    <th key={key} className="px-4 py-2 text-left border">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {result.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, idx) => (
                      <td key={idx} className="px-4 py-2 border">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Playground;
