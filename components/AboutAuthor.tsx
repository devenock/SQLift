import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

export function AboutAuthor() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">
          Meet the Creator
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-[300px_1fr] gap-8 items-start">
          <div className="relative aspect-square w-full max-w-[300px] mx-auto">
            <Image
              src="/profile.png"
              alt="Enock Omondi"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Enock Omondi</h3>
            <p className="text-gray-300 text-lg">
              Hi! I'm a software engineer passionate about helping others excel
              in coding interviews and level up their Software Engineering
              career.
            </p>
            <p className="text-gray-300 text-lg">
              After solving 1000s of coding problems across multiple platforms
              and going through countless technical interviews myself, I created
              AlgoMaster.io to help make the learning process more systematic
              and enjoyable for everyone.
            </p>
            <div className="flex gap-4 pt-4">
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="p-2 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="p-2 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="p-2 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
