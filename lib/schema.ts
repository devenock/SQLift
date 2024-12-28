import {
  pgTable,
  serial,
  text,
  timestamp,
  boolean,
  integer,
  primaryKey,
} from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  orderIndex: integer("order_index").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const challenges = pgTable("challenges", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  difficulty: text("difficulty", {
    enum: ["BEGINNER", "INTERMEDIATE", "ADVANCED"],
  }).notNull(),
  tableName: text("table_name").notNull(),
  initialQuery: text("initial_query"),
  solution: text("solution").notNull(),
  categoryId: integer("category_id")
    .references(() => categories.id)
    .notNull(),
  orderIndex: integer("order_index").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const testCases = pgTable("test_cases", {
  id: serial("id").primaryKey(),
  challengeId: integer("challenge_id")
    .references(() => challenges.id)
    .notNull(),
  description: text("description").notNull(),
  validationQuery: text("validation_query").notNull(),
  expectedResult: text("expected_result").notNull(),
  orderIndex: integer("order_index").notNull(),
});

export const hints = pgTable("hints", {
  id: serial("id").primaryKey(),
  challengeId: integer("challenge_id")
    .references(() => challenges.id)
    .notNull(),
  content: text("content").notNull(),
  orderIndex: integer("order_index").notNull(),
});

export const userProgress = pgTable(
  "user_progress",
  {
    userId: text("user_id").notNull(),
    challengeId: integer("challenge_id")
      .references(() => challenges.id)
      .notNull(),
    completed: boolean("completed").default(false).notNull(),
    attemptCount: integer("attempt_count").default(0).notNull(),
    lastAttemptAt: timestamp("last_attempt_at").notNull(),
    completedAt: timestamp("completed_at"),
  },
  (table) => ({
    pk: primaryKey(table.userId, table.challengeId),
  }),
);

export const hintUsage = pgTable("hint_usage", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  challengeId: integer("challenge_id")
    .references(() => challenges.id)
    .notNull(),
  usedAt: timestamp("used_at").notNull(),
});
