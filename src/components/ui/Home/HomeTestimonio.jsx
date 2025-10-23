export const HomeTestimonio = ({data}) => {
	return (
		<div className="bg-white p-10 rounded-lg w-full">
			<img src={data.img} alt={data.nombre} className="w-20 h-20 mb-7 rounded-full object-cover" loading="lazy" />
			<p className="mb-3 text-lg"><q>{data.texto}</q></p>
			<span className="block font-semibold capitalize">— {data.nombre}</span>
		</div>
	)
}