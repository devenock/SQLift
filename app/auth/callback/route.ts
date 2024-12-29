// import { createClient } from "@/utils/supabase/server";
// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";
//
// export async function GET(request: Request) {
//   const requestUrl = new URL(request.url);
//   const code = requestUrl.searchParams.get("code");
//
//   if (code) {
//     const supabase = await createClient();
//     await supabase.auth.exchangeCodeForSession(code);
//   }
//
//   return NextResponse.redirect(`${requestUrl.origin}/challenges`);
// }

import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = await createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  // Redirect to login page after email confirmation
  return NextResponse.redirect(
    `${requestUrl.origin}/auth/login?confirmed=true`,
  );
}
