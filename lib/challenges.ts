import { db } from "./db";
import { cache } from "react";
import { eq } from "drizzle-orm";
import { challenges, testCases, categories } from "./schema";
import type { Challenge, TestCase } from "@/types";

export const getAllChallenges = cache(async () => {
  try {
    const results = await db.query.challenges.findMany({
      with: {
        testCases: true,
        category: true,
      },
      orderBy: (challenges, { asc }) => [
        asc(challenges.categoryId),
        asc(challenges.orderIndex),
      ],
    });

    return results;
  } catch (error) {
    console.error("Error fetching challenges:", error);
    throw new Error("Failed to fetch challenges");
  }
});

export async function getChallenge(id: number): Promise<Challenge | null> {
  try {
    const result = await db.query.challenges.findFirst({
      where: eq(challenges.id, id),
      with: {
        testCases: true,
        category: true,
      },
    });

    return result;
  } catch (error) {
    console.error("Error fetching challenge:", error);
    throw new Error("Failed to fetch challenge");
  }
}

export async function getChallengeTestCases(
  challengeId: number,
): Promise<TestCase[]> {
  try {
    const results = await db.query.testCases.findMany({
      where: eq(testCases.challengeId, challengeId),
    });

    return results;
  } catch (error) {
    console.error("Error fetching test cases:", error);
    throw new Error("Failed to fetch test cases");
  }
}
