
export const FiltradoServicios = ({listado, active, setActive}) => {
	return (
		<>
		{listado.map((item, index) => (
			<span 
				key={index} 
				onClick={() => setActive(item.nombre)}
				className="target-filtro bg-(--secundario-color) h-15 flex items-center px-7 py-2 md:px-7 md:py-3 text-lg md:text-2xl font-semibold rounded-xl hover:bg-[#febb81] capitalize transition-transform duration-300 cursor-pointer">
				<i className={`bi bi-${item.icon} text-xl md:text-3xl text-[var(--hover-accent-color)] mr-2`}></i>
				{item.nombre}
			</span>
		))}
		</>
	)
}