import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import './index.css';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import ScrollTop from '../../components/ScrollToTopButton';
import NavBar from '../../components/NavBar';
import PriceTable from '../../components/PriceTable';
import Footer from '../../components/Footer/Footer';
import Title from '../../components/Title';
import GroupDetails from '../../components/GroupDetails';
import Divider from '../../components/Divider';
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
                <div class="overlay skeleton">
                    <Title text="Uma visão além do alcance!" color="#FFBB3F" />
                </div>
            </section>
            <section ref={quemSomosSection} className="quem-somosSection dark">
                <Title text="Quem Somos" color="#fffff" fontSize="32px" />
                <Typography sx={{ margin: "20px 0", width: "80%" }}>A Insane Technology é uma startup brasileira, inicialmente criada para um projeto de conclusão de curso e que, atualmente, busca soluções tecnológicas que impactem a qualidade de vida das pessoas, como o EyeWalk que traz mais acessibilidade no dia a dia de pessoas com deficiência visual. </Typography>
                <Typography sx={{ color: "#FFBB3F", fontWeight: 600, fontSize: "20px", margin: "15px 0" }}>Nosso Time</Typography>
                <GroupDetails />
            </section>
            <section ref={eyewalkSection} className="eyewalkSection dark">
                <div class="overlay eyewalkMain">
                    <div className='title'>
                        <Title text="Explore o mundo" color="#fffff" fontSize="54px" />
                        <Divider color="#FFBB3F" height="3px" width="300px" borderRadius="5px" />
                    </div>
                </div>
            </section>
            <section ref={planosSection} className="planosSection light">
                <Title text="Nossos Planos" color="#192230" fontSize="32px" />
                <PriceTable />
            </section>
            <ScrollTop />
            <Footer />
        </div >
    );
}

export default Home

