
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Empower from './components/Empower'
import Tailor from './components/Tailor'
import Ready from './components/Ready'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {


  useEffect(() => {
    AOS.init({
      once:false,
    });
    AOS.refresh();
  }, []);

  return (
    <div> 
      <div className="main-container h-screen bg-black/70">
        <Header />
        <Hero />
        <Empower />
        <Tailor />
        <Ready />
        <Feedback />
        <Footer />
      </div>
    </div>
  )
}

export default App
