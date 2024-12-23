// types/index.ts
export interface Challenge {
  id: number;
  title: string;
  description: string;
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  tableName: string;
  initialQuery: string;
  solution: string;
  hints: string[];
  testCases: TestCase[];
  categoryId: number;
  orderIndex: number;
}

export interface TestCase {
  id: number;
  description: string;
  validationQuery: string;
  expectedResult: any;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  orderIndex: number;
}

export interface QueryResult {
  columns: string[];
  rows: any[];
  rowCount: number;
  error?: string;
}

export interface UserProgress {
  challengeId: number;
  userId: string;
  completed: boolean;
  lastAttemptAt: Date;
  attemptCount: number;
  completedAt?: Date;
}

// constants/messages.ts
export const ERROR_MESSAGES = {
  INVALID_QUERY:
    "The SQL query appears to be invalid. Please check your syntax.",
  UNAUTHORIZED_TABLES: "This query references unauthorized tables.",
  TIMEOUT: "Query execution timed out. Please simplify your query.",
  GENERIC: "An error occurred while executing the query.",
  NOT_SELECTED: "Please select a challenge first.",
} as const;

export const SUCCESS_MESSAGES = {
  CHALLENGE_COMPLETED: "Congratulations! You've solved this challenge!",
  SAVED_PROGRESS: "Your progress has been saved.",
} as const;

// constants/config.ts
export const SQL_CONFIG = {
  MAX_QUERY_LENGTH: 2000,
  EXECUTION_TIMEOUT: 5000,
  MAX_ROWS_RETURNED: 1000,
  ALLOWED_COMMANDS: [
    "SELECT",
    "INSERT",
    "UPDATE",
    "DELETE",
    "CREATE",
    "DROP",
    "ALTER",
  ],
} as const;
