import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Team from './pages/Team';
import Terms from './pages/Terms';
import LocationList from './components/CollapsableLocation';

function App() {

  return (
    <>
      <LocationList />
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