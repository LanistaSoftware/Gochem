import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://api.lanista.com.tr/api',
    withCredentials: false
  })
}
