import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { getHints, updateHintUsage } from "@/lib/hints";

export async function GET(
  request: Request,
  { params }: { params: { challengeId: string } },
) {
  try {
    const session = await getServerSession();

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const hints = await getHints(parseInt(params.challengeId));

    // Record hint usage
    await updateHintUsage({
      userId: session.user.id,
      challengeId: parseInt(params.challengeId),
      timestamp: new Date(),
    });

    return NextResponse.json(hints);
  } catch (error) {
    console.error("Error fetching hints:", error);
    return NextResponse.json(
      { error: "Failed to fetch hints" },
      { status: 500 },
    );
  }
}
