import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor centralizado de errores: normaliza el mensaje para la UI
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const mensaje =
      error.response?.data?.message ||
      error.response?.data?.error ||
      'No pudimos comunicarnos con el servidor. Intenta de nuevo.'
    return Promise.reject({ ...error, mensajeAmigable: mensaje })
  }
)

export default apiClient
