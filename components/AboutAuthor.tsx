import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function AboutAuthor() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">
          Meet the Creator
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-[300px_1fr] gap-8 items-start">
          <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto relative rounded-full overflow-hidden shrink-0">
            <Image
              src="/icon.jpeg"
              alt="Enock Omondi"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Enock Omondi</h3>
            <p className="text-gray-300 text-lg">
              Hi! I'm a software engineer passionate about helping others
              understand SQL and level up their Software Engineering career.
            </p>
            <p className="text-gray-300 text-lg">
              After solving hundreds of SQL problems across multiple platforms
              and going through many SQL interviews myself, I created SQLift to
              help make the learning process more systematic and enjoyable for
              everyone.
            </p>
            <div className="flex gap-4 pt-4">
              <Link
                href="https://www.linkedin.com/in/enock-omondi/"
                target="_blank"
                className="p-2 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://x.com/dev_enock"
                target="_blank"
                className="p-2 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/devenock"
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
