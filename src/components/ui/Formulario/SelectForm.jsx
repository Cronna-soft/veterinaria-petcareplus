import { SelectItem } from '../../ui'

export const SelectForm = ({nameFor, value, handleChange}) => {
	return (
		<select 
			name={nameFor}
			value={value}
			onChange={handleChange}
			className="formInput" 
			required
		>
			<option defaultValue="">Selecciona un servicio</option>
			<SelectItem />
		</select>
	)
}