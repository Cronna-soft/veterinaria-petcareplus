export const MascotasAccesorios = ({data}) => {
	return (
		<div className="flex flex-col justify-center items-center w-auto max-w-55 text-center">
			<img src={data.image} alt={data.titulo} className="mb-3 w-40 h-full object-cover" loading="lazy" />
			<h5 className="mb-1 text-2xl text-black font-bold capitalize">{data.titulo}</h5>
			<p className="text-lg text-(--primario-color) italic">{data.descripcion}</p>
		</div>
	)
}