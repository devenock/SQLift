import FeatureCard from "@/components/FeaturedCard";

export default function Features(){
    return (
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

    )
}