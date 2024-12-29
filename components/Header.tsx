import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { logout } from "@/app/(authenticated)/actions";

export default async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <Link href={"/"} className="flex items-center space-x-2">
        <Image src="/logo.svg" alt="SQLMaster Logo" width={32} height={32} />
        <span className="text-2xl font-bold">SQLift</span>
      </Link>
      <nav>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link
              href="/playground"
              className="hover:text-blue-400 transition-colors"
            >
              Playground
            </Link>
          </li>
          <li>
            <Link
              href="/challenges"
              className="hover:text-blue-400 transition-colors"
            >
              Challenges
            </Link>
          </li>
          {user && (
            <li>
              <Link
                href="/profile"
                className="hover:text-blue-400 transition-colors"
              >
                Profile
              </Link>
            </li>
          )}
          {!user ? (
            <li>
              <Link
                href="/auth/login"
                className="bg-meta-3 hover:bg-blue-600 px-4 py-2 rounded transition-colors"
              >
                Login
              </Link>
            </li>
          ) : (
            <li>
              <form action={logout}>
                <button
                  type="submit"
                  className="bg-bodydark2 hover:bg-meta-1 hover:bg-blue-600 px-4 py-1 rounded transition-colors"
                >
                  Logout
                </button>
              </form>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
