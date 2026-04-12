import { Link } from 'react-router'

export const BotonComponent = ({url, texto, classname}) => {
	return (
		<Link to={`/${url}`}
			type="button" className={`boton ${classname}`}
		>
			{texto}
		</Link>
	)
}

export const BotonSubmitComponent = ({texto, classname}) => {
	return (
		<button type="submit" className={`boton ${classname}`}>{texto}</button>
	)
}