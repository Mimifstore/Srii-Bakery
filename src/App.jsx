import React from 'react';
import './index.css';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import About from './component/About';
import Product from './component/Product';
import Testimonials from './component/Testimonials';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Navbar/>
      <About/>
      <Product/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default App;
