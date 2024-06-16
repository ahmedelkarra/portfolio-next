import mongoose from "mongoose";


export const connectDB = async () => {
    const host = process.env.NEXT_PUBLIC_DB_URL as string
    try {
        await mongoose.connect(host)
        console.log('DB has been connected')
    } catch (error) {
        console.log('Failed to connect to DB')
    }
}