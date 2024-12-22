import Image from "next/image";
import Link from 'next/link'
import FeatureCard from "@/components/FeaturedCard";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Playground from "@/components/Playground";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          {/*header*/}
          <Header />

          <main className="container mx-auto px-4 py-12">
            {/*hero*/}
            <Hero />
            {/*playground*/}
            <Playground />

            {/*features*/}

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
