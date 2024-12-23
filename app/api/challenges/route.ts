import { NextResponse } from "next/server";
import { getAllChallenges } from "@/lib/challenges";
import { getServerSession } from "next-auth";
import { getUserProgress } from "@/lib/progress";

export async function GET(request: Request) {
  try {
    const session = await getServerSession();
    const challenges = await getAllChallenges();

    // If user is authenticated, include their progress
    if (session?.user) {
      const userProgress = await getUserProgress(session.user.id);

      const challengesWithProgress = challenges.map((challenge) => ({
        ...challenge,
        progress: userProgress.find((p) => p.challengeId === challenge.id) || {
          completed: false,
          attemptCount: 0,
        },
      }));

      return NextResponse.json(challengesWithProgress);
    }

    // For unauthenticated users, return challenges without progress
    return NextResponse.json(challenges);
  } catch (error) {
    console.error("Error fetching challenges:", error);
    return NextResponse.json(
      { error: "Failed to fetch challenges" },
      { status: 500 },
    );
  }
}
