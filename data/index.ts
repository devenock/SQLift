import { Challenge } from "@/types";

export const challenges: Challenge[] = [
  {
    id: 1,
    title: "Select all employees",
    description:
      "Write a query to select all columns from the 'employees' table.",
    difficulty: "Easy",
    tableName: "employees",
    columns: ["id", "name", "department", "salary"],
    sampleData: [
      [1, "John Doe", "Sales", 50000],
      [2, "Jane Smith", "Marketing", 60000],
      [3, "Bob Johnson", "Engineering", 75000],
    ],
    correctQuery: "SELECT * FROM employees",
  },
  {
    id: 2,
    title: "Filter by department",
    description:
      "Write a query to select all employees in the 'Sales' department.",
    difficulty: "Easy",
    tableName: "employees",
    columns: ["id", "name", "department", "salary"],
    sampleData: [
      [1, "John Doe", "Sales", 50000],
      [2, "Jane Smith", "Marketing", 60000],
      [3, "Bob Johnson", "Engineering", 75000],
      [4, "Alice Williams", "Sales", 55000],
    ],
    correctQuery: "SELECT * FROM employees WHERE department = 'Sales'",
  },
  {
    id: 3,
    title: "Calculate average salary",
    description:
      "Write a query to calculate the average salary for all employees.",
    difficulty: "Medium",
    tableName: "employees",
    columns: ["id", "name", "department", "salary"],
    sampleData: [
      [1, "John Doe", "Sales", 50000],
      [2, "Jane Smith", "Marketing", 60000],
      [3, "Bob Johnson", "Engineering", 75000],
      [4, "Alice Williams", "Sales", 55000],
      [5, "Charlie Brown", "Engineering", 80000],
    ],
    correctQuery: "SELECT AVG(salary) FROM employees",
  },
];
