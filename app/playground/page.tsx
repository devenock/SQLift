"use client";

import Playground from "@/components/Playground";

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <main className="container mx-auto px-4 py-12">
        <Playground />
      </main>
    </div>
  );
}
