import logoImage from '../../../assets/images/logo_stacked.webp'

export const MascotasClientes = ({data}) =>  {
	return (
		<div className="flex flex-col w-auto h-full max-w-75 rounded-md shadow-xl/35">
			<div className="flex justify-between items-center py-3 px-2 w-full h-auto bg-(--accent-color) rounded-t-md">
				<h4 className="text-lg text-white font-semibold uppercase">Refugio y Veterinaria PetCare Plus</h4>
				<img src={logoImage} alt="Imagen Sitio PetCare" className="w-17.5 h-auto object-cover" width="70" height="70" loading="lazy" />
			</div>
			<div className="flex flex-col justify-stretch items-center gap-3 py-4 w-full h-auto">
				<img src={data.image} alt="Imagen Macota Atendida" className="w-43 h-43 object-cover border-4 rounded-4xl border-(--hover-accent-color)" width="175" height="175" loading="lazy" />
				<h5 className="text-xl text-center text-black font-bold uppercase">{data.nombre}</h5>
				<p className="text-base text-center text-gray-900 font-[400] uppercase">{data.raza}</p>
			</div>
			<div className="flex justify-center items-center py-2 w-full h-auto bg-(--accent-color) text-center rounded-b-md">
				<h6 className="text-lg text-center text-white font-semibold uppercase">{data.especie}</h6>
			</div>
		</div>
	)
}