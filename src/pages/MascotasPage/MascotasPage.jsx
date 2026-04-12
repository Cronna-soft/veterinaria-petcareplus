import {useState, useEffect} from 'react'
// -----
import mascotaCTAImage from '../../assets/images/mascota-cta.webp'
import { BotonComponent, 
		FiltradoMascotas, 
		FiltradoAccesorio, 
		MascotasListado, 
		MascotasClientes, 
		MascotasAccesorios } from '../../components/ui'
// Services
import mascotasService from '../../services/mascotasService.js'

export const MascotasPage = () => {

	// Services
	const { getMascotas, getAccesorios, getClientes } = mascotasService

	// Estados de datos
	const [mascotas, setMascotas] = useState([])
	const [accesorios, setAccesorios] = useState([])
	const [clientes, setClientes] = useState([])

	// Estados de filtros
	const [activo, setActivo] = useState('')
	const [tabs, setTabs] = useState('')

	// Datos derivados
	const mascotaFiltrado = mascotas.find((m) => m.tipo_mascota === activo)
	const categoriasTabs = [...new Set(accesorios.map((item) => item.categoria))]
	const accesoriosFiltrados = accesorios.filter((item) => item.categoria === tabs)


	useEffect(() => {
		const loadMascotasItems = async () => {
			try {
				const [mascotasData, accesoriosData, clientesData] = await Promise.all([
					getMascotas(),
					getAccesorios(),
					getClientes()
				]);

				setMascotas(mascotasData)
				setAccesorios(accesoriosData)
				setClientes(clientesData)

				// Inicializar filtros una vez  lleguen los datos
				if (mascotasData.length > 0) setActivo(mascotasData[0].tipo_mascota)

				if (accesoriosData.length > 0) {
					const primeraCategoria = accesoriosData[0].categoria
					setTabs(primeraCategoria)
				}
			} catch (error) {
				console.error('Error al cargar los datos en MascotaPage', error)
			}
		}

		loadMascotasItems()
	}, [])

	return (
		<div className="min-h-screen h-auto py-10">
			{/*Catalogo de mascotas*/}
			<section className="my-10 mx-auto px-7 max-w-5xl">

				<div className="flex flex-wrap justify-center gap-7 px-5 mb-5 text-center">
					{mascotas.map(item => (
						<FiltradoMascotas 
							key={item.id} 
							setEstado={setActivo}
							estado={activo}
							data={item.tipo_mascota} />
					))}
				</div>
				<div className="grid grid-flow-col grid-rows-2 overflow-x-auto justify-evenly items-stretch gap-5 md:grid-rows-1 md:grid-cols-2 md:grid-flow-row md:justify-center md:overflow-x-hidden lg:grid-cols-3 lg:gap-7 lg:gap-x-15">
					{mascotaFiltrado?.mascota?.map((item) => (
						<MascotasListado key={item.id} data={item} />
					))}
				</div>
			</section>

			{/*Mascotas atendidas*/}
			<section className="my-20 md:px-5 lg:px-20">
				<h2 className="mb-7 text-3xl font-bold text-center lg:text-5xl">Nuestros peludos clientes</h2>	
				<div className="slider-content carousel-slider gap-10 my-5 mx-auto py-10 px-5 h-auto">
					{clientes.map((item) => (
						<MascotasClientes key={item.id} data={item} />
					))}
				</div>	
			</section>

			{/*COMIDA, JUGUETES, ACCESORIOS PARA GATOS, PERROS, OTROS (NIÑOS Y ADULTOS)*/}
			<section className="flex flex-col items-center justify-center mb-15 mx-auto py-10 px-2 w-auto max-w-4xl sm:px-15">
					<div className="flex justify-center items-center w-full bg-(--secundario-color) rounded-t-md">
						{categoriasTabs.map((item, index) => (
							<FiltradoAccesorio
								key={index} 
								setEstado={setTabs}
								estado={tabs}
								data={item} />
						))}
					</div>

					<div className="slider-content carousel-slider gap-5 sm:gap-2 py-10 px-5 w-full bg-(--accent-color) rounded-b-md">
						{accesoriosFiltrados.map((item) => (
							<MascotasAccesorios key={item.id} data={item} />
						))}
					</div>
			</section>

			{/*CTA: Servicios*/}
			<section className="w-full h-auto bg-(--hover-accent-color)">
				<div className="flex justify-center lg:justify-between mx-auto h-full w-full max-w-2xl lg:max-w-3xl">
					<img src={mascotaCTAImage} alt="Imagen CTA Macotas" className="hidden lg:block w-50 h-75 object-cover" width="200" height="300" loading="lazy" />

					<div className="flex flex-col justify-center text-center gap-5 py-7 w-auto h-auto text-(--primario-color) lg:p-0 lg:text-right">
						<h3 className="text-5xl font-bold">Conoce nuestros servicios</h3>
						<p className="text-2xl font-semibold">Solo lo mejor para tu mejor amigo</p>
						
						<BotonComponent url="servicios" classname="border-3 rounded-lg cursor-pointer transition hover:bg-(--primario-color) hover:text-(--hover-accent-color)" texto="Nuestros servicios" />
					</div>
				</div>
			</section>
		</div>
	)
}