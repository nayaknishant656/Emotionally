import React from 'react'

export default function Footer() {
    return (
        <footer className="py-12 px-6 mt-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
                <div className="flex items-center gap-2 opacity-50">
                    <div className="w-5 h-5 bg-white rounded flex items-center justify-center"></div>
                    <span className="text-lg font-bold tracking-tight">Emotionally</span>
                </div>
                <p className="text-gray-500 text-sm max-w-md text-center">
                    A safe space for your thoughts. Designed to help you reflect and find peace in every moment.
                </p>
                <div className="flex gap-6 text-gray-400 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                </div>
                <div className="text-gray-600 text-[10px] mt-4 uppercase tracking-widest">
                    © 2026 Emotionally Inc.
                </div>
            </div>
        </footer>
    )
}
