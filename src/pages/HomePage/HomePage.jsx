import { BotonComponent, HomeServices, HomeElegir, HomeTestimonio } from '../../components/ui/index.js'
import {testimonios} from '../../data/testimonios.js'

export const HomePage = () => {
	return (
		<>
			{/*HERO SECTION*/}
			<section className="hero-section mx-auto max-w-2xl text-center py-30 px-5 flex flex-col items-center justify-center lg:text-start lg:items-start lg:m-0 lg:px-15 lg:ml-35 lg:justify-end gap-7">
				<h2 className="text-5xl font-medium lg:text-7xl">Cuidamos a tu mascota con amor</h2>
				<h4 className="text-xl text-gray-700 lg:text-2xl">Servicios de salud, estética y bienestar para tu mascota</h4>
				<BotonComponent url="citas" texto="Agendar cita" classname="boton-primario" />
			</section>
			
			<div className="bg-accent py-8 px-2 w-full">
				<h4 className="max-w-5xl text-center text-2xl text-white font-bold md:text-3xl uppercase m-0 margin">No hay nada mejor que el amor de tus mascotas</h4>
			</div>

			{/*SERVICIOS SECTION*/}
			<section className="bg-secundario w-full h-auto">
				<div className="max-w-7xl pt-15 pb-25 px-2 sm:px-5 margin">
					<div className="service-header mb-10">
						<h3 className="font-medium text-4xl text-black text-center">Nuestros servicios</h3>
					</div>
					<div className="service-body px-5 md:px-0">
						<div className="w-auto grid sm:grid-cols-2 xl:grid-cols-4 gap-7">
							<HomeServices />
						</div>
					</div>
				</div>
			</section>

			<div className="bg-primario grid lg:grid-cols-2 py-20 xl:px-20">
				{/*ELEGIRNOS SECTION*/}
				<section className="w-full h-auto px-2 xl:px-15">
					<h3 className="font-medium text-4xl lg:text-5xl text-black text-center">¿Por qué elegirnos?</h3>

					<ul className="h-full px-3 mt-10 ml-2 xl:mt-20">
						<HomeElegir />
					</ul>
				</section>
				
				<div className="flex flex-col md:grid md:grid-cols-2 md:place-items-center lg:flex items-center justify-center gap-5">
					{/*TESTIMONIOS SECTION*/}
					<section className="my-2 mx-auto p-5 max-w-md">
						<div className="scroll-content gap-7 p-5 w-70 sm:w-95">
							{testimonios.map((item, index) => (
								<HomeTestimonio key={index} data={item} />
							))}
						</div>
					</section>

					{/*CTA SECTION*/}
					<section className="p-5 margin flex items-center justify-center">
						<div className="bg-secundario py-10 px-5 rounded-2xl md:px-10 lg:px-20">
							<h4 className="font-medium text-3xl text-black text-center mb-5">Agendar una cita</h4>
							<BotonComponent url="citas" texto="Agendar cita" classname="boton-primario" />
						</div>
					</section>
				</div>
			</div>
		</>
	)
}