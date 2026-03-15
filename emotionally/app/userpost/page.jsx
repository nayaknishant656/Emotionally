import React from 'react'
import UserPostFeed from './components/UserPostFeed'
import UserPost from './components/UserPost'

export default function page() {
    return (
        <main className="pt-32 px-6 max-w-4xl mx-auto space-y-12 pb-20">
            <UserPost />
            <div className="h-px bg-white/5" />
            <UserPostFeed />
        </main>
    )
}
