"use client";

import { useState } from "react";
import Link from "next/link";

export default function PlaygroundPage() {
  const [sqlQuery, setSqlQuery] = useState(
    "SELECT * FROM challenges WHERE difficulty = 'beginner'",
  );
  const [result, setResult] = useState("");

  const handleExecute = () => {
    // This is where you'd typically send the query to your backend
    // For now, we'll just simulate a response
    setResult("Query executed successfully. 5 rows returned.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/*<header className="container mx-auto px-4 py-6 flex justify-between items-center">*/}
      {/*    <div className="flex items-center space-x-2">*/}
      {/*        <span className="text-2xl font-bold">SQLMaster</span>*/}
      {/*    </div>*/}
      {/*    <nav>*/}
      {/*        <ul className="flex space-x-4">*/}
      {/*            <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>*/}
      {/*            <li><Link href="#" className="hover:text-blue-400 transition-colors">Challenges</Link></li>*/}
      {/*            <li><Link href="#" className="hover:text-blue-400 transition-colors">Profile</Link></li>*/}
      {/*            <li><button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition-colors">Logout</button></li>*/}
      {/*        </ul>*/}
      {/*    </nav>*/}
      {/*</header>*/}

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">SQL Playground</h1>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <textarea
            value={sqlQuery}
            onChange={(e) => setSqlQuery(e.target.value)}
            className="w-full h-40 p-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter your SQL query here..."
          />
          <button
            onClick={handleExecute}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Execute Query
          </button>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Result:</h2>
          <pre className="bg-gray-700 p-2 rounded-md">
            {result || "Results will appear here after execution."}
          </pre>
        </div>
      </main>
    </div>
  );
}
