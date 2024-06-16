import React from 'react'
import logo from '@/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
    return (
        <header className="col-span-12 h-[15dvh] w-full flex justify-center items-center shadow-sm">
            <div className="h-full w-full flex justify-evenly items-center">

                <Link href="/" draggable={false}>
                    <Image src={logo} className="w-24 h-24" alt="logo" draggable={false} />
                </Link>

                <nav aria-label="Global" className="flex items-center">
                    <ul className="flex items-center gap-2 text-sm rounded-md bg-white">
                        <li>
                            <a className="text-white bg-orange-500 p-2 rounded-lg transition duration-300 ease-in-out hover:bg-orange-600" href="#MainControl" draggable={false}>About</a>
                        </li>
                        <li>
                            <a className="text-white bg-orange-500 p-2 rounded-lg transition duration-300 ease-in-out hover:bg-orange-600" href="#Contact" draggable={false}>Contact</a>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>

    )
}

export default Header