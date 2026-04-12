import { SelectItem } from '../../ui'

export const SelectForm = ({nameFor, value, handleChange, place, listado}) => {
	return (
		<select 
			name={nameFor}
			value={value}
			onChange={handleChange}
			className="formInput" 
			required
		>
			<option defaultValue="">{place}</option>
			<SelectItem items={listado} />
		</select>
	)
}