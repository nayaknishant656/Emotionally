import React from 'react'

export default function AnalysisDisplay({ analysis }) {
    if (!analysis) return null;

    const { sentiment, main_emotions, intensity, brief_advice } = analysis;

    const getSentimentColor = (s) => {
        const val = s?.toLowerCase() || '';
        if (val.includes('positive')) return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
        if (val.includes('negative')) return 'text-rose-400 bg-rose-400/10 border-rose-400/20';
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
    };

    const getEmotionColor = (index) => {
        const colors = [
            'bg-purple-500/20 text-purple-300 border-purple-500/30',
            'bg-blue-500/20 text-blue-300 border-blue-500/30',
            'bg-rose-500/20 text-rose-300 border-rose-500/30',
            'bg-amber-500/20 text-amber-300 border-amber-500/30',
            'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
        ];
        return colors[index % colors.length];
    };

    return (
        <div className="mt-8 pt-8 border-t border-white/5 animate-fade-in space-y-8 w-full">
            {/* Popping Sentiment Headliner */}
            <div className="space-y-3 text-center">
                <div className="flex items-center justify-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary animate-ping" />
                    <span className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-500">Detected State</span>
                </div>
                <div className={`
                    inline-block px-6 py-2 rounded-full border font-black uppercase tracking-widest text-xs
                    shadow-lg transform transition-transform hover:scale-105
                    animate-bounce-subtle cursor-default
                    ${getSentimentColor(sentiment)}
                `}>
                    {sentiment}
                </div>
            </div>

            {/* Popping Emotion Bubbles */}
            <div className="space-y-3">
                <p className="text-[9px] uppercase tracking-widest font-black text-gray-600 text-center">Emotional Spectrum</p>
                <div className="flex flex-wrap justify-center gap-2">
                    {main_emotions?.map((emotion, i) => (
                        <div
                            key={i}
                            className={`
                                px-4 py-2 rounded-full border text-[10px] font-bold uppercase tracking-wider
                                shadow-sm transform transition-all hover:-translate-y-1 hover:brightness-110
                                animate-fade-in
                                ${getEmotionColor(i)}
                            `}
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            {emotion}
                        </div>
                    ))}
                </div>
            </div>

            {/* Advice & Intensity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5 space-y-2">
                    <p className="text-[9px] uppercase tracking-widest font-black text-primary/60">Guidance</p>
                    <p className="text-xs text-primary font-bold leading-relaxed">
                        {brief_advice}
                    </p>
                </div>
                <div className="bg-white/2 border border-white/5 rounded-2xl p-5 flex flex-col justify-center">
                    <div className="flex justify-between items-end mb-2">
                        <p className="text-[9px] uppercase tracking-widest font-black text-gray-600">Intensity</p>
                        <span className="text-sm font-black text-white">{intensity}/10</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${(intensity || 0) * 10}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Raw JSON for Evaluation */}
            <div className="space-y-3 pt-6 text-left overflow-hidden">
                <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-yellow-500" />
                    <p className="text-[9px] uppercase tracking-widest font-black text-gray-600">JSON Payload</p>
                </div>
                <div className="relative w-full">
                    <pre className="relative bg-black/40 backdrop-blur-inner p-4 rounded-xl border border-white/5 text-[9px] font-mono text-primary/70 overflow-x-auto leading-relaxed max-h-[200px] whitespace-pre-wrap break-all">
                        {JSON.stringify(analysis, null, 2)}
                    </pre>
                </div>
            </div>
        </div>
    )
}
