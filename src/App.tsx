import React from 'react';
import './App.scss';
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Pricing from "./components/Pricing/Pricing";
import Info from "./components/Info/Info";
import Review from "./components/Review/Review";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Pricing />
      <Info />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
