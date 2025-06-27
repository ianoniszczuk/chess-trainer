import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Play from './pages/Play'
import Analysis from './pages/Analysis'
import NavBar from './components/layout/Navbar'

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Navbar */}
      <NavBar />
      {/* Contenido principal */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/analysis" element={<Analysis />} />
        {/* Ruta 404 */}
        <Route path="*" element={<div className="text-center p-8">Página no encontrada</div>} />
      </Routes>
    </div>
  )
}

export default App