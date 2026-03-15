import React from 'react'
import Link from 'next/link'

export default async function Body() {

    return (
        <>
            <p>user post</p>
            <Link href="/userpost">User Post</Link>
            <Link href="/userinsights">User Insights</Link>
        </>

    )
}
