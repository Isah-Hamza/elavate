
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Empower from './components/Empower'
import Tailor from './components/Tailor'
import Ready from './components/Ready'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

function App() {

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
