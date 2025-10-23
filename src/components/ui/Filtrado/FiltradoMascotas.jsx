export const FiltradoMascotas = ({setEstado, estado, data}) => {

	return (
		<button 
			onClick={() => setEstado(data)}
			className={`py-3 px-15 w-auto rounded-md text-2xl capitalize transition-all duration-300 
			${
              estado === data
                ? "bg-(--accent-color) text-white font-extrabold shadow-md"
                : "bg-(--secundario-color) font-semibold hover:bg-(--accent-color) text-(--hover-accent-color) hover:font-bold"
            }`}
        >
			{data}
		</button>		
	)
}