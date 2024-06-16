import { connectDB } from "@/connectDB";
import { Projects } from "@/model/ProjectsSchema";
import { NextRequest, NextResponse } from "next/server";


interface IProjects {
    title: string;
    image: string;
    technology: string;
    using: [];
    _id?: string | undefined;
    github: string;
    website: string;
}

export const GET = async () => {
    try {
        connectDB()
        const projectsInfo = await Projects.find().select(['_id', 'title', 'image', 'technology', 'using', 'github', 'website'])
        return NextResponse.json({ message: projectsInfo })
    } catch (error) {
        return NextResponse.json({ message: 'Somthing went wrong' }, { status: 400 })
    }
}

export const POST = async (req: NextRequest) => {
    const { image, title, technology, using, github, website } = await req.json() as IProjects
    if (image && title && technology && github && website) {
        try {
            connectDB()
            await Projects.create({ image, title, technology, using, github, website })
            return NextResponse.json({ message: 'Project has been created' })
        } catch (error) {
            return NextResponse.json({ message: 'Somthing went wrong' }, { status: 400 })
        }
    } else {
        return NextResponse.json({ message: 'Please check your inputs' }, { status: 400 })
    }
}

export const PUT = async (req: NextRequest) => {
    const { image, title, technology, _id, using, github, website } = await req.json() as { _id: string } as IProjects
    if (_id) {
        try {
            connectDB()
            await Projects.findByIdAndUpdate(_id, { image, title, technology, using, github, website })
            return NextResponse.json({ message: 'Project has been Updated' })
        } catch (error) {
            return NextResponse.json({ message: 'Somthing went wrong' }, { status: 400 })
        }
    } else {
        return NextResponse.json({ message: 'Please check your inputs' }, { status: 400 })
    }
}