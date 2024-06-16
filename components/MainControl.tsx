import Link from 'next/link'
import React from 'react'

function MainControl() {
    return (
        <div className='col-span-12 flex justify-center items-center h-[20dvh] my-4 md:my-0' id='MainControl'>
            <div className='grid grid-cols-12 justify-center items-center gap-4'>
                <Link href={'/skils'} className="col-span-12 md:col-span-3 text-white bg-orange-500 p-3 w-full md:min-w-[150px] text-center rounded-lg transition duration-300 ease-in-out hover:bg-orange-600">Skils</Link>
                <Link href={'/projects'} className="col-span-12 md:col-span-3 text-white bg-orange-500 p-3 md:min-w-[150px] text-center rounded-lg transition duration-300 ease-in-out hover:bg-orange-600">Projects</Link>
                <Link href={'/aboutme'} className="col-span-12 md:col-span-3 text-white bg-orange-500 p-3 md:min-w-[150px] text-center rounded-lg transition duration-300 ease-in-out hover:bg-orange-600">About Me</Link>
                <Link href={'/'} className="col-span-12 md:col-span-3 text-white bg-orange-500 p-3 md:min-w-[150px] text-center rounded-lg transition duration-300 ease-in-out hover:bg-orange-600">Contact Me</Link>
            </div>
        </div>
    )
}

export default MainControl