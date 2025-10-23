import { BotonSubmitComponent } from '../../components/ui'

export const FormPreview = ({servicio, fecha, hora, datos, setShowModal}) => {


  const handleConfirm = () => {
  	console.log("Enviando datos:", {
      servicio: servicio,
      fecha: fecha.format("DD/MM/YYYY"),
      hora: hora.format("HH:mm"),
      ...datos
    });

  	setShowModal(false)
  }

	return (
		<div className="fixed inset-0 bg-black/90 p-2 flex justify-center items-center z-50">
			<div className="flex flex-col justify-center bg-(--accent-color) w-xl text-xl rounded-xl shadow-xl p-2 md:px-10 md:py-5">
				<h3 className="text-2xl font-bold text-(--secundario-color) mb-3">
					Vista previa de la cita
				</h3>

				<p className="text-white capitalize">
					<strong>Servicio:</strong> {servicio || 'Sin selecionar'}
				</p>

				<p className="text-white">
					<strong>Fecha:</strong> {fecha ? fecha.format("DD/MM/YYYY") : 'Sin selecionar'}
				</p>

				<p className="text-white">
					<strong>Hora:</strong> {hora ? hora.format("HH:mm") : 'Sin selecionar'}
				</p>

				<div className="mt-3">
					<p className="text-white capitalize">
						<strong>Nombre:</strong> {datos?.nombre || '—'}
					</p>
					<p className="text-white">
						<strong>Teléfono:</strong> {datos?.tel || '—'}
					</p>
					<p className="text-white">
						<strong>Email:</strong> {datos?.email || '—'}
					</p>
					<p className="text-white capitalize">
						<strong>Mascota:</strong> {datos?.mascota || '—'}
					</p>
				</div>

				<p className="text-md text-(--secundario-color) text-center italic">"<strong>Aviso:</strong> Gracias por tu reservación, nos comunicaremos contigo lo más pronto posible, en caso de no comunicarnos antes de la reserva para hablar de ciertos detalles, lo aplazaremos para una fecha que sea perfecta."</p>

				<div className="flex justify-center items-end mt-7">
					<button 
						className="boton boton-secundario"
					 	onClick={() => setShowModal(false)} >
					Cancelar
					</button>
					
					<button 
						className="boton boton-secundario"
					 	onClick={handleConfirm} >
					Enviar
					</button>
				</div>
			</div>
		</div>
	)
}