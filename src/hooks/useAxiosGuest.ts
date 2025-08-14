'use client'
import axios from 'axios'

export const useAxiosGuest = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true
})