'use client'
import Link from 'next/link'
import React from 'react'

function NotFound() {
    return (
        <div className="col-span-12 grid place-content-center bg-white px-4 my-5">
            <div className="text-center">
                <h1 className="text-9xl font-black text-gray-200">404</h1>

                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>

                <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>

                <Link href={'/'} className="text-white bg-orange-500 p-2 rounded-lg transition duration-300 ease-in-out hover:bg-orange-600 mt-6 inline-block px-5 py-3 text-sm font-medium focus:outline-none focus:ring">
                    Go Back Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound
