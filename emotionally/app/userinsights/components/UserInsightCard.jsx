import React from 'react';
import AnalysisDisplay from '../../userpost/components/AnalysisDisplay';

const UserInsightCard = ({ item }) => {
    // Destructuring the response item
    const { _id, journalText, text, analysis, createdAt } = item;

    // Some backend routes might use 'text' instead of 'journalText'
    const content = journalText || text;

    return (
        <div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-10 hover:border-white/10 transition-all group relative overflow-hidden backdrop-blur-sm">
            {/* Entry ID & Date Badge */}
            <div className="absolute top-0 right-0 p-10 flex flex-col items-end gap-1">
                <span className="text-[10px] font-mono text-gray-700 tracking-widest uppercase">ID: {_id.slice(-6)}</span>
                {createdAt && (
                    <span className="text-[9px] text-gray-800 font-bold uppercase tracking-tighter">
                        {new Date(createdAt).toLocaleDateString()}
                    </span>
                )}
            </div>

            <div className="space-y-8">
                {/* Journal Content Section */}
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                        <span className="text-[11px] uppercase tracking-[0.2em] font-black text-gray-500">Contextual Journal</span>
                    </div>
                    <blockquote className="text-xl text-gray-100 font-medium leading-relaxed italic border-l-2 border-white/10 pl-6">
                        "{content}"
                    </blockquote>
                </div>

                {/* Analysis Breakdown */}
                <AnalysisDisplay analysis={analysis} />
            </div>
        </div>
    );
};

export default UserInsightCard;
