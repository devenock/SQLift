import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <Image src="/logo.svg" alt="SQLMaster Logo" width={32} height={32}/>
                <span className="text-2xl font-bold">SQLMaster</span>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link href="#features" className="hover:text-blue-400 transition-colors">Features</Link></li>
                    <li><Link href="#" className="hover:text-blue-400 transition-colors">About</Link></li>
                    <li><Link href="/auth/login"
                              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition-colors">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}