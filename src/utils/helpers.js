import axios from 'axios'

const baseURL = 'https://twitter-api-cjyw.herokuapp.com/api'

const axiosInstance = axios.create({ baseURL })

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers['Authentication'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

export const apiHelper = axiosInstance
