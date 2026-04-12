import { supabase } from './api'

const createCita = async (citaData) => {
  const {data, error} = await supabase
    .from('citas')
    .insert([citaData])
    .select()

    if (error) throw new Error(error.message)

    return data
}

const citasService =  {
  createCita
}

export default citasService

/*

const getCitas = async () => {
  try {
    const response = await fetch(`${API_URL}/citas`)

    if (!response.ok) {
      throw new Error('Error al obtener las citas')
    }

    return await response.json()
  } catch (error) {
    console.error('getCitas error:', error)
    throw error
  }
}

const createCita = async (citaData) => {
  try {
    const response = await fetch(`${API_URL}/citas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(citaData)
    })

    if (!response.ok) {
      throw new Error('Error al crear la cita')
    }

    return await response.json()
  } catch (error) {
    console.error('createCita error:', error)
    throw error
  }
}

const citasService = {
  getCitas,
  createCita
}

export default citasService*/