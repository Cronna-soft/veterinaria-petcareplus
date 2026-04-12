
export const SelectItem = ({items}) => {
	return (
		<>
		{items.map(({value, nombre}, index) => (
			<option key={index} value={value} className="capitalize">{nombre}</option>
		))}
		</>
	)
}