import { useState } from 'react'
// components
import { FiltradoServicios, Services, BotonComponent } from '../../components/ui'
// data
import { serviciosHome as servicios, serviciosPage as catalogo } from '../../data/servicios.js'

export const ServicioPage = () => {
	const [active, setActive] = useState("");
	const service = active === "" ? catalogo : catalogo.filter(item => item.categoria === active)

	return (
		<>
			{/*HERO SECTION*/}
			<section className="h-screen md:h-[70vh] max-w-6xl pt-25 pb-15 md:grid md:grid-cols-2 margin">
				<div></div>
				<div className="w-full h-full flex flex-col items-start px-5 margin text-center md:text-left md:justify-center gap-5">
					<h2 className="text-5xl font-medium lg:text-7xl capitalize">Nuestros servicios</h2>
					<h4 className="text-xl lg:text-3xl">Todo lo que tu mascota necesita en un solo lugar.</h4>
				</div>
			</section>
			
			{/*SERVICIOS SECTION*/}
			<section className=" h-auto max-w-5xl margin">
				{/*FILTRADO*/}
				<div className="flex flex-wrap justify-center items-center px-7 mt-10 gap-x-5 lg:gap-x-10 gap-y-5">
					<FiltradoServicios
						listado={servicios}
						active={active}
						setActive={setActive}
					/>
				</div>

				{/*SERVICIOS*/}
				<div className="grid md:grid-cols-2 place-items-center gap-10 px-3 md:px-7 my-10 lg:my-20">
					<Services listado={service} />
				</div>
			</section>

			{/*EQUIPO SECTION*/}
			<section className="">
				{/*(PENDIENTE)*/}
			</section>

			{/*CTA SECTION*/}
			<section className="p-5 max-w-6xl margin">
				<div className="grid md:grid-cols-2 lg:gap-10 my-10 h-full w-full bg-(--secundario-color) rounded-3xl">
					<img src="https://placehold.jp/000/fff/500x500.png" alt="CTA Imagen Servicios" className="w-full h-80 object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-none" loading="lazy" />
					
					<div className="flex flex-col justify-center items-center md:items-start md:justify-center gap-7 px-5 py-10 h-full w-full text-center md:text-start">
						<h4 className="text-3xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
						<BotonComponent url="contacto" texto="Contáctanos" classname="boton-primario" />
					</div>
				</div>
			</section>
		</>
	)
}