import { Challenge } from "@/types";

export const challenges: Challenge[] = [
  {
    id: 1,
    title: "Select all employees",
    difficulty: "Easy",
    instruction:
      "Write a query to select all columns from the 'employees' table.",
    table: {
      name: "employees",
      columns: ["id", "name", "department", "salary"],
      sampleData: [
        [1, "John Doe", "Sales", 50000],
        [2, "Jane Smith", "Marketing", 60000],
        [3, "Bob Johnson", "Engineering", 75000],
      ],
    },
  },
  {
    id: 2,
    title: "Filter by department",
    difficulty: "Easy",
    instruction:
      "Write a query to select all employees in the 'Sales' department.",
    table: {
      name: "employees",
      columns: ["id", "name", "department", "salary"],
      sampleData: [
        [1, "John Doe", "Sales", 50000],
        [2, "Jane Smith", "Marketing", 60000],
        [3, "Bob Johnson", "Engineering", 75000],
        [4, "Alice Williams", "Sales", 55000],
      ],
    },
  },
  {
    id: 3,
    title: "Calculate average salary",
    difficulty: "Medium",
    instruction:
      "Write a query to calculate the average salary for all employees.",
    table: {
      name: "employees",
      columns: ["id", "name", "department", "salary"],
      sampleData: [
        [1, "John Doe", "Sales", 50000],
        [2, "Jane Smith", "Marketing", 60000],
        [3, "Bob Johnson", "Engineering", 75000],
        [4, "Alice Williams", "Sales", 55000],
        [5, "Charlie Brown", "Engineering", 80000],
      ],
    },
  },
  {
    id: 4,
    title: "Join tables",
    difficulty: "Medium",
    instruction:
      "Write a query to join the 'employees' and 'departments' tables to show each employee's name and their department's location.",
    table: {
      name: "employees, departments",
      columns: [
        "employees.id",
        "employees.name",
        "employees.department_id",
        "departments.id",
        "departments.name",
        "departments.location",
      ],
      sampleData: [
        [1, "John Doe", 1, 1, "Sales", "New York"],
        [2, "Jane Smith", 2, 2, "Marketing", "Los Angeles"],
        [3, "Bob Johnson", 3, 3, "Engineering", "San Francisco"],
      ],
    },
  },
  {
    id: 5,
    title: "Subquery challenge",
    difficulty: "Hard",
    instruction:
      "Write a query to find employees who earn more than the average salary of their department.",
    table: {
      name: "employees",
      columns: ["id", "name", "department", "salary"],
      sampleData: [
        [1, "John Doe", "Sales", 50000],
        [2, "Jane Smith", "Marketing", 60000],
        [3, "Bob Johnson", "Engineering", 75000],
        [4, "Alice Williams", "Sales", 55000],
        [5, "Charlie Brown", "Engineering", 80000],
        [6, "Eve Davis", "Marketing", 65000],
      ],
    },
  },
];
