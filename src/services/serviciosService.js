import apiClient from '../api/apiClient'

export const getServicios = async () => {
  const { data } = await apiClient.get('/servicios')
  return data
}
