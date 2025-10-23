import elegirnos from '../../../data/elegir.json'

export const HomeElegir = () => {
	return (
		<>
		{elegirnos.map(({ titulo, texto }, index) => (
			<div key={index}
				className="flex gap-3 items-start justify-center"
			>
				<i className="bi bi-check mt-1 bg-secundario rounded-full px-1 text-[var(--accent-color)]"></i>
				<li className="w-full mb-5">
					<h5 className="text-xl lg:text-2xl mb-1">{titulo}</h5>
					<p className="text-md lg:text-xl">{texto}</p>
				</li>
			</div>
		))}
		</>
	)
} 