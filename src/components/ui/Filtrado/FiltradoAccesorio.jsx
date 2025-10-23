export const FiltradoAccesorio = ({setEstado, estado, data}) => {
	return (
		<button 
			onClick={() => setEstado(data)}
			className={`p-3 w-full text-center transition-all duration-300 hover:rounded-t-md ${
				estado === data
				? "bg-(--accent-color) font-extrabold rounded-t-md uppercase"
				: " bg-(--secundario-color) font-semibold hover:bg-(--accent-color) hover:font-bold capitalize"
				}
			`}
		>
		 {data}
		</button>
	)
} 