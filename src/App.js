import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Count from './Components/Count';
import Footer from './Components/Footer';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Services from './Components/Services';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Count />
      <Services />
      <Contact/>
      <Footer/>
    </div>
  );
}


export default App;
