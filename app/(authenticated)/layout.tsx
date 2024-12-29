import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { logout } from "./actions";

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/challenges" className="text-xl font-bold">
            My App
          </Link>
          <div className="space-x-4">
            <Link href="/challenges" className="hover:text-gray-300">
              Challenges
            </Link>
            <Link href="/playground" className="hover:text-gray-300">
              Playground
            </Link>
            <Link href="/profile" className="hover:text-gray-300">
              Profile
            </Link>
            <form action={logout}>
              <button type="submit" className="hover:text-gray-300">
                Logout
              </button>
            </form>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto py-8">{children}</main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          © 2023 My App. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
