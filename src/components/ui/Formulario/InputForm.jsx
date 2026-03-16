export const InputForm = ({typeInput = "text", nameFor = "", value, handleChange, place = ""}) => {
	return (
		<>
		<input 
			type={typeInput} 
			name={nameFor} 
			value={value} 
			onChange={handleChange}
			className="formInput" 
			placeholder={place}
			required />
		</>
	)
}