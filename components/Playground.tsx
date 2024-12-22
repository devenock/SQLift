export default function Playground(){
    return (
        <section className="mb-16">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">SQL Playground Preview</h2>
                <div className="bg-black rounded-lg p-4 font-mono text-sm">
                    <div className="mb-2 text-gray-400">-- Example SQL query</div>
                    <div className="text-green-400">
                        SELECT name, score FROM leaderboard ORDER BY score DESC LIMIT 5;
                    </div>
                    <div className="mt-4 text-gray-400">-- Result preview</div>
                    <div className="mt-2 text-green-400">
                        | name | score |
                        |-------|-------|
                        | Alice | 980 |
                        | Bob | 850 |
                        | Carol | 720 |
                        | Dave | 690 |
                        | Eve | 650 |
                    </div>
                </div>
            </div>
        </section>
    )
}