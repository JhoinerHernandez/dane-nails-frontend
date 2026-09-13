import apiClient from '../api/apiClient'

export const crearCita = async (citaData) => {
  const { data } = await apiClient.post('/citas', citaData)
  return data
}
