import axios from 'axios'

const http = axios.create({ baseURL: 'http://localhost:8095/' })

export default {
  async save (data) {
    return http.put('/api/translation', data)
  },
  async getStatus (data) {
    const query = Object.keys(data).map(k => {
      return `${k}=${data[k]}`
    }).join('&')

    return http.get(`/api/translation/status?${query}`)
  },
  async new (data) {
    return http.post(`/api/translation/new`, data)
  }
}
