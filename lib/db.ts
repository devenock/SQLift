import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { Challenge, Category, UserProgress } from "@/types";

// Initialize Drizzle with the Vercel Postgres instance
const db = drizzle(sql);

// Ensure database is migrated on startup
export async function initDatabase() {
  try {
    await migrate(db, { migrationsFolder: "./drizzle" });
  } catch (error) {
    console.error("Failed to migrate database:", error);
    throw error;
  }
}

// Export database instance
export { db };
