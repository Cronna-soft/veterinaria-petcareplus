export const MascotasClientes = ({data}) =>  {
	return (
		<div className="flex flex-col w-auto h-full max-w-85 rounded-md shadow-xl/35">
			<div className="flex justify-between items-center gap-3 py-3 px-2 w-full h-auto bg-(--accent-color) rounded-t-md">
				<h4 className="text-[22px] text-white font-semibold uppercase sm:text-[25.5px]">Veterinaria y refugio PetCare Plus</h4>
				<img src={data.image} alt="Imagen Sitio PetCare" className="w-25 h-auto object-cover" loading="lazy" />
			</div>
			<div className="flex flex-col justify-stretch items-center gap-3 py-4 w-full h-auto">
				<img src="https://placehold.jp/000/fff/750x750.png" alt="Imagen Macota Atendida" className="w-45 h-45 object-cover border-4 rounded-4xl border-(--hover-accent-color)" loading="lazy" />
				<h5 className="text-3xl text-center text-black font-bold uppercase">{data.nombre}</h5>
				<p className="text-xl text-center text-gray-900 font-[400] uppercase">{data.raza}</p>
			</div>
			<div className="flex justify-center items-center py-2 w-full h-auto bg-(--accent-color) text-center rounded-b-md">
				<h6 className="text-xl text-center text-white font-semibold uppercase">{data.especie}</h6>
			</div>
		</div>
	)
}