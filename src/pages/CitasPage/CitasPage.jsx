// React
import { useState } from "react";
// Components
import { 
	LabelForm, 
	SelectForm, 
	BotonSubmitComponent,
	InputForm } from '../../components/ui'
//------------
import { FormPreview } from './FormPreview.jsx'
// MATERIAL UI
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';

export const CitasPage = () => {

  const [form, setForm] = useState({
  	servicio: "",
  	fecha: dayjs(),
  	hora: dayjs(),
  	datos: {
  		nombre: "",
  		tel: "",
  		email: "",
  		mascota: ""
  	}
  })

  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowModal(true)
  };
  
  const handleChange = (e) => {
  	const { name, value } = e.target

  	if (["nombre", "tel", "email", "mascota"].includes(name)) {
  		setForm({
  			...form,
  			datos: {
  				...form.datos,
  				[name]: value
  			}
  		})
  	} else {
  		setForm({
  			...form,
  			[name]: value
  		})
  	}
  }

	return (
		<>
			{/*HERO SECTION*/}
			<section className="h-screen w-full">
				<div className="flex flex-col justify-center items-center gap-10 max-w-6xl">
					<h2 className="text-2xl text-center font-bold lg:text-6xl">Agenda una cita para tu amigo</h2>
				</div>
			</section>

			{/*FORM SECTION*/}
			<section className="min-screen h-auto max-w-4xl px-2 sm:px-10 mx-auto my-10">
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<form onSubmit={handleSubmit}
						className="flex flex-col gap-10"
					>
						{/*Servicio*/}
						<div className="w-full">
							<LabelForm 
								nameFor="servicio" 
								pasoN={1} 
								label="Selecciona uno de nuestros servicios" />
							<div className="px-2 sm:px-10 lg:px-15">
								<SelectForm 
									nameFor="servicio" 
									value={form.servicio} 
									handleChange={handleChange} 
								/>
							</div>
						</div>

						{/*Fecha y Hora (Biblioteca MUI X)*/}
						<div className="w-auto">
							<LabelForm 
								nameFor="fechaAgenda" 
								pasoN={2} 
								label="Dinos cuando puedes visitarnos" 
							/>

							<div className="grid md:grid-cols-2">
								{/*Fecha: Calendario*/}
								<div>
				    			<DateCalendar 
					    			views={['day']} 
					    			value={form.fecha} 
					    			onChange={(newValue) => setForm({ ...form, fecha: newValue })} 
					    			minDate={dayjs()}
					    		/>
								</div>

								{/*Hora: Reloj*/}
								<div className="digitalclock">
									<DigitalClock 
					    			views={['hours']} 
										value={form.hora}
										onChange={(newValue) => setForm({ ...form, hora: newValue })}
										minTime={dayjs().hour(7).minute(59)}
										maxTime={dayjs().hour(18).minute(0)}
									/>
								</div>
							</div>
						</div>

						{/*Datos del dueño*/}
						<div className="w-full">
							<LabelForm
								nameFor="datos"
								pasoN={3}
								label="Digita tus datos de contacto" />
							<div className="px-2 sm:px-10 lg:px-15 space-y-4">
								<InputForm
									nameFor="nombre"
									value={form.datos.nombre}
									handleChange={handleChange}	
									place="Nombre Completo"								
								/>

								<InputForm
									typeInput="tel"
									nameFor="tel"
									value={form.datos.tel}
									handleChange={handleChange}	
									place="Télefono"								
								/>

								<InputForm 
									typeInput="email"
									nameFor="email"
									value={form.datos.email}
									handleChange={handleChange}
									place="Correo electrónico" />

								<InputForm 
									nameFor="mascota"
									value={form.datos.mascota}
									handleChange={handleChange}
									place="Perro, gato, etc." />

								<p className="text-md text-gray-500 text-center italic">"<strong>Advertencia:</strong> Para una mejor comunicación posterior a tu reservación de nuestros servicios, necesitamos que digites claramente todos los datos que solicitamos. ¡Gracias!"</p>
							</div>
						</div>

						<button className="boton boton-primario">Agendar</button>

						{ showModal && (
							
							<FormPreview
								servicio={form.servicio}
								fecha={form.fecha}
								hora={form.hora} 
								datos={form.datos} 
								setShowModal={setShowModal} />
						
						)}

					</form>
				</LocalizationProvider>
			</section>
		</>
	)
}