'use client'
import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { ISkils } from './Skils';

function Skil({ item }: { item: ISkils }) {
    return (
        <div className='flex justify-center items-center h-[250px] w-[250px] mx-auto'>
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
                className=''
            >
                <div className='flex flex-col justify-center items-center'>
                    <h2 className=' text-[#FF8C00] font-bold text-[20px] capitalize'>{item?.title}</h2>
                    <h2 className='flex justify-center items-center border rounded-full w-14 h-14 text-[#FF8C00] font-bold text-[17px]'>{`${item?.process}%`}</h2>
                </div>
            </div>
            <CircularProgressbar
                className='rotate-180'
                value={item?.process}
                strokeWidth={5}
                styles={buildStyles({
                    pathColor: `#FF8C00`,
                    trailColor: '#FFD700',
                })}
            />
        </div>
    )
}

export default Skil