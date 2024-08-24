'use client'
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import HeroImage from '@/public/HeroImage.jpg'

function Hero() {
    return (
        <section className='col-span-12'>
            <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <Image
                                alt="Hero Image"
                                src={HeroImage}
                                className="absolute inset-0 h-full w-full object-fill"
                            />
                        </div>
                    </div>

                    <div className="relative flex items-center bg-gray-100">
                        <span
                            className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                        ></span>

                        <div className="flex flex-col justify-center p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold sm:text-3xl">
                                Welcome to My Professional Portfolio
                            </h2>
                            <p className='my-3'>I&apos;m Ahmed Aly, a passionate and experienced web developer. Explore my projects, skills, and achievements. Let&apos;s create something amazing together!</p>
                            <div className='h-[60px]'>
                                <TypeAnimation
                                    sequence={[
                                        "I'm a Front End developer",
                                        1000,
                                        "I'm a Back End developer",
                                        1000,
                                        "I'm a MERN Stack developer",
                                        1000,
                                        "I'm a Django developer",
                                        1000,
                                        "I'm a Next.js developer",
                                        1000,
                                        "I'm a Microservices developer",
                                        1000,
                                    ]}
                                    speed={30}
                                    style={{ fontSize: '25px' }}
                                    repeat={Infinity}
                                />
                            </div>

                            <a
                                href="#contactMe"
                                className="my-8 mx-auto text-white bg-orange-500 p-2 rounded-lg transition duration-300 ease-in-out hover:bg-orange-600 px-12 py-3 text-sm font-medium "
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero