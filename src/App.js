import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/AboutSection';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { AboutData } from './Data/CardData';
import { ContactsData, HeroData, ServiceData } from './Data/HeroData';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero {...HeroData} />
      <Cards {...AboutData} />
      <Hero {...ServiceData} />
      <About />
      <Hero {...ContactsData} />
      <Footer />
    </Router>
  );
}

export default App;
