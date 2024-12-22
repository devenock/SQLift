import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Playground from "@/components/Playground";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

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
        <Features />
        {/*  Call to action*/}
        <CallToAction />
      </main>

      {/* footer*/}
      <Footer />
    </div>
  );
}
