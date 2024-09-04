import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import './styles/App.css';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
