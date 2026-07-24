import axios from "axios"

const API_URL = "/api"



export const getTrabajos = async () => {
  try {
    const response = await axios.get(`${API_URL}/trabajos`)
 
    
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getServicios = async () => {
  try {
    const response = await axios.get(`${API_URL}/servicios`)
    return response.data
    
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const postContacto = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/contactos`, data)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}