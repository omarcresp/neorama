import React from "react";

import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Portfolio from './components/Portfolio.tsx';
import ContactForm from './components/ContactForm.tsx';
import WeAre from "./components/WeAre.tsx";

function App() {
  return (
    <div className="min-h-screen bg-[#20094b]">
      <Navbar />
      <Hero />
      <WeAre />
      <Portfolio />
      <Services />
      <ContactForm />
    </div>
  );
}

export default App;
