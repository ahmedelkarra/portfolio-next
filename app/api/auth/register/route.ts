import { connectDB } from "@/connectDB";
import { User } from "@/model/UserSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'

interface IUser {
    email: string;
    pass: string;
    fName: string;
    lName: string;
    _id?: string | undefined
}

export const POST = async (req: NextRequest) => {
    const { email, fName, lName, pass } = await req.json() as IUser
    return NextResponse.json({ message: 'Not Found' }, { status: 404 })
    // if (email && fName && lName && pass) {
    //     try {
    //         connectDB()
    //         const hashPass = bcrypt.hashSync(pass, 12)
    //         User.create({ email, fName, lName, pass: hashPass })
    //         return NextResponse.json({ message: 'User has been created' })
    //     } catch (error) {
    //         return NextResponse.json({ message: 'Somthing went wrong' }, { status: 400 })
    //     }
    // } else {
    //     return NextResponse.json({ message: 'Please check your inputs' }, { status: 400 })
    // }
}