import FeatureCard from "@/components/FeaturedCard";
import {
  Code,
  Trophy,
  Database,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      className="mb-16 flex flex-col items-center w-3/4 mx-auto space-y-4"
    >
      <h3 className="text-3xl text-center font-bold mb-2">Main Features</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <FeatureCard
          icon={<Code className="w-10 h-10 text-meta-3" />}
          title="Interactive SQL Challenges"
          description="Practice with a variety of SQL challenges, from basic queries to complex data manipulations."
        />
        <FeatureCard
          icon={<Database className="w-10 h-10 text-meta-3" />}
          title="In-Browser SQL Playground"
          description="Write and execute SQL queries directly in your browser with our embedded SQL engine."
        />
        <FeatureCard
          icon={<Trophy className="w-10 h-10 text-meta-3" />}
          title="Progress Tracking"
          description="Monitor your learning journey with our built-in progress tracking system."
        />
        <FeatureCard
          icon={
            <ChartNoAxesColumnIncreasing className="w-10 h-10 text-meta-3" />
          }
          title="Diverse Challenges"
          description="From basic queries to complex data manipulations, our platform offers a wide range of SQL challenges."
        />
      </div>
    </section>
  );
}
