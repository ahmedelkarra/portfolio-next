import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request: NextRequest) {
    const token = request.headers.get('Authorization')?.replace('Bearer ', '')
    const method = request.method

    if (method === 'GET') {
        return NextResponse.next()
    } else {
        if (!token) {
            return NextResponse.json({ message: 'Authorization header missing' }, { status: 401 })
        }
        try {
            const secret = process.env.NEXT_PUBLIC_SECRET as string
            const key = new TextEncoder().encode(secret)
            const result = await jwtVerify(token, key)
            if (result) {
                return NextResponse.next()
            } else {
                return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
            }
        } catch (error) {
            return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
        }
    }
}



export const config = {
    matcher: ['/api/projects', '/api/skils'],
}