export const Services = ({listado}) => {

	return (
		<>
		{listado.map(({titulo, icon, descripcion, precio}, index) => (
			<div key={index} className="bg-white p-5 lg:p-7 w-full rounded-lg shadow-sm">
				<div className="w-full flex justify-between">
					<h3 className="flex-shrink flex items-center font-semibold text-xl lg:text-3xl">
						{titulo}
					</h3>
					<span className="bg-[#febb81] rounded-full p-2">
						<i className={`bi bi-${icon} flex items-center justify-center text-2xl text-(--hover-accent-color) text-center`}></i>
					</span>
				</div>

				<div className="mt-2 w-full">
					<p className="text-md lg:text-xl mb-5">{descripcion}</p>
					<p className="text-md lg:text-xl font-medium">Desde ${precio.toLocaleString('es-CO')}</p>
				</div>
			</div>
		))}
		</>
	)
}