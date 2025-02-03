"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Database } from "lucide-react";
import SQLPlayground from "@/components/SQLPlayground";

type Dataset = {
  name: string;
  columns: string[];
  data: (string | number)[][];
};

type Challenge = {
  id: number;
  title: string;
  description: string;
  initialCode: string;
  expectedOutput: string;
  hint: string;
  dataset: Dataset;
};

type Topic = {
  id: number;
  title: string;
  challenges: Challenge[];
};

const SQLLearningPlatform = () => {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(
    null,
  );
  const [showDataset, setShowDataset] = useState<boolean>(false);

  // Sample data structure - you would fetch this from Supabase
  const topics: Topic[] = [
    {
      id: 1,
      title: "Basic Queries",
      challenges: [
        {
          id: 1,
          title: "SELECT Basics",
          description:
            "Learn how to retrieve data from a table using SELECT statement",
          initialCode: "SELECT * FROM employees;",
          expectedOutput: "Show all employees from the database",
          hint: "Use SELECT * to get all columns",
          dataset: {
            name: "employees",
            columns: ["id", "name", "position", "salary", "department"],
            data: [
              [1, "John Doe", "Developer", 75000, "Engineering"],
              [2, "Jane Smith", "Designer", 65000, "Design"],
              [3, "Bob Johnson", "Manager", 85000, "Engineering"],
              [4, "Alice Brown", "Developer", 72000, "Engineering"],
            ],
          },
        },
        {
          id: 2,
          title: "WHERE Clause",
          description: "Filter results using WHERE clause",
          initialCode:
            "SELECT name, salary FROM employees WHERE salary > 70000;",
          expectedOutput:
            "Show names of employees with salary greater than 70000",
          hint: "Use WHERE to filter results",
          dataset: {
            name: "employees",
            columns: ["id", "name", "position", "salary", "department"],
            data: [
              [1, "John Doe", "Developer", 75000, "Engineering"],
              [2, "Jane Smith", "Designer", 65000, "Design"],
              [3, "Bob Johnson", "Manager", 85000, "Engineering"],
              [4, "Alice Brown", "Developer", 72000, "Engineering"],
            ],
          },
        },
      ],
    },
  ];

  // Auto-select first challenge on component mount
  useEffect(() => {
    if (topics.length > 0) {
      const firstTopic = topics[0];
      const firstChallenge = firstTopic.challenges[0];
      setSelectedTopic(firstTopic.id);
      setSelectedChallenge(firstChallenge);
    }
  }, []);

  const handleTopicClick = (topicId: number) => {
    setSelectedTopic(selectedTopic === topicId ? null : topicId);
  };

  const handleChallengeClick = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
  };

  const DatasetTable: React.FC<{ dataset: Dataset }> = ({ dataset }) => (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-medium">Table: {dataset.name}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-primary border border-gray-200">
          <thead>
            <tr>
              {dataset.columns.map((column, index) => (
                <th
                  key={index}
                  className="px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataset.data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-black" : "bg-primary"}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-4 py-2 text-sm text-gray-900 border-b border-gray-200"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left sidebar */}
      <div className="w-1/3 bg-black border-r border-gray-200 overflow-y-auto">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Tour of SQL</h1>
          {topics.map((topic) => (
            <div key={topic.id} className="mb-2">
              <button
                className="flex items-center w-full p-2 hover:bg-gray-100 rounded"
                onClick={() => handleTopicClick(topic.id)}
              >
                {selectedTopic === topic.id ? (
                  <ChevronDown className="w-4 h-4 mr-2" />
                ) : (
                  <ChevronRight className="w-4 h-4 mr-2" />
                )}
                {topic.title}
              </button>

              {selectedTopic === topic.id && (
                <div className="ml-6">
                  {topic.challenges.map((challenge) => (
                    <button
                      key={challenge.id}
                      className={`w-full text-left p-2 hover:bg-gray-100 rounded ${
                        selectedChallenge?.id === challenge.id
                          ? "bg-blue-50"
                          : ""
                      }`}
                      onClick={() => handleChallengeClick(challenge)}
                    >
                      {challenge.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right content area */}
      <div className="flex-1 flex flex-col">
        {selectedChallenge ? (
          <>
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold mb-2">
                {selectedChallenge.title}
              </h2>
              <p className="text-gray-600 mb-2">
                {selectedChallenge.description}
              </p>
              <p className="text-sm text-gray-500">
                Hint: {selectedChallenge.hint}
              </p>
              <button
                className="mt-2 flex items-center text-blue-500 hover:text-blue-600"
                onClick={() => setShowDataset(!showDataset)}
              >
                <Database className="w-4 h-4 mr-1" />
                {showDataset ? "Hide Dataset" : "Show Dataset"}
              </button>
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
              {showDataset && selectedChallenge.dataset && (
                <div className="p-4 border-b border-gray-200 overflow-auto">
                  <DatasetTable dataset={selectedChallenge.dataset} />
                </div>
              )}
              <div className="flex-1">
                <SQLPlayground
                  initialQuery={selectedChallenge.initialCode}
                  challengeId={selectedChallenge.id}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="p-4">
            <p>Select a challenge to begin</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SQLLearningPlatform;
