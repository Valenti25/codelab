'use client'
import axios from 'axios'

export const useAxios = axios.create({
   baseURL: process.env.NEXT_PUBLIC_API_URL,
   withCredentials: true,
})

useAxios.interceptors.request.use(
   async function (config) {
      const session = {
         accessToken: 'x',
      }
      config.headers['Authorization'] = `Bearer ${session?.accessToken}`
      return config
   },
   function (error) {
      return Promise.reject(error)
   },
)
