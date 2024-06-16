import { connectDB } from "@/connectDB";
import { Skils } from "@/model/SkilsSchema";
import { NextRequest, NextResponse } from "next/server";


interface ISkils {
    title: string;
    process: number;
    _id?: string | undefined
}

export const GET = async () => {
    try {
        connectDB()
        const SkilsInfo = await Skils.find().select(['_id', 'title', 'process'])
        return NextResponse.json({ message: SkilsInfo })
    } catch (error) {
        return NextResponse.json({ message: 'Somthing went wrong' }, { status: 400 })
    }
}

export const POST = async (req: NextRequest) => {
    const { title, process } = await req.json() as ISkils
    if (title && process) {
        try {
            connectDB()
            await Skils.create({ title, process })
            return NextResponse.json({ message: 'Skil has been created' })
        } catch (error) {
            return NextResponse.json({ message: error }, { status: 400 })
        }
    } else {
        return NextResponse.json({ message: 'Please check your inputs' }, { status: 400 })
    }
}

export const PUT = async (req: NextRequest) => {
    const { title, _id, process } = await req.json() as { _id: string } as ISkils
    if (_id) {
        try {
            connectDB()
            await Skils.findByIdAndUpdate(_id, { title, process })
            return NextResponse.json({ message: 'Skil has been Updated' })
        } catch (error) {
            return NextResponse.json({ message: error }, { status: 400 })
        }
    } else {
        return NextResponse.json({ message: 'Please check your inputs' }, { status: 400 })
    }
}