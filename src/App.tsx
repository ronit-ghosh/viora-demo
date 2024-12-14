import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Team from './pages/Team';
import Terms from './pages/Terms';
import { X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [close, setClose] = useState(false)
  function handleClose(){
    setClose(true)
  }
  return (
    <>
      <div className={`fixed z-50 text-white bottom-4 left-4 border border-[#7800ff] hover:border-transparent hover:bg-[#7800ff]/40 px-4 py-2 rounded-3xl ${close ? 'hidden' : 'block'}`}>Currently serving in <span className='font-bold'>Janakpuri</span> <span onClick={handleClose} className={"absolute -top-2 -right-2 x cursor-pointer"}><X size={16} /></span></div>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;