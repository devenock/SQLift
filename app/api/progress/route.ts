import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { updateUserProgress } from "@/lib/progress";

export async function POST(request: Request) {
  try {
    const session = await getServerSession();

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { challengeId, completed, attemptCount } = await request.json();

    const progress = await updateUserProgress({
      userId: session.user.id,
      challengeId,
      completed,
      attemptCount,
      completedAt: completed ? new Date() : undefined,
    });

    return NextResponse.json(progress);
  } catch (error) {
    console.error("Error updating progress:", error);
    return NextResponse.json(
      { error: "Failed to update progress" },
      { status: 500 },
    );
  }
}
