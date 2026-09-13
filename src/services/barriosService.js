import apiClient from '../api/apiClient'

export const getBarrios = async () => {
  const { data } = await apiClient.get('/barrios')
  return data
}
