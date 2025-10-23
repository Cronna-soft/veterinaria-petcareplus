const Copyright = () => {
	const redSocial = [
		{
			name: "Github",
			icon: "bi bi-github",
			url: "https://github.com/Cronna-soft/"
		},
		{
			name: "Instagram",
			icon: "bi bi-instagram",
			url: "https://www.instagram.com/mr.dannnor_"
		},
		{
			name: "Linkedin",
			icon: "bi bi-linkedin",
			url: "https://www.linkedin.com/in/dannnor"
		},
		{
			name: "WhatsApp",
			icon: "bi bi-whatsapp",
			url: "https://api.whatsapp.com/send?phone=573175403782"
		}
	]

	return (
		<>
		 {redSocial.map((media, index) => (
			<a 
				key={index}
				href={media.url}
				target="_blank"
				rel="noopener noreferrer"
				className="text-white flex gap-3 items-center justify-center text-xl hover:scale-105 transition-transform duration-500"
				title={media.name}
			>
				<i className={media.icon}></i>
			</a>
		 ))}
		</>
	)
}

export default Copyright