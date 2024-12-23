import { db } from "./db";
import { eq } from "drizzle-orm";
import { hints, hintUsage } from "./schema";

export async function getHints(challengeId: number) {
  try {
    const results = await db.query.hints.findMany({
      where: eq(hints.challengeId, challengeId),
      orderBy: (hints, { asc }) => [asc(hints.orderIndex)],
    });

    return results;
  } catch (error) {
    console.error("Error fetching hints:", error);
    throw new Error("Failed to fetch hints");
  }
}

export async function updateHintUsage({
  userId,
  challengeId,
  timestamp,
}: {
  userId: string;
  challengeId: number;
  timestamp: Date;
}) {
  try {
    await db.insert(hintUsage).values({
      userId,
      challengeId,
      usedAt: timestamp,
    });
  } catch (error) {
    console.error("Error updating hint usage:", error);
    throw new Error("Failed to update hint usage");
  }
}
