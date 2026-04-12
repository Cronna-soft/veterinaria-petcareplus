export const MascotasAccesorios = ({data}) => {
	return (
		<div className="flex flex-col justify-center items-center w-auto max-w-60 text-center">
			<img src={data.image} alt={data.titulo} className="mb-3 w-40 h-full object-cover" width="160" height="160" loading="lazy" />
			<h5 className="mb-1 text-xl text-black font-bold capitalize">{data.titulo}</h5>
			<p className="text-md text-(--primario-color) italic">{data.descripcion}</p>
		</div>
	)
}