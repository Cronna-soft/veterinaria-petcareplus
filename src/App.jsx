import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { HomePage, ServicioPage, CitasPage, MascotasPage, ContactoPage } from './pages'

function App() {

  return (
    <Router>
      
        <header className="relative bg-primario">
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="/servicios" element={ <ServicioPage/> } />
            <Route path="/citas" element={ <CitasPage/> } />
            <Route path="/mascotas" element={ <MascotasPage/> } />
            <Route path="/contacto" element={ <ContactoPage/> } />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>

    </Router>
  )
}

export default App
