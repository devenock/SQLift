import { NextResponse } from "next/server";
import { SQLValidator } from "@/utils/sqlValidator";

export async function POST(request: Request) {
  try {
    const { query, allowedTables } = await request.json();

    const validator = new SQLValidator(allowedTables);
    const validation = validator.validate(query);

    return NextResponse.json(validation);
  } catch (error) {
    console.error("Error validating schema:", error);
    return NextResponse.json(
      { error: "Failed to validate query" },
      { status: 500 },
    );
  }
}
