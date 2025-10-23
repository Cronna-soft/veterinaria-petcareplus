import {NavLink} from 'react-router'

const NavDesktop = ({links}) => {

	return (
	 <>
		{links.map(({to, label}) => (
			<li key={to}>
				<NavLink
					to={to}
					className={({ isActive }) => isActive ? "nav-active" : "nav-link"}
				>
				 {label}
				</NavLink>
			</li>
		))}
	 </>
	)
}

export default NavDesktop