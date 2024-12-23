// "use client";
//
// import { useEffect, useState } from "react";
// import initSqlJs from "sql.js";
// import CodeMirror from "@uiw/react-codemirror";
// import { sql } from "@codemirror/lang-sql";
// import { oneDark } from "@codemirror/theme-one-dark";
// import { Challenge } from "@/types";
//
// interface SQLPlaygroundProps {
//   challenge: Challenge;
//   onQueryExecuted: (result: string, isCorrect: boolean) => void;
// }
//
// export function SQLPlayground({
//   challenge,
//   onQueryExecuted,
// }: SQLPlaygroundProps) {
//   const [sqlQuery, setSqlQuery] = useState("");
//   const [db, setDb] = useState<any>(null);
//
//   useEffect(() => {
//     async function initDB() {
//       const SQL = await initSqlJs({
//         locateFile: (file: any) => `https://sql.js.org/dist/${file}`,
//       });
//       const newDb = new SQL.Database();
//
//       // Create table and insert sample data
//       const createTableQuery = `CREATE TABLE ${challenge.table.name} (${challenge.table.columns.join(", ")});`;
//       newDb.run(createTableQuery);
//
//       const insertDataQuery = challenge.table.sampleData
//         .map(
//           (row) =>
//             `INSERT INTO ${challenge.table.name} VALUES (${row.map((val) => (typeof val === "string" ? `'${val}'` : val)).join(", ")})`,
//         )
//         .join(";");
//       newDb.run(insertDataQuery);
//
//       setDb(newDb);
//     }
//
//     initDB();
//   }, [challenge]);
//
//   const executeQuery = () => {
//     if (!db) return;
//
//     try {
//       const results = db.exec(sqlQuery);
//       const resultString = results
//         .map((result: any) => {
//           const headers = result.columns.join(" | ");
//           const rows = result.values
//             .map((row: any) => row.join(" | "))
//             .join("\n");
//           return `${headers}\n${"-".repeat(headers.length)}\n${rows}`;
//         })
//         .join("\n\n");
//
//       // Here you would typically compare the result with the expected output
//       // For this example, we'll just check if any results were returned
//       const isCorrect = results.length > 0 && results[0].values.length > 0;
//
//       onQueryExecuted(resultString, isCorrect);
//     } catch (error: any) {
//       onQueryExecuted(`Error: ${error.message}`, false);
//     }
//   };
//
//   return (
//     <div className="space-y-4">
//       <div>
//         <label
//           htmlFor="sqlQuery"
//           className="block text-sm font-medium text-gray-300 mb-2"
//         >
//           Your SQL Query:
//         </label>
//         <CodeMirror
//           value={sqlQuery}
//           height="200px"
//           extensions={[sql()]}
//           theme={oneDark}
//           onChange={(value) => setSqlQuery(value)}
//           className="rounded-md overflow-hidden"
//         />
//       </div>
//       <button
//         onClick={executeQuery}
//         className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
//       >
//         Execute Query
//       </button>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { oneDark } from "@codemirror/theme-one-dark";
import { Challenge } from "@/types";

interface SQLPlaygroundProps {
  challenge: Challenge;
  onQueryExecuted: (result: string, isCorrect: boolean) => void;
}

declare global {
  interface Window {
    SQL: any;
  }
}

export function SQLPlayground({
  challenge,
  onQueryExecuted,
}: SQLPlaygroundProps) {
  const [sqlQuery, setSqlQuery] = useState("");
  const [db, setDb] = useState<any>(null);

  useEffect(() => {
    async function initDB() {
      if (typeof window !== "undefined" && !window.SQL) {
        const script = document.createElement("script");
        script.src = "https://sql.js.org/dist/sql-wasm.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = async () => {
          await window.SQL.init({
            locateFile: (file: any) => `https://sql.js.org/dist/${file}`,
          });
          setupDatabase();
        };
      } else if (window.SQL) {
        setupDatabase();
      }
    }

    async function setupDatabase() {
      const SQL = window.SQL;
      const newDb = new SQL.Database();

      // Create table and insert sample data
      const createTableQuery = `CREATE TABLE ${challenge.table.name} (${challenge.table.columns.join(", ")});`;
      newDb.run(createTableQuery);

      const insertDataQuery = challenge.table.sampleData
        .map(
          (row) =>
            `INSERT INTO ${challenge.table.name} VALUES (${row.map((val) => (typeof val === "string" ? `'${val}'` : val)).join(", ")})`,
        )
        .join(";");
      newDb.run(insertDataQuery);

      setDb(newDb);
    }

    initDB();
  }, [challenge]);

  const executeQuery = () => {
    if (!db) return;

    try {
      const results = db.exec(sqlQuery);
      const resultString = results
        .map((result: any) => {
          const headers = result.columns.join(" | ");
          const rows = result.values
            .map((row: any) => row.join(" | "))
            .join("\n");
          return `${headers}\n${"-".repeat(headers.length)}\n${rows}`;
        })
        .join("\n\n");

      // Here you would typically compare the result with the expected output
      // For this example, we'll just check if any results were returned
      const isCorrect = results.length > 0 && results[0].values.length > 0;

      onQueryExecuted(resultString, isCorrect);
    } catch (error: any) {
      onQueryExecuted(`Error: ${error.message}`, false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="sqlQuery"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Your SQL Query:
        </label>
        <CodeMirror
          value={sqlQuery}
          height="200px"
          extensions={[sql()]}
          theme={oneDark}
          onChange={(value) => setSqlQuery(value)}
          className="rounded-md overflow-hidden"
        />
      </div>
      <button
        onClick={executeQuery}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
      >
        Execute Query
      </button>
    </div>
  );
}
