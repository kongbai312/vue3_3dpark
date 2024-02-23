import axios from 'axios'
import { useUserStore } from '@/stores/index'
const service = axios.create({
  baseURL: 'https://api-hmzs.itheima.net/api',
  timeout: 5000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    const store = useUserStore()
    const token = store.token
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service