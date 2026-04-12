import API_URL from './api'

const getServicios = async () => {

	const response = await fetch(`${API_URL}/servicios-page.json`)

	if (!response.ok) throw new Error('Error al conseguir los servicios')

	return response.json()

}

const getVeterinarios = async () => {

	const response = await fetch(`${API_URL}/veterinarios.json`)

	if (!response.ok) throw new Error('Error al conseguir los veterinarios')

	return response.json()

}

const serviciosService = {
	getServicios,
	getVeterinarios
}

export default serviciosService