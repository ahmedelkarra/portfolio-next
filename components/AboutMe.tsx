'use client'
import Image from 'next/image'
import React from 'react'
import myImage from '@/public/my.jpg'

function AboutMe() {
    return (
        <div className="col-span-12 md:w-[500px] mx-auto my-5 block rounded-lg p-4 shadow-sm shadow-indigo-100">
            <Image
                alt="Profile Picture of Ahmed Aly"
                src={myImage}
                className="h-[600px] w-full rounded-md object-fill"
                priority
            />

            <div className="mt-2">
                <div>
                    <dd className="text-sm text-gray-500 font-bold text-[21px]">Ahmed Aly</dd>
                </div>

                <div>
                    <dd className="font-medium">I live in Zagreb, Croatia</dd>
                </div>

                <table className="w-full border mt-4">
                    <thead>
                        <tr>
                            <th className="border">Languages</th>
                            <th className="border">Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="font-medium px-2">Arabic</td>
                            <td className="font-medium px-2">Native</td>
                        </tr>
                        <tr>
                            <td className="font-medium px-2">English</td>
                            <td className="font-medium px-2">B1</td>
                        </tr>
                        <tr>
                            <td className="font-medium px-2">Croatian</td>
                            <td className="font-medium px-2">A2</td>
                        </tr>
                        <tr>
                            <td className="font-medium px-2">German</td>
                            <td className="font-medium px-2">A1</td>
                        </tr>
                    </tbody>
                </table>

                <div className="mt-4">
                    <h3 className="text-lg font-bold">Skills</h3>
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Problem Solving</li>
                        <li>Effective Communication</li>
                        <li>Teamwork</li>
                        <li>Time Management</li>
                        <li>Flexibility and Adaptability</li>
                        <li>Attention to Detail</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default AboutMe
