import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import './index.css';
import Toolbar from '@mui/material/Toolbar';
import ScrollTop from '../../components/ScrollToTopButton';
import NavBar from '../../components/NavBar';
import PriceTable from '../../components/PriceTable';
import Footer from '../../components/Footer/Footer';
import Title from '../../components/Title/Title';
import { Link } from "react-router-dom"
import planosService from "../../services/planos"

const Home = () => {
    const inicioSection = useRef(null);
    const quemSomosSection = useRef(null);
    const eyewalkSection = useRef(null);
    const planosSection = useRef(null);

    const [planos, setPlanos] = useState(null)

    useEffect(() => {
        planosService.getPlanos().then(plano => setPlanos(plano))
    }, [])

    console.log(planos);

    const scrollTo = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    return (
        <div className="App">
            <NavBar>
                <button className='navLink' onClick={() => scrollTo(inicioSection)}>Início</button>
                <button className='navLink' onClick={() => scrollTo(quemSomosSection)}>Quem Somos</button>
                <button className='navLink' onClick={() => scrollTo(planosSection)}>Planos</button>
                <button className='navLink' onClick={() => scrollTo(eyewalkSection)}>EyeWalk</button>
                <Link className='buttonComprar' to="/comprar" style={{ fontSize: "0.9rem", padding: "1px 6px", fontWeight: 600, color: "#FFBB3F", textDecoration: "none" }}>Quero Experimentar</Link>
            </NavBar>
            <Toolbar id="back-to-top-anchor" />
            <section ref={inicioSection} className="inicioSection dark">
                <Title text="Uma visão além do alcance!" color="#FFBB3F" />
            </section>
            <section ref={quemSomosSection} className="quem-somosSection dark">
                <Title text="Quem Somos" color="#fffff" />
            </section>
            <section ref={planosSection} className="planosSection light">
                <Title text="Nossos Planos" color="#192230" />
                <PriceTable />
            </section>
            <section ref={eyewalkSection} className="eyewalkSection dark">
                <Title text="Explore o mundo" color="#fffff" />
            </section>
            <ScrollTop />
            <Footer />
        </div >
    );
}

export default Home

