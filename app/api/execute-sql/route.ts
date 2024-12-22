import { NextRequest, NextResponse } from "next/server";
import Database from "better-sqlite3";

let db: Database.Database;

// Initialize SQLite database with a sample `employee` table
function initializeDB() {
  db = new Database(":memory:");
  db.exec(`
    CREATE TABLE employee (
                            id INTEGER PRIMARY KEY,
                            name TEXT,
                            age INTEGER,
                            department TEXT,
                            salary REAL
    );
    INSERT INTO employee (name, age, department, salary)
    VALUES
      ('Alice', 30, 'Engineering', 70000),
      ('Bob', 25, 'Marketing', 50000),
      ('Charlie', 35, 'HR', 60000),
      ('Diana', 28, 'Engineering', 72000);
  `);
}
initializeDB();

export async function POST(req: NextRequest) {
  const { query } = await req.json();

  if (!query) {
    return NextResponse.json(
      { success: false, error: "No SQL query provided" },
      { status: 400 },
    );
  }

  try {
    const stmt = db.prepare(query);
    const rows = stmt.all();
    return NextResponse.json({ success: true, data: rows });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
}
