import { Link } from 'react-router'
import { BotonComponent } from '../ui'

const FooterData = () => {

	return (
		<div className="flex flex-col justify-center items-center gap-y-10 gap-x-5 mx-auto text-md xl:text-lg md:grid md:grid-cols-2 lg:grid-cols-3 lg:items-start">
			{/*COLUMNA 1 - Marca*/}
			<div className="w-full space-y-2">
				<h5 className="font-semibold text-xl">
					Veterinaria PetCare
					<span className="font-extrabold">Plus</span>
				</h5>
				<p className="italic">Cuidado veterinario integral enfocada en el bienestar de cada mascota.</p>
			</div>

			{/*COLUMNA 2 - Contacto*/}
			<div className="flex justify-center w-full">
				<ul className="text-left">
					<li>
						Calle 123 456-789,
						<span className="ml-2 font-bold">
							Colombia
						</span>
					</li>
					<li>
						+57 300 123 4567
					</li>
					<li>
						contacto@veterinariapetcare.com
					</li>
					<li>
						Lun - Sáb: 8:00 - 16:00
					</li>
				</ul>
			</div>

			{/*COLUMNA 3 - Redes/CTA*/}
			<div className="w-full space-y-3">
				<ul className="flex justify-center gap-4">
					<li>
						<a href="#">
							<i className="bi bi-instagram"/>
						</a>
					</li>
					<li>
						<a href="#">
							<i className="bi bi-facebook"/>
						</a>
					</li>
					<li>
						<a href="#">
							<i className="bi bi-whatsapp"/>
						</a>
					</li>
				</ul>
				<div className="space-y-1.5">
					<p className="font-semibold text-md">¿Listo para cuidar a tu mascota?</p>
					<BotonComponent
						url="citas"
						texto="Agendar una cita"
						classname="w-60 bg-(--primario-color) text-(--accent-color) rounded-lg
						hover:bg-(--hover-accent-color) hover:text-(--primario-color) hover:outline-2 outline-(--secundario-color)
						"
					/>
				</div>
			</div>
        </div>
	)
}

export default FooterData