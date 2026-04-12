import API_URL from './api'

export async function getTestimonios() {

	const response = await fetch(`${API_URL}/testimonios.json`)

	if (!response.ok) {
		throw new Error("Error al mostrar los testimonios")
	}

	return response.json()

}