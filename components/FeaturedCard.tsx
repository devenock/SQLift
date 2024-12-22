interface FeatureCardProps {
    title: string
    description: string
    icon: string
}

export default function FeatureCard({ icon, title, description }:FeatureCardProps) {
    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
                <span className="text-4xl">{icon}</span>
                <h3 className="text-xl font-bold">{title}</h3>
            </div>
            <p>{description}</p>
        </div>
    )
}