'use client'
import React, { useEffect, useState } from 'react'
import Project from './Project'
import { mainAxios } from '@/axios/mainAxios';


export interface IProjects {
    title: string;
    image: string;
    _id: string;
    using: string[];
    technology: string;
    github: string;
    website: string;
}

function Projects() {
    const [projects, setProjects] = useState<IProjects[]>([])
    const [search, setSearch] = useState<string>('')

    const handelProject = () => {
        mainAxios.get('/projects')
            .then((e) => {
                setProjects(e?.data?.message)
            })
    }
    useEffect(() => {
        handelProject()
    }, [])
    console.log(projects)
    const filteredProjects = projects?.filter(project =>
        project.using?.some(tech => 
            tech.toLowerCase().includes(search.toLowerCase())
        )
    );
    return (
        <div className='col-span-12 grid grid-cols-12 w-[95%] h-[70dvh] mx-auto gap-4 my-14 md:my-5'>
            <div className='col-span-4 md:col-span-2 flex flex-col justify-center items-center mx-auto'>
                <button className="w-[120px] h-[50px] text-white bg-orange-500 rounded-lg transition duration-300 ease-in-out hover:bg-orange-600 my-2" onClick={() => setSearch('')}>All Projects</button>
                <button className="w-[120px] h-[50px] text-white bg-orange-500 rounded-lg transition duration-300 ease-in-out hover:bg-orange-600 my-2" onClick={() => setSearch('CSS')}>HTML & CSS</button>
                <button className="w-[120px] h-[50px] text-white bg-orange-500 rounded-lg transition duration-300 ease-in-out hover:bg-orange-600 my-2" onClick={() => setSearch('JavaScript')}>JavaScript</button>
                <button className="w-[120px] h-[50px] text-white bg-orange-500 rounded-lg transition duration-300 ease-in-out hover:bg-orange-600 my-2" onClick={() => setSearch('TypeScript')}>TypeScript</button>
                <button className="w-[120px] h-[50px] text-white bg-orange-500 rounded-lg transition duration-300 ease-in-out hover:bg-orange-600 my-2" onClick={() => setSearch('React')}>React</button>
                <button className="w-[120px] h-[50px] text-white bg-orange-500 rounded-lg transition duration-300 ease-in-out hover:bg-orange-600 my-2" onClick={() => setSearch('Next')}>Next</button>
                <button className="w-[120px] h-[50px] text-white bg-orange-500 rounded-lg transition duration-300 ease-in-out hover:bg-orange-600 my-2" onClick={() => setSearch('Django')}>Django</button>
                <button className="w-[120px] h-[50px] text-white bg-orange-500 rounded-lg transition duration-300 ease-in-out hover:bg-orange-600 my-2" onClick={() => setSearch('Microservice')}>Microservice</button>
            </div>
            <div className='col-span-8 md:col-span-10 grid grid-cols-12 w-full mx-auto overflow-x-auto'>
                {filteredProjects?.map((ele) => {
                    return (
                        <Project item={ele} key={ele?._id} />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects