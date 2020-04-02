import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: "http://106.54.54.237:8000/api/???/",
    timeout: 8000
  })

  instance.interceptors.request.use(config => {
    return config
  }, error => {
    throw error
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    throw error
  })

  return instance(config)
}
