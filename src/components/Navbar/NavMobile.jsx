import {NavLink} from 'react-router'

const NavDesktop = ({links, onCloseMenu}) => {

	return (
	 <>
		{links.map(({to, label}) => (
			<li key={to}>
				<NavLink
					to={to}
					onClick={onCloseMenu}
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