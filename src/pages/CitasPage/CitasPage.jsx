// React
import { useState } from "react";
// Componentes
import { 
	LabelForm, 
	SelectForm, 
	InputForm,
	FormStatusMessage
} from '../../components/ui'
//------------
import { FormPreview } from './FormPreview.jsx'
// Data
import listadoServicios from '/public/mock/servicios-page.json'
import listadoMascotas from '../../data/listadoMascotas.json'
// MATERIAL UI
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';

export const CitasPage = () => {

  const initialFormState = {
  	servicio: "",
  	fecha: dayjs(),
  	hora: dayjs(),
		nombre: "",
		tel: "",
		email: "",
		mascota: ""
  }

	const [form, setForm] = useState(initialFormState) /*Estado limpiado de formulario*/
  const [showModal, setShowModal] = useState(false) /*Estado activo de modal preview*/
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (e) => {
  	setSuccessMessage("")
		setErrorMessage("")
    e.preventDefault()

    // Validación básica antes de abrir modal
    if (
      !form.servicio ||
      !form.fecha ||
      !form.hora ||
      !form.nombre.trim() ||
      !form.tel.trim() ||
      !form.email.trim() ||
      !form.mascota.trim()
    ) {
      setSuccessMessage("")
			setErrorMessage("Por favor completa todos los campos antes de continuar.")
      return
    }

    setShowModal(true)
  }
  
  const handleChange = (e) => {
  	const { name, value } = e.target
		
		setForm({
			...form,
				[name]: value
		})
  	
  }

  const resetForm = () => {
    setForm(initialFormState)
  }

  const handleCitaSuccess = (message) => {
		setErrorMessage("")
  	setSuccessMessage(message)
  }

	return (
		<>
			{/* HERO SECTION */}
			<section className="h-screen w-full mb-45">
				<div className="hero-section hero-citas h-full w-full" />
				<div className="flex flex-col justify-center items-center gap-10 py-7 w-full bg-(--accent-color) border-y-5 border-t-(--secundario-color) border-b-black">
					<h1 className="text-2xl text-center font-bold lg:text-5xl text-white">
            Agenda una cita para tu amigo
          </h1>
				</div>
			</section>

			{/* FORM SECTION */}
			<section className="min-screen h-auto max-w-4xl px-2 sm:px-10 mx-auto my-30 md:my-40">
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<form 
            onSubmit={handleSubmit}
						className="flex flex-col gap-10"
					>
						{/* Servicio */}
						<div className="w-full">
							<LabelForm 
								nameFor="servicio" 
								pasoN={1} 
								label="Selecciona uno de nuestros servicios" 
              />
							<div className="px-2 sm:px-10 lg:px-15">
								<select 
									name="servicio"
									value={form.servicio}
									onChange={handleChange}
									className="formInput" 
									required
								>
									<option defaultValue="">Selecciona un servicio</option>
									{listadoServicios.map(({id, titulo, precio})=>(
										<option key={id} value={`${titulo} - $${precio}`} className="capitalize">
											{titulo} - ${precio}
										</option>
									))}
								</select>
							</div>
						</div>

						{/* Fecha y Hora */}
						<div className="w-auto">
							<LabelForm 
								nameFor="fechaAgenda" 
								pasoN={2} 
								label="Dinos cuando puedes visitarnos" 
							/>

							<div className="grid md:grid-cols-2">
								{/* Fecha */}
								<div>
				    			<DateCalendar 
					    			views={['day']} 
					    			value={form.fecha} 
					    			onChange={(newValue) => setForm({ ...form, fecha: newValue })} 
					    			minDate={dayjs()}
					    		/>
								</div>

								{/* Hora */}
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

						{/* Datos del dueño */}
						<div className="w-full">
							<LabelForm
								nameFor="datos"
								pasoN={3}
								label="Digita tus datos de contacto" 
              />
							<div className="px-2 sm:px-10 lg:px-15 space-y-4">
								<InputForm
									nameFor="nombre"
									value={form.nombre}
									handleChange={handleChange}	
									place="Nombre Completo"								
								/>

								<InputForm
									typeInput="tel"
									nameFor="tel"
									value={form.tel}
									handleChange={handleChange}	
									place="Télefono"								
								/>

								<InputForm 
									typeInput="email"
									nameFor="email"
									value={form.email}
									handleChange={handleChange}
									place="Correo electrónico" 
                />

								<SelectForm 
									nameFor="mascota" 
									value={form.mascota} 
									handleChange={handleChange}
									place="Selecciona una mascota"
									listado={listadoMascotas} 
								/>

								<p className="text-md text-gray-500 text-center italic">
                  "<strong>Advertencia:</strong> Para una mejor comunicación posterior a tu reservación de nuestros servicios, necesitamos que digites claramente todos los datos que solicitamos. ¡Gracias!"
                </p>
							</div>
						</div>

						{successMessage && (
							<FormStatusMessage type="success" message={successMessage} />
						)}

						{errorMessage && (
							<FormStatusMessage type="error" message={errorMessage} />
						)}

						<div>
							<LabelForm
									nameFor=""
									pasoN={4}
									label="Agenda con nosotros" 
	            />

							<button type="submit" className="boton boton-primario" arial-label="Agenda una cita con nosotros" >
	              Agendar
	            </button>
						</div>


						{showModal && (
							<FormPreview
								formData={form}
								setShowModal={setShowModal}
                resetForm={resetForm}
                onSuccess={handleCitaSuccess}
							/>
						)}
					</form>
				</LocalizationProvider>
			</section>
		</>
	)
}