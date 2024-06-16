import React from 'react'
import logo from '@/public/logo.svg'
import Image from 'next/image'

function Footer() {
    return (
        <footer className="col-span-12 row-span-4 grid grid-cols-12 justify-center items-center bg-white border-t border-gray-200">
            <div className="flex flex-col justify-center items-center mx-auto px-4 py-5 sm:px-6 lg:px-8 col-span-12">
                <div className="flex justify-center my-4">
                    <Image src={logo} className='w-24 scale-125' alt='logo' draggable={false} />
                </div>

                <ul className="my-3 flex justify-center items-center gap-6 md:gap-8" id='Contact'>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/ahmed-el-karra-ab4629249/"
                            rel="noreferrer"
                            target="_blank"
                            className="text-black transition hover:text-gray-500"
                        >
                            <span className="sr-only">Linkedin</span>
                            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://github.com/ahmedelkarra?tab=repositories"
                            rel="noreferrer"
                            target="_blank"
                            className="text-black transition hover:text-gray-500"
                        >
                            <span className="sr-only">GitHub</span>
                            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>

                <p className='w-[80%] lg:w-[50%] my-3 text-center'>
                    Ahmed Aly - An experienced web developer proficient in JavaScript, React, Next.js, and other modern web development technologies.
                    I specialize in creating interactive web applications with innovative design and high performance.
                </p>
                <p>&copy; {new Date().getFullYear()} Ahmed Aly. All rights reserved.</p>
            </div>
        </footer>

    )
}

export default Footer