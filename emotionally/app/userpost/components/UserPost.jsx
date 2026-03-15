'use client'
import React, { useState } from 'react'

export default function UserPost() {
    const [text, setText] = useState('')
    const [ambience, setAmbience] = useState('')
    const [loading, setLoading] = useState(false)

    const generateRandomUserId = () => {
        return Math.floor(100 + Math.random() * 900).toString()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!text) return

        setLoading(true)
        const randomId = generateRandomUserId()

        try {
            const res = await fetch('http://localhost:5001/api/v1/journals', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text,
                    ambience,
                    userId: randomId
                }),
            })

            if (res.ok) {
                setText('')
                setAmbience('')
                // In a real app, we might want to refresh the feed here
                window.location.reload()
            }
        } catch (error) {
            console.error('Failed to post journal:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="animate-fade-in">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <h2 className="text-2xl font-bold mb-6 tracking-tight">How are you feeling today?</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">Journal Entry</label>
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Write your thoughts here..."
                            className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 min-height-[150px] outline-none focus:border-white/20 transition-all resize-none text-sm leading-relaxed"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">Ambience</label>
                            <input
                                type="text"
                                value={ambience}
                                onChange={(e) => setAmbience(e.target.value)}
                                placeholder="e.g. Rainy, Cafe, Quiet"
                                className="w-full bg-white/5 border border-white/5 rounded-xl p-3 outline-none focus:border-white/20 transition-all text-sm"
                            />
                        </div>
                        <div className="flex items-end">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-all disabled:opacity-50 active:scale-95 text-sm"
                            >
                                {loading ? 'Posting...' : 'Post Journal'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
