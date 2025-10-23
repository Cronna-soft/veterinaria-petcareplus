import {InputForm, BotonSubmitComponent} from '../../components/ui'

export const ContactoPage = () => {

	const correo = "" //correo electronico

	return (
		<div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 justify-center items-center lg:grid-rows-1 my-10 mx-auto px-5 w-auto max-w-7xl h-full">
			<div className="grid grid-flow-col grid-rows-2">
				{/*FORMULARIO DE CONTACTO*/}
				<section className="">
					<h2 className="">¡Contáctanos sin ningún problema!</h2>

					<form action={`https://formsubmit.co/${correo}`} 
						className="" 
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
							placeholder="Haznos llegar tu mensaje" 
							required />

						<InputForm
							typeInput="hidden"
							nameFor="_captcha"
							value={false}
							place="Correo Electronico" />

						<BotonSubmitComponent 
							texto="Envianos tu mensaje"
							classname="" />
					</form>
					
					<p className=""><small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, ea quibusdam cupiditate eveniet ab ad mollitia aut, dicta aperiam asperiores?</small></p>
				</section>

				{/*REDES DEL SITIO*/}
				<section className="">
					<h2 className="">¡Visitanos en nuestras redes!</h2>

					<ul className="">
						<li className=""><i className="bi bi-instagram"></i> <p className="">Instagram</p></li>
						<li className=""><i className="bi bi-whatsapp"></i> <p className="">WhatsApp</p></li>
						<li className=""><i className="bi bi-facebook"></i> <p className="">Facebook</p></li>
					</ul>

					<p className=""><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, dolorem?</small></p>
				</section>
			</div>

			<div className="grid grid-flow-col grid-rows-2">
				{/*MAPA/LOCACIÓN DEL SITIO*/}
				<section className="">
					<h2 className="">¡Ya sabes en dónde encontrarnos!</h2>

					{/*MAPA*/}
				</section>

				{/*INFO. ATENCIÓN AL CLIENTE*/}
				<section className="">
					<ul className="">
						<li className=""><i className="bi bi-"></i> </li>
						<li className=""><i className="bi bi-"></i> </li>
						<li className=""><i className="bi bi-"></i> </li>
						<li className=""><i className="bi bi-"></i> </li>
					</ul>
				</section>
			</div>
		</div>
	)
}