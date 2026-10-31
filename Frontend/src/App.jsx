import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import About from './About/About';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
      <footer className="footer">
        <p>Built with React & Plain CSS</p>
      </footer>
    </div>
  );
}

export default App;