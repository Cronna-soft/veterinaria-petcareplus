import logoImage from '../../../assets/images/logo_landscape.webp'
// import logoImage from '../../../assets/images/logo_stacked.webp'

export const VeterinariosCarnet = ({data}) => {

	const {image, nombre, telefono, mail, redes} = data

	return (
		<div className="carnet-inner mx-5 w-3xs sm:w-[300px] shadow-xl/35">

			{/*VISTA FRONTAL*/}
			<div className="carnet-vista carnet-frontal">
				<img src={image} alt={`Doctor/a ${nombre}`} className="w-2/3 h-75 rounded-b-full border-5 border-t-0 border-(--secundario-color) object-cover" width="200" height="300" loading="lazy"/>
				<p className="text-sm font-medium">Veterinaria PetCarePlus</p>
				<p className="text-3xl font-semibold capitalize">Dr. {nombre}</p>
			</div>

			{/*VISTA TRASERA*/}
			<div className="carnet-vista carnet-trasera">
				<p className="text-sm font-medium">Veterinaria PetCarePlus</p>
				<p className="text-3xl font-semibold capitalize">Dr. {nombre}</p>
				<ul className="space-y-2 text-left text-xs">
					<li className="flex items-center gap-4">
						<i className="bi bi-telephone-fill"></i>
						{telefono}
					</li>
					<li className="flex items-center gap-4">
						<i className="bi bi-envelope-fill"></i>
						{mail}
					</li>
				</ul>
				<img src={logoImage} alt="Logotipo de la Veterinaria PetCarePlus" className="mt-10 w-50 h-auto"  loading="lazy" />
				<p className="flex items-center gap-2 text-[10px]">
					<span className="space-x-2">
						<i className="bi bi-facebook"/>
						<i className="bi bi-instagram"/>
					</span>
					petcare_veterinaria
				</p> 
			</div>

		</div>
	)
}