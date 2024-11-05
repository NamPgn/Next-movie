import axios from "axios"
const intances = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
});

export const URL_SERVER_RENDER = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
})

export default intances