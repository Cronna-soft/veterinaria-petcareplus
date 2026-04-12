import {useState} from 'react'
import {FormStatusMessage} from '../../components/ui'
import citasService from '../../services/citasService.js'

export const FormPreview = ({ formData, setShowModal, resetForm, onSuccess }) => {

	const { servicio, fecha, hora, nombre, tel, email, mascota } = formData
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [errorMessage, setErrorMessage] = useState("")

	const handleConfirm = async () => {
		try {
			setIsSubmitting(true)
			setErrorMessage("")

      const nuevaCita = {
        servicio,
        fecha: fecha ? fecha.format("YYYY-MM-DD") : "",
        hora: hora ? hora.format("HH:mm") : "",
        nombre,
        tel,
        email,
        mascota
      }

			await citasService.createCita(nuevaCita)

			setShowModal(false)
      resetForm()

      if (onSuccess) {
      	onSuccess("¡Tu cita fue enviada correctamente! Te contactaremos lo antes posible.")
      }

		} catch (error) {
			console.error(error)
			setErrorMessage("No pudimos enviar tu cita en este momento. Intenta de nuevo en otro momento.")
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className="fixed inset-0 bg-black/90 p-2 flex justify-center items-center z-50">
			<div className="flex flex-col justify-center bg-(--accent-color) w-xl text-xl rounded-xl shadow-xl p-2 md:px-10 md:py-5">
				<h3 className="text-2xl font-bold text-(--secundario-color) mb-3">
					Vista previa de la cita
				</h3>

				{errorMessage && (
					<div className="mb-4">
						<FormStatusMessage type="error" message={errorMessage} />
					</div>
				)}

				<p className="text-white capitalize">
					<strong>Servicio:</strong> {servicio || 'Sin seleccionar'}
				</p>
				
				<p className="text-white">
					<strong>Fecha:</strong> {fecha ? fecha.format("DD/MM/YYYY") : 'Sin seleccionar'}
				</p>

				<p className="text-white">
					<strong>Hora:</strong> {hora ? hora.format("HH:mm") : 'Sin seleccionar'}
				</p>

				<div className="mt-3">
					<p className="text-white capitalize">
						<strong>Nombre:</strong> {nombre || '—'}
					</p>
					<p className="text-white">
						<strong>Teléfono:</strong> {tel || '—'}
					</p>
					<p className="text-white">
						<strong>Email:</strong> {email || '—'}
					</p>
					<p className="text-white capitalize">
						<strong>Mascota:</strong> {mascota || '—'}
					</p>
				</div>

				<p className="text-md text-(--secundario-color) text-center italic mt-4">
          "<strong>Aviso:</strong> Nos comunicaremos contigo lo más pronto posible. En caso de no hacerlo antes de la hora reservada, la reprogramaremos contigo para una fecha ideal."
        </p>

				<div className="flex justify-center items-end gap-4 mt-7">
					<button 
						className="boton boton-secundario"
					 	onClick={() => setShowModal(false)}
					 	disabled={isSubmitting}
					>
						Cancelar
					</button>
					
					<button 
						className="boton boton-secundario"
					 	onClick={handleConfirm}
					 	disabled={isSubmitting}
					>
						{isSubmitting ? 'Enviando...' : 'Enviar'}
					</button>
				</div>
			</div>
		</div>
	)
}