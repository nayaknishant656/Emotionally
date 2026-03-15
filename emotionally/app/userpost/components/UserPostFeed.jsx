'use client'
import React, { useEffect, useState } from 'react'
import AnalysisDisplay from './AnalysisDisplay'

export default function UserPostFeed() {
    const [journals, setJournals] = useState([])
    const [loading, setLoading] = useState(true)


    const fetchJournals = async () => {
        try {
            const res = await fetch('http://localhost:5001/api/v1/journals', { cache: 'no-store' })
            if (!res.ok) throw new Error('Failed to fetch')
            const result = await res.json()
            // Assuming the API returns { status: 'success', data: [...] }
            setJournals(result.data || [])
        } catch (error) {
            console.error('Error fetching journals:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchJournals()
    }, [])

    const [analysisData, setAnalysisData] = useState({})
    const [analyzingId, setAnalyzingId] = useState(null)

    const saveAnalysisToServer = async (journalId, userId, text, ambience, analysisResults) => {
        try {
            await fetch('http://localhost:5001/api/v1/analyses', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    journalId,
                    userId,
                    journalText: text,
                    ambience,
                    analysis: analysisResults
                })
            })
            console.log(`Analysis for journal ${journalId} saved to server successfully.`)
        } catch (error) {
            console.error('Failed to save analysis to server:', error)
        }
    }

    const handleAnalyze = async (id, text, ambience, userId) => {
        setAnalyzingId(id)
        try {
            const res = await fetch('/api/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text, ambience })
            })

            if (res.ok) {
                const data = await res.json()
                setAnalysisData(prev => ({ ...prev, [id]: data }))

                // Automatically save the analysis to the server
                await saveAnalysisToServer(id, userId, text, ambience, data)
            }
        } catch (error) {
            console.error('Analysis failed:', error)
        } finally {
            setAnalyzingId(null)
        }
    }

    if (loading) {
        return (
            <div className="flex justify-center py-20">
                <div className="w-8 h-8 border-2 border-white/10 border-t-white rounded-full animate-spin" />
            </div>
        )
    }

    return (
        <section className="space-y-6">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold tracking-tight">Recent Journals</h3>
                <span className="text-[10px] uppercase tracking-widest font-black text-gray-500">
                    {journals.length} Entries
                </span>
            </div>

            <div className="grid gap-6">
                {journals.map((journal) => {
                    const { _id, text, ambience, userId, createdAt } = journal
                    const analysis = analysisData[_id]
                    const isAnalyzing = analyzingId === _id

                    return (
                        <div key={_id} className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded font-bold text-gray-400 uppercase tracking-widest">
                                            {ambience || 'No Ambience'}
                                        </span>
                                        <span className="text-[10px] text-gray-600 font-medium">
                                            {new Date(createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <p className="text-[10px] text-gray-500 font-mono">ID: {userId}</p>
                                </div>
                                <button
                                    onClick={() => handleAnalyze(_id, text, ambience, userId)}
                                    disabled={isAnalyzing}
                                    className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/20 border border-white/5 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-50"
                                >
                                    {isAnalyzing ? 'Analyzing...' : 'Analyze'}
                                </button>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                {text}
                            </p>

                            <AnalysisDisplay analysis={analysis} />

                        </div>
                    )
                })}

                {journals.length === 0 && (
                    <div className="text-center py-20 bg-white/2 border border-dashed border-white/10 rounded-2xl">
                        <p className="text-gray-500 text-sm italic">No journal entries found. Star writing above.</p>
                    </div>
                )}
            </div>
        </section>
    )
}
