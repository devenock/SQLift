import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center mb-16">
      <h1 className="text-5xl font-bold mb-4">
        Master SQL Through Interactive Challenges
      </h1>
      <p className="text-xl mb-8">
        Enhance your database skills with real-world scenarios and
        expert-crafted problems.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          href="/auth/register"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Start Practicing
        </Link>
      </div>
    </section>
  );
}
