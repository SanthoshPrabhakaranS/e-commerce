import axios from "axios";

export const ApiInstance = axios.create({
    baseURL: process.env.SERVER
})