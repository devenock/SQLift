import Link from "next/link";
import { logout } from "@/app/(authenticated)/actions";

const NewHeader = () => {
  return (
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
  );
};

export default NewHeader;
