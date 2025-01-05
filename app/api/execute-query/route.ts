import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function POST(req: Request) {
  try {
    const { query, challengeId } = await req.json();

    // Get the sandbox schema name for this challenge
    const sandboxSchema = `challenge_${challengeId}_sandbox`;

    // Set the search_path to use the sandbox schema
    await supabase.rpc("set_search_path", { schema_name: sandboxSchema });

    // Execute the query
    const { data, error } = await supabase.rpc("execute_sql_query", {
      sql_query: query,
    });

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Query execution failed",
      },
      { status: 400 },
    );
  }
}
