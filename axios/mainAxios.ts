import axios from "axios";


const host = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000' as string

export const mainAxios = axios.create(
    {
        baseURL: `${host}/api`,
        withCredentials: true
    }
)