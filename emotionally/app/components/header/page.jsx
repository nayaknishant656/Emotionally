import React from 'react'
import "./header.css"
export default function Header() {
    return (
        <header className="top-0 left-0 right-0 z-50 p-6 header-parent">
            <nav className="max-w-7xl mx-auto flex justify-between items-center border border-white/10 px-8 py-3 bg-black/50 backdrop-blur-md rounded-2xl">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-xs">E</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight">Emotionally</span>
                    </div>
                </div>
                <div className="flex items-center gap-8 text-sm text-gray-400">
                    <div className="hidden lg:flex items-center gap-6">
                        <a href="#" className="hover:text-white transition-colors">Dashboard</a>
                        <a href="#" className="hover:text-white transition-colors">Insights</a>
                        <a href="#" className="hover:text-white transition-colors">History</a>
                    </div>
                    <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                        <button className="bg-white/5 hover:bg-white/10 text-white text-xs px-4 py-2 rounded-lg border border-white/10 transition-all">
                            Account
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
