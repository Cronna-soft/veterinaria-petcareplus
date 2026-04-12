import Copyright from './Copyright'
import FooterData from './FooterData'

const Footer = () => {

	return (
	 <div className="bg-[var(--accent-color)] px-3 py-6 pb-3 border-t-5 border-black text-center">
	 	<div className="flex flex-wrap grow justify-evenly items-center text-white space-y-6 p-4 gap-2">
	 		<FooterData/>
	 	</div>

	 	<div className="flex flex-wrap justify-center lg:justify-between text-center items-center text-white mt-4 p-2 space-y-5">
	 		{/*Derechos DEV*/}
	 		<div className="flex flex-start text-center items-center mb-0">
	 			<p className="font-semibold">Derechos Reservados &copy; {new Date().getFullYear()} | Proyecto: PetCare+</p>
	 		</div>


	 		{/*Derechos diseñado*/}
	 		<div className="flex flex-col mt-4 sm:flex-row items-center sm:flex-end md:gap-20">
		 		{/*Redes sociales DEV*/}
		 		<div className="flex gap-7">
		 			<Copyright />
		 		</div>

	 			<h6 className="font-bold">Desarrollado por Cronna Soft</h6>
	 		</div>
	 	</div>
	 </div>
	)
}

export default Footer