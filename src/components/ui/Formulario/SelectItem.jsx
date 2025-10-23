const listadoOptions = [
	{
		value: "consulta",
		nombre: "consulta veterinaria"
	},
	{
		value: "vacunacion",
		nombre: "vacunación"
	},
	{
		value: "estetica",
		nombre: "estética"
	},
	{
		value: "paseo",
		nombre: "paseo"
	},
	{
		value: "hospedaje",
		nombre: "hospedaje"
	}
]

export const SelectItem = () => {
	return (
		<>
		{listadoOptions.map(({value, nombre}, index) => (
			<option key={index} value={value} className="capitalize">{nombre}</option>
		))}
		</>
	)
}