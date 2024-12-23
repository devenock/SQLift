"use client";
import { useState, useEffect } from "react";
import { Challenge, QueryResult } from "@/types";
import { CodeEditor } from "./CodeEditor";
import { QueryResultsTable } from "./QueryResultsTable";
import { ChallengeDetails } from "./ChallengeDetails";
import { SuccessFeedback } from "./SuccessFeedback";
import { ErrorFeedback } from "./ErrorFeedback";

interface SQLWorkspaceProps {
  challenge: Challenge;
  onSolutionSubmit: (passed: boolean) => void;
}

export function SQLWorkspace({
  challenge,
  onSolutionSubmit,
}: SQLWorkspaceProps) {
  const [query, setQuery] = useState(challenge.initialQuery);
  const [results, setResults] = useState<QueryResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);

  const handleExecuteQuery = async () => {
    setIsExecuting(true);
    setError(null);
    setResults(null);

    try {
      const response = await fetch("/api/execute-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query,
          challengeId: challenge.id,
          testMode: false,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setResults(data.results);

      if (data.passed) {
        onSolutionSubmit(true);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsExecuting(false);
    }
  };

  const handleShowHint = () => {
    setShowHint(true);
    if (currentHintIndex < challenge.hints.length - 1) {
      setCurrentHintIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <ChallengeDetails
        challenge={challenge}
        onShowHint={handleShowHint}
        currentHint={showHint ? challenge.hints[currentHintIndex] : null}
      />

      <div className="flex-1 min-h-0 p-4">
        <CodeEditor
          value={query}
          onChange={setQuery}
          onExecute={handleExecuteQuery}
          isExecuting={isExecuting}
        />

        {error && <ErrorFeedback error={error} />}

        {results?.error ? (
          <ErrorFeedback error={results.error} />
        ) : results ? (
          <QueryResultsTable results={results} />
        ) : null}
      </div>
    </div>
  );
}
