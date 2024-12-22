import Image from "next/image";
import Link from 'next/link'
import FeatureCard from "@/components/FeaturedCard";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <header className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="SQLMaster Logo" width={32} height={32} />
              <span className="text-2xl font-bold">SQLMaster</span>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="#features" className="hover:text-blue-400 transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">About</Link></li>
                <li><Link href="/login" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition-colors">Login</Link></li>
              </ul>
            </nav>
          </header>

          <main className="container mx-auto px-4 py-12">
            <section className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-4">Master SQL Through Interactive Challenges</h1>
              <p className="text-xl mb-8">Enhance your database skills with real-world scenarios and expert-crafted problems.</p>
              <div className="flex justify-center space-x-4">
                <Link href="/register" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
                  Get Started
                </Link>
                <Link href="#features" className="bg-transparent hover:bg-white hover:text-gray-900 text-white font-bold py-2 px-4 rounded border border-white transition-colors">
                  Learn More
                </Link>
              </div>
            </section>

            <section className="mb-16">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">SQL Playground Preview</h2>
                <div className="bg-black rounded-lg p-4 font-mono text-sm">
                  <div className="mb-2 text-gray-400">-- Example SQL query</div>
                  <div className="text-green-400">
                    SELECT name, score FROM leaderboard ORDER BY score DESC LIMIT 5;
                  </div>
                  <div className="mt-4 text-gray-400">-- Result preview</div>
                  <div className="mt-2 text-green-400">
                    | name  | score |
                    |-------|-------|
                    | Alice | 980   |
                    | Bob   | 850   |
                    | Carol | 720   |
                    | Dave  | 690   |
                    | Eve   | 650   |
                  </div>
                </div>
              </div>
            </section>

            <section id="features" className="grid md:grid-cols-3 gap-8 mb-16">
              <FeatureCard
                  icon="📊"
                  title="Diverse Challenges"
                  description="From basic queries to complex data manipulations, our platform offers a wide range of SQL challenges."
              />
              <FeatureCard
                  icon="🏆"
                  title="Skill Progression"
                  description="Track your progress and earn badges as you complete challenges and improve your SQL mastery."
              />
              <FeatureCard
                  icon="👥"
                  title="Community Learning"
                  description="Connect with other learners, share solutions, and participate in friendly competitions."
              />
            </section>

            <section className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Ready to Level Up Your SQL Skills?</h2>
              <p className="text-xl mb-8">Join thousands of developers who are mastering SQL through our interactive platform.</p>
              <div className="max-w-md mx-auto">
                <form className="flex flex-col space-y-4">
                  <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded bg-gray-700 text-white" />
                  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
                    Sign Up for Free
                  </button>
                </form>
              </div>
            </section>
          </main>

          <footer className="bg-gray-900 py-8">
            <div className="container mx-auto px-4 text-center text-gray-400">
              <p>&copy; 2023 SQLMaster. All rights reserved.</p>
            </div>
          </footer>
        </div>
    )
  }
