import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://api.lanista.com.tr/api',
    withCredentials: false
  })
}
