"use client"
import { useEffect, useState } from 'react'

export default function Balloon() {
    const [balloons, setBalloons] = useState<{ id: number; left: number; animationDuration: number }[]>([])

    useEffect(() => {
        const newBalloons = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            animationDuration: 3 + Math.random() * 2
        }))
        setBalloons(newBalloons)
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none">
            {balloons.map((balloon) => (
                <div
                    key={balloon.id}
                    className="absolute bottom-0 w-8 h-10 bg-blue-500 rounded-full"
                    style={{
                        left: `${balloon.left}%`,
                        animation: `float ${balloon.animationDuration}s ease-in-out infinite`,
                    }}
                />
            ))}
            <style jsx>{`
        @keyframes float {
          0% { transform: translateY(100vh); }
          100% { transform: translateY(-100vh); }
        }
      `}</style>
        </div>
    )
}

