import React from 'react'
import Link from 'next/link'

export default function Body() {
    return (
        <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden relative">
            {/* Background elements for depth */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-4xl w-full text-center z-10 space-y-8">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400">
                        Nurture Your Mind,<br />Decode Your Emotions
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Emotionally is your companion for self-reflection. Share your thoughts, analyze your feelings with AI, and gain deep insights into your mental well-being.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Link href="/userpost" className="group relative px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Start Journaling
                        <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                    <Link href="/userinsights" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/10 transition-all">
                        View Insights
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
                    {[
                        { title: "Safe & Private", desc: "Your thoughts are yours alone. Encrypted and secure." },
                        { title: "AI Analysis", desc: "Get emotional trends and patterns from your entries." },
                        { title: "Daily Growth", desc: "Track your progress and mental clarity over time." }
                    ].map((feature, i) => (
                        <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10 text-left hover:bg-white/10 transition-colors group">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
