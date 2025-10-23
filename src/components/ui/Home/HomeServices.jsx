import { serviciosHome as servicios } from '../../../data/servicios.js'

export const HomeServices = () => {
	return (
		<>
		{servicios.map((ser, index) => (
			<div key={index} className="bg-primario w-66 h-80 px-3 rounded-lg shadow-md margin">
				<div className="h-full w-full flex flex-col items-center justify-center text-center gap-5">
					<i className={`text-7xl bi bi-${ser.icon} text-[var(--accent-color)] text-shadow-sm`}></i>
					<h4 className="text-3xl font-semibold">{ser.nombre}</h4>
					<p className="text-xl text-gray-700">{ser.descripcion}</p>
				</div>
			</div>
		))}
		</>
	)
}