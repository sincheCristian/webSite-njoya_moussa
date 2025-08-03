
import NavBar from './components/navBar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Service from './pages/Service.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <div className='container'>
      <NavBar />
      <Home />
      <About />
      <Service />
      <Contact />
      <Footer />   
    </div>
  );
}

export default App;
