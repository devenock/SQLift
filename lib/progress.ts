import { db } from "./db";
import { eq, and } from "drizzle-orm";
import { userProgress } from "./schema";
import type { UserProgress } from "@/types";

export async function getUserProgress(userId: string): Promise<UserProgress[]> {
  try {
    const results = await db.query.userProgress.findMany({
      where: eq(userProgress.userId, userId),
    });

    return results;
  } catch (error) {
    console.error("Error fetching user progress:", error);
    throw new Error("Failed to fetch user progress");
  }
}

export async function updateUserProgress(
  progress: Partial<UserProgress>,
): Promise<UserProgress> {
  try {
    const { userId, challengeId, ...updateData } = progress;

    const result = await db
      .insert(userProgress)
      .values({
        userId,
        challengeId,
        ...updateData,
        lastAttemptAt: new Date(),
      })
      .onConflictDoUpdate({
        target: [userProgress.userId, userProgress.challengeId],
        set: {
          ...updateData,
          lastAttemptAt: new Date(),
        },
      })
      .returning();

    return result[0];
  } catch (error) {
    console.error("Error updating user progress:", error);
    throw new Error("Failed to update user progress");
  }
}
