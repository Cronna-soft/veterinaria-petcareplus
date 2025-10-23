export const LabelForm = ({nameFor="", pasoN, label}) => {
	return (
		<label htmlFor={nameFor} className="block text-gray-700 text-xl mb-5 font-normal">
			<span className="mr-2 text-(--hover-accent-color) text-shadow-xs text-2xl font-medium">Paso {pasoN}.</span> {label}
		</label>
	)
}