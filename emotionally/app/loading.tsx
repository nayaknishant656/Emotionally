import React from 'react'

export default function Loading() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <div className="flex flex-col gap-4 mb-16 animate-pulse">
                <div className="h-16 md:h-20 bg-white/5 rounded-2xl w-3/4"></div>
                <div className="h-6 bg-white/5 rounded-xl w-1/2"></div>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                        key={i}
                        className="break-inside-avoid glass p-8 flex flex-col gap-6 animate-pulse"
                    >
                        <div className="flex justify-between items-start">
                            <div className="w-10 h-10 bg-white/5 rounded-lg"></div>
                            <div className="w-16 h-4 bg-white/5 rounded-md"></div>
                        </div>

                        <div className="space-y-3">
                            <div className="h-4 bg-white/5 rounded w-full"></div>
                            <div className="h-4 bg-white/5 rounded w-5/6"></div>
                            <div className="h-4 bg-white/5 rounded w-4/6"></div>
                        </div>

                        <div className="pt-4 mt-auto border-t border-white/5 flex items-center justify-between">
                            <div className="w-24 h-3 bg-white/5 rounded"></div>
                            <div className="w-12 h-2 bg-white/5 rounded"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
