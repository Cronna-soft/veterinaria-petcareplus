import API_URL from './api'

const getMascotas = async () => {
	const response = await fetch(`${API_URL}/mascotas.json`)

	if (!response.ok) throw new Error('Error al cargar las mascotas.')

	return response.json()
}

const getAccesorios = async () => {
	const response = await fetch(`${API_URL}/accesorios.json`)

	if (!response.ok) throw new Error('Error al cargar los accesorios')

	return response.json()
}

const getClientes = async () => {
	const response = await fetch(`${API_URL}/clientes.json`)

	if (!response.ok) throw new Error('Error al cargar los clientes')

	return response.json()
}

const mascotasService = {
	getMascotas,
	getAccesorios,
	getClientes
}

export default mascotasService