import axios from 'axios'

const http = axios.create({
  baseURL: '/api',
  headers: { Accept: 'application/json' },
})

export const getFamilias = () => http.get('/familias').then(r => r.data)
export const getFamilia  = (id) => http.get(`/familias/${id}`).then(r => r.data)

export const getMicroretos = (params = {}) => http.get('/microretos', { params }).then(r => r.data)
export const getMicroreto  = (id) => http.get(`/microretos/${id}`).then(r => r.data)
