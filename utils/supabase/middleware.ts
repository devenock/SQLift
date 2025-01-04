import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// Define protected and public paths
const PUBLIC_PATHS = [
  "/",
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
];
const PROTECTED_PATHS = ["/profile", "/playground", "/challenges"];

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  // Allow access to the playground API route without authentication
  if (pathname.startsWith("/api/execute-sql")) {
    return response;
  }

  // If user is authenticated
  if (user) {
    // Redirect from public paths (landing and auth pages) to challenges
    if (PUBLIC_PATHS.includes(pathname)) {
      return NextResponse.redirect(new URL("/challenges", request.url));
    }

    // Allow access to protected paths
    if (PROTECTED_PATHS.includes(pathname)) {
      return response;
    }

    // Redirect unknown paths to challenges
    return NextResponse.redirect(new URL("/challenges", request.url));
  }

  // If user is not authenticated
  else {
    // Allow access to public paths
    if (PUBLIC_PATHS.includes(pathname)) {
      return response;
    }

    // Redirect from protected paths to login
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}
