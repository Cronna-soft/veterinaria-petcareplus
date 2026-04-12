import { useState, useEffect } from 'react'
// ---
import mascotaImage from '../../assets/images/mascotas.webp'
// components
import { FiltradoServicios, Services, BotonComponent, VeterinariosCarnet } from '../../components/ui'
// data
import filtro from '../../data/servicios.json'
// services
import serviciosService from '../../services/serviciosService.js'

export const ServicioPage = () => {

	// Services
	const { getServicios, getVeterinarios } = serviciosService 

	// Estados de datos
	const [catalogo, setCatalogo]  = useState([])
	const [veterinarios, setVeterinarios] = useState([])

	// Estado de filtro
	const [active, setActive] = useState("");

	// Datos derivados
	const catalogoServicios = active === "" ? catalogo : catalogo.filter(item => item.categoria === active)

	useEffect(() => {
		const loadServiciosItems = async () => {
			try {
				const [serviciosData, veterinariosData] = await Promise.all([
					getServicios(),
					getVeterinarios()
				])

				setCatalogo(serviciosData)
				setVeterinarios(veterinariosData)
			} catch (error) { console.error('Error al cargar los datos de ServicePage:', error) }
		}

		loadServiciosItems()
	}, [])


	return (
		<>
			{/*HERO SECTION*/}
			<section className="hero-section hero-servicios h-screen md:h-[85vh] pt-25 pb-15 md:grid md:grid-cols-2 md:items-center">
				<div/>
				<div className="bg-(--secundario-color)/80 mx-auto rounded-3xl p-10 w-70 h-auto flex flex-col items-center text-center md:text-left md:justify-center md:w-85 md:h-85 gap-5 lg:w-115">
					<h1 className="text-5xl font-medium text-shadow-lg/75 text-shadow-white lg:text-7xl capitalize">Nuestros servicios</h1>
					<p className="text-xl text-shadow-lg/75 text-shadow-white lg:text-3xl">Todo lo que tu mascota necesita en un solo lugar.</p>
				</div>
			</section>
			
			{/*SERVICIOS SECTION*/}
			<section className=" h-auto max-w-5xl margin">
				{/*FILTRADO*/}
				<div className="flex flex-wrap justify-center items-center px-7 mt-10 gap-x-5 lg:gap-x-10 gap-y-5">
					<FiltradoServicios
						listado={filtro}
						active={active}
						setActive={setActive}
					/>
				</div>

				{/*SERVICIOS*/}
				<div className="grid md:grid-cols-2 place-items-center gap-10 px-3 md:px-7 my-10 lg:my-20">
					<Services listado={catalogoServicios} />
				</div>
			</section>

			{/*EQUIPO SECTION*/}
			<section className="my-20">
				<h2 className="mb-7 text-2xl font-bold text-center lg:text-4xl">Nuestro Equipo Médico</h2>	
					<div className="slider-content carousel-slider carnet-veterinario py-10 w-full perspective-[1000px]">
						{veterinarios.map(item => (
							<VeterinariosCarnet key={item.id} data={item}/>
						))}
					</div>
			</section>

			{/*CTA SECTION*/}
			<section className="p-5 max-w-6xl margin">
				<div className="grid md:grid-cols-2 lg:gap-10 my-10 h-full w-full bg-(--secundario-color) rounded-3xl">
					<img src={mascotaImage} alt="CTA Imagen Servicios" className="w-full h-80 object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-none" max-width="536" max-height="320" loading="lazy" />
					
					<div className="flex flex-col justify-center items-center md:items-start md:justify-center gap-7 px-5 py-10 h-full w-full text-center md:text-start">
						<h4 className="text-3xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
						<BotonComponent url="contacto" texto="Contáctanos" classname="boton-primario" />
					</div>
				</div>
			</section>
		</>
	)
}