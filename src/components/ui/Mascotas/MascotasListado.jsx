export const MascotasListado = ({data}) => {

	return (
			<div className="flex flex-col justify-center items-center gap-3 p-5 w-full h-auto lg:p-5 mascotas-content">
				<div className="w-50 h-50 lg:w-65 lg:h-65 marco-mascotas">
					<img src={data.image} alt={`Mascota ${data.nombre}`} loading="lazy" />
				</div>
				<div className="py-5 w-full bg-(--secundario-color) text-center text-gray-700 rounded-t-4xl rounded-b-xl shadow-md/30">
					<p className="text-xl md:text-3xl font-semibold capitalize">{data.nombre}</p>
				</div>
			</div>
	)
}