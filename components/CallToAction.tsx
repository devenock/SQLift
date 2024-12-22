export default function CallToAction() {
    return (
        <section className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Level Up Your SQL Skills?</h2>
            <p className="text-xl mb-8">Join thousands of developers who are mastering SQL through our interactive
                platform.</p>
            <div className="max-w-md mx-auto">
                <form className="flex flex-col space-y-4">
                    <input type="email" placeholder="Enter your email"
                           className="px-4 py-2 rounded bg-gray-700 text-white"/>
                    <button type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
                        Sign Up for Free
                    </button>
                </form>
            </div>
        </section>
    )
}