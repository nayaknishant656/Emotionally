'use client'
import React, { useState } from 'react'
import UserInsightCard from './components/UserInsightCard'

export default function UserInsights() {
    const [searchId, setSearchId] = useState('')
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [searched, setSearched] = useState(false)

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchId) return

        setLoading(true)
        setSearched(true)
        try {
            // Updated API endpoint as per request
            const res = await fetch(`http://localhost:5001/api/v1/journals/analysis/user/${searchId}`)
            if (!res.ok) throw new Error('Search failed')
            const data = await res.json()

            // Expected response structure: { status: 'success', data: [...] }
            setResults(data.data || [])
        } catch (error) {
            console.error('Error searching insights:', error)
            setResults([])
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="pt-32 px-6 max-w-5xl mx-auto pb-20">
            {/* Header Section */}
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">User Analytics</h1>
                <p className="text-gray-500 max-w-2xl mx-auto text-sm">
                    Retrieve deep emotional patterns and historical journal analysis for User ID {searchId || '...'}.
                </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-16">
                <form onSubmit={handleSearch} className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition duration-500"></div>
                    <input
                        type="text"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                        placeholder="Enter User ID (try 472)"
                        className="relative w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-6 pr-32 outline-none focus:border-white/20 transition-all backdrop-blur-xl text-sm font-medium"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="absolute right-2 top-2 bottom-2 bg-white text-black font-black uppercase tracking-widest text-[10px] px-6 rounded-xl hover:bg-gray-200 transition-all disabled:opacity-50 active:scale-95"
                    >
                        {loading ? 'Searching...' : 'Explore'}
                    </button>
                </form>
            </div>

            {/* Results Section */}
            <div className="space-y-12">
                {results.length > 0 ? (
                    results.map((item) => (
                        <UserInsightCard key={item._id} item={item} />
                    ))
                ) : searched && !loading ? (
                    <div className="text-center py-20 bg-white/[0.02] border border-dashed border-white/10 rounded-[3rem] animate-fade-in backdrop-blur-sm">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                            <div className="w-2 h-2 bg-gray-600 rounded-full" />
                        </div>
                        <p className="text-gray-500 italic text-sm">No analysis history found for User ID: <span className="text-white font-mono">{searchId}</span></p>
                    </div>
                ) : !searched && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-20">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-64 bg-white/5 rounded-[2rem] border border-white/5 border-dashed flex items-center justify-center">
                                <div className="w-10 h-1 border-t border-white/10" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}
