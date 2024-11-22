import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-[#20094b]">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <ContactForm />
    </div>
  );
}

export default App;