import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Products from './components/Products.jsx';
import About from './components/About.jsx';
import Differentials from './components/Differentials.jsx';
import Process from './components/Process.jsx';
import Trust from './components/Trust.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import WhatsappFloat from './components/WhatsappFloat.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Differentials />
        <Process />
        <Trust />
        <CTA />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
