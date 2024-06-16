import { connectDB } from "@/connectDB";
import { User } from "@/model/UserSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import { SignJWT } from 'jose'

interface IUser {
    email: string;
    pass: string;
}

interface IUserInfo {
    _id: string;
    email: string;
    fName: string;
    lName: string;
    isAdmin: string
}

export const GET = async (req: NextRequest) => {
    const token = req.headers.get('Authorization')
    try {
        connectDB()
        const UserInfo = await User.findById(token).select(['_id', 'email', 'fName', 'lName'])
        if (UserInfo) {
            return NextResponse.json({ message: UserInfo })
        } else {
            return NextResponse.json({ message: 'Wrong Email or Password' }, { status: 400 })
        }
    } catch (error) {
        return NextResponse.json({ message: 'Somthing went wrong' }, { status: 400 })
    }
}

export const POST = async (req: NextRequest) => {
    const { email, pass } = await req.json() as IUser;

    if (email && pass) {
        try {
            connectDB();

            const UserInfo = await User.findOne({ email }).select(['_id', 'email', 'fName', 'lName', 'isAdmin', 'pass']);

            if (UserInfo) {
                const statusPass = await bcrypt.compare(pass, UserInfo.pass);

                if (statusPass) {
                    const token = await new SignJWT({
                        _id: UserInfo._id,
                        email: UserInfo.email,
                        fName: UserInfo.fName,
                        lName: UserInfo.lName,
                        isAdmin: UserInfo.isAdmin
                    })
                        .setProtectedHeader({ alg: 'HS256' })
                        .setExpirationTime('1d')
                        .sign(new TextEncoder().encode(process.env.NEXT_PUBLIC_SECRET as string));

                    return NextResponse.json({ message: token });
                } else {
                    return NextResponse.json({ message: 'Wrong Email or Password' }, { status: 400 });
                }
            } else {
                return NextResponse.json({ message: 'Wrong Email or Password' }, { status: 400 });
            }
        } catch (error) {
            return NextResponse.json({ message: 'Something went wrong' }, { status: 400 });
        }
    } else {
        return NextResponse.json({ message: 'Please check your inputs' }, { status: 400 });
    }
};