
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Event from './components/Event';
import Chefs from './components/Chefs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <About/>
    <Menu/>
    <Event/>
    <Chefs/>
    <Gallery/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
