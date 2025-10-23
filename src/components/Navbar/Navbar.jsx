import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import NavDesktop from './NavDesktop.jsx'
import NavMobile from './NavMobile.jsx'
import MobileButton from './MobileButton.jsx'

const navLinks = [
	{ label: "Inicio", to: "/" },
	{ label: "Servicios", to: "/servicios" },
	{ label: "Agendar cita", to: "/citas" },
	{ label: "Mascotas", to: "/mascotas" },
	{ label: "Contacto", to: "/contacto" }
]

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => setMenuOpen(!menuOpen)
	const closeMenu = () => setMenuOpen(false)

	return (
	 	<nav className="fixed w-full bg-primario top-0 z-50">
	 		<div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-around text-center">
	 			{/*LOGO*/}
	 			<Link to="/">
	 				{/*<img className="nav-image" src="asd" alt="Imagen Nav" />*/}
	 				<h1 className="text-3xl font-semibold">PetCare+</h1>
	 			</Link>

	 			{/*MOBILE BOTON*/}
	 			<button 
	 				onClick={toggleMenu}
	 				className="md:hidden text-gray-700 focus:outline-none active:border-4 rounded-lg"
	 				aria-label="Abrir menú"
	 			>
	 				<MobileButton menuOpen={menuOpen} />
	 			</button>

	 			{/*DESKTOP MENÚ*/}
	 			<ul className="hidden md:flex items-center gap-8 lg:gap-12 text-gray-700 text-md font-semibold">
	 				<NavDesktop links={navLinks}  />
	 			</ul>

	 		</div>
	 		
	 		{/*MOBILE MENU*/}
	 		{menuOpen && (
	 			<ul className="md:hidden mt-4 px-4 pb-6 flex flex-col items-center gap-4 text-md font-semibold text-gray-700 transition-all duration-300">
	 				<NavMobile links={navLinks} onCloseMenu={closeMenu}  />	 				
	 			</ul>
	 		)}
	 		
	 	</nav>
	)
}

export default Navbar