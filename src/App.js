import { useRef } from 'react';
import './App.css';
import ScrollTop from './components/ScrollToTopButton';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  const inicio = useRef(null);
  const quemSomos = useRef(null);
  const eyewalk = useRef(null);
  const planos = useRef(null);

  const scrollTo = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <div className="App">
      <NavBar>
        <button className='navLink' onClick={() => scrollTo(inicio)}>Início</button>
        <button className='navLink' onClick={() => scrollTo(quemSomos)}>Quem Somos</button>
        <button className='navLink' onClick={() => scrollTo(planos)}>Planos</button>
        <button className='navLink' onClick={() => scrollTo(eyewalk)}>EyeWalk</button>
        <button className='navLink' style={{ color: "#FFBB3F", fontWeight: "600" }} >Quero Experimentar</button>
      </NavBar>
      <Toolbar id="back-to-top-anchor" />
      <section ref={inicio} className="inicioSection light">
        Inicio
      </section>
      <section ref={quemSomos} className="quem-somosSection dark">
        Quem somos
      </section>
      <section ref={planos} className="planosSection light">
        Planos
      </section>
      <section ref={eyewalk} className="eyewalkSection dark">
        EyeWalk
      </section>
      <ScrollTop />
      <Footer />
    </div>
  );
}

export default App;
