import { NextResponse } from "next/server";
import { getChallenge } from "@/lib/challenges";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const challenge = await getChallenge(parseInt(params.id));

    if (!challenge) {
      return NextResponse.json(
        { error: "Challenge not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(challenge);
  } catch (error) {
    console.error("Error fetching challenge:", error);
    return NextResponse.json(
      { error: "Failed to fetch challenge" },
      { status: 500 },
    );
  }
}
