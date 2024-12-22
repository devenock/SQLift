"use client";

import { useState } from "react";
import Balloon from "@/components/Ballons";
import { challenges } from "@/data";

export default function ChallengesPage() {
  const [selectedChallenge, setSelectedChallenge] = useState(challenges[0]);
  const [sqlQuery, setSqlQuery] = useState("");
  const [queryResult, setQueryResult] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);

  const handleSubmit = () => {
    // This is where you'd typically send the query to your backend for validation
    // For now, we'll just simulate a response
    const simulatedCorrect = Math.random() > 0.5;
    setIsCorrect(simulatedCorrect);
    setQueryResult(
      simulatedCorrect
        ? "Query executed successfully. Result matches the expected output."
        : "Query executed, but the result doesn't match the expected output. Please try again.",
    );
    setShowBalloons(simulatedCorrect);

    if (simulatedCorrect) {
      setTimeout(() => setShowBalloons(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/4">
          <h2 className="text-xl font-bold mb-4">Challenges</h2>
          <ul className="space-y-2">
            {challenges.map((challenge) => (
              <li
                key={challenge.id}
                className={`p-2 rounded cursor-pointer transition-colors ${
                  selectedChallenge.id === challenge.id
                    ? "bg-blue-500"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => setSelectedChallenge(challenge)}
              >
                <h3 className="font-semibold">{challenge.title}</h3>
                <p className="text-sm text-gray-400">{challenge.difficulty}</p>
              </li>
            ))}
          </ul>
        </aside>

        <section className="lg:w-3/4 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              {selectedChallenge.title}
            </h2>
            <p className="text-gray-400">
              Difficulty: {selectedChallenge.difficulty}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="sqlQuery"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your SQL Query:
              </label>
              <textarea
                id="sqlQuery"
                value={sqlQuery}
                onChange={(e) => setSqlQuery(e.target.value)}
                className="w-full h-40 p-2 bg-gray-700 text-white rounded-md"
                placeholder="Enter your SQL query here..."
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Submit Query
            </button>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Query Result:</h3>
            <div
              className={`p-4 rounded-md ${isCorrect ? "bg-green-800" : "bg-red-800"}`}
            >
              {queryResult}
            </div>
          </div>
        </section>
      </main>

      {showBalloons && <Balloon />}
    </div>
  );
}