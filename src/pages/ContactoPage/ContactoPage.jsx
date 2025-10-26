import {InputForm, BotonSubmitComponent} from '../../components/ui'

export const ContactoPage = () => {

	const correo = "" //correo electronico
	const mapa = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16257412.644924697!2d-85.00739660334729!3d5.842249700511246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e15a43aae1594a3%3A0x9a0d9a04eff2a340!2sColombia!5e0!3m2!1ses!2sco!4v1761260435090!5m2!1ses!2sco" //

	return (
		<div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 place-items-center justify-center gap-x-10 items-center lg:grid-rows-1 my-20 mx-auto px-5 w-auto max-w-6xl h-auto xl:gap-x-20">
			<div className="grid grid-flow-col grid-rows-2 place-items-center gap-y-5">
				{/*FORMULARIO DE CONTACTO*/}
				<section className="mx-auto max-w-lg h-auto">
					<h2 className="mt-3 mb-7 text-center text-3xl text-black font-bold text-shadow-lg/25 text-shadow-amber-700 capitalize md:text-4xl">¡Contáctanos sin ningún problema!</h2>

					<form action={`https://formsubmit.co/${correo}`} 
						className="space-y-4 mb-5" 
						method="POST"
					>
						<InputForm
							nameFor="nombre"
							place="Nombre Completo" />

						<InputForm
							typeInput="email"
							nameFor="email"
							place="Correo Electronico" />


						<textarea 
							name="mensaje" 
							className="formInput" 
							rows="3"
							placeholder="Haznos llegar tu mensaje" 
							required />

						<InputForm
							typeInput="hidden"
							nameFor="_captcha"
							value={false}
							place="Correo Electronico" />

						<BotonSubmitComponent 
							texto="Envianos tu mensaje"
							classname="bg-white text-(--hover-accent-color) border-2 border-(--accent-color) rounded-md cursor-pointer transition-all duration-500 hover:bg-(--accent-color) hover:text-white" />
					</form>
					
					<p className="text-center text-gray-400 font-medium italic"><small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, ea quibusdam cupiditate eveniet ab ad mollitia aut, dicta aperiam asperiores?</small></p>
				</section>

				{/*REDES DEL SITIO*/}
				<section className="mx-auto max-w-lg h-auto">
					<h2 className="mt-3 mb-7 text-center text-3xl text-black font-bold text-shadow-lg/25 text-shadow-amber-700 capitalize md:text-4xl">¡Visitanos en nuestras redes!</h2>

					<ul className="flex justify-evenly items-center gap-3 mb-5 text-center">
						<a 
							className="link-redes"
							href="#"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="bi bi-instagram"></i> <p>Instagram</p>
						</a>
						<a 
							className="link-redes"
							href="#"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="bi bi-whatsapp"></i> <p>WhatsApp</p>
						</a>
						<a 
							className="link-redes"
							href="#"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="bi bi-facebook"></i> <p>Facebook</p>
						</a>
					</ul>

					<p className="px-2 text-center text-gray-400 font-medium italic"><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, dolorem?</small></p>
				</section>
			</div>

			<div className="grid grid-flow-col grid-rows-2 place-items-center">
				{/*MAPA/LOCACIÓN DEL SITIO*/}
				<section className="mx-auto w-full h-auto">
					<h2 className="mt-3 mb-7 text-center text-3xl text-black font-bold text-shadow-lg/25 text-shadow-amber-700 capitalize md:text-4xl">¡Ya sabes en dónde encontrarnos!</h2>

					{/*MAPA*/}
					<iframe 
						src={mapa} 
						width="100%" 
						height="400" 
						style={{border: 0, borderRadius: "10px"}} 
						allowfullscreen="" 
						loading="lazy" 
						referrerpolicy="no-referrer-when-downgrade">
					</iframe>
				</section>

				{/*INFO. ATENCIÓN AL CLIENTE*/}
				<section className="mx-auto w-full h-auto">
					<ul className="flex flex-col items-center gap-1.5 text-center">
						<li className="text-gray-700 "><i className="bi bi-geo-alt-fill"></i> Calle 123 456-789, Colombia</li>
						<li className="text-gray-700 "><i className="bi bi-telephone-fill"></i> +12345 67890</li>
						<li className="text-gray-700 text-justify"><i className="bi bi-alarm"></i> <span className='font-semibold'>Lunes - Jueves:</span> 8:00 - 18:00</li>
						<li className="text-gray-700 text-justify"><i className="bi bi-alarm"></i> <span className='font-semibold'>Viernes - Sábado:</span> 8:00 - 16:00</li>
						<li className="text-center text-gray-400 font-medium italic"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio sint nobis reprehenderit fuga. Expedita, obcaecati.</p></li>
					</ul>
				</section>
			</div>
		</div>
	)
}