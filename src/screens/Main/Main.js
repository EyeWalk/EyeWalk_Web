import * as React from 'react';
import { useEffect, useState } from 'react';
import { Navbar, Container, Row, Col, Nav, Image, NavbarBrand, NavLink, Button, Form, FormControl } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../img/logoEyeWalk.png';
import imageApp from '../../img/app-925.png';
import imageOculos from '../../img/oculos-925.png';
import arrow from '../../img/arrow_down.png';
import './main.css';
import ellen from '../../img/PictureE.png';
import gabriel from '../../img/PictureG.png';
import rafael from '../../img/PictureRa.png';
import renne from '../../img/PictureRe.png';
import PlanCard from './PlanCard'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import planosService from "../../services/planos"
import ScrollTop from '../../components/ScrollToTopButton';

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.bg-navBar');
    if (navbar) navbar.classList.toggle('bg-navBar-active', window.scrollY > 80);
});

const scrollTo = (elementId) => {
    window.scrollTo({
        top: document.getElementById(elementId).offsetTop,
        behavior: "smooth"
    })
}

const AppBar = () => {
    return (
        <Navbar bg="navBar" variant='dark' className='px-4 px-sm-4 px-md-5 py-2 py-sm-1 py-md-0 navbar' fixed='top' expand='lg' collapseOnSelect>
            
            <NavbarBrand className='fs-1 fw-bold'>
                <Image src={logo} fluid className='me-3 img img-fluid' width='80px'/>
                <span>EyeWalk</span>
            </NavbarBrand>
            
            <NavbarToggle/>

            <NavbarCollapse>
                <Nav className='my-4 ms-auto fs-6'>
                    <NavLink onClick={() => scrollTo('inicio')}>Início</NavLink>
                    <NavLink onClick={() => scrollTo('quemsomos')}>Quem Somos</NavLink>
                    <NavLink onClick={() => scrollTo('eyewalk')}>EyeWalk</NavLink>
                    <NavLink onClick={() => scrollTo('planos')}>Planos</NavLink>
                    <NavLink onClick={() => scrollTo('contato')}>Contato</NavLink>
                    <NavLink className='text-highLight' onClick={()=>window.open('/comprar?plano=premium')}>Quero experimentar</NavLink>
                </Nav>
            </NavbarCollapse>

        </Navbar>
    )
}

const Inicio = () => {
    return (
        <Container fluid id='inicio' className='d-flex flex-column justify-content-center align-items-center w-100 mh-100 hero' onClick={()=>scrollTo('quemsomos')}>
            <h3 className="hero-title fw-bold pt-5 pb-0 mb-2 mt-auto">EyeWalk...</h3>
            <h2 className="hero-text m-0 p-0">Uma visão além do alcance!</h2>
            <Image src={arrow} alt='Continue' className='slide-bottom p-5 mt-auto'/>
        </Container>
    )
}

const QuemSomos = () => {
    return (
        <Container id='quemsomos' className='py-5 d-flex flex-column justify-content-center mh-100'>
            <h1 className='display-6 fw-bold text-center mt-5'>Quem Somos</h1>
            <p className='mx-5 mb-2 fs-5 text-center'>A Insane Technology é uma startup brasileira, inicialmente criada para um projeto de conclusão de curso e que, atualmente, busca soluções tecnológicas que impactem a qualidade de vida das pessoas, como o EyeWalk que traz mais acessibilidade no dia a dia de pessoas com deficiência visual.</p>

            <Row className='w-100 text-center'>
                <Col xs='12' md='6' className='mt-5'>
                    <img src={ellen} className='img-fluid' width='120px'/>
                    <p>Ellen Gomes</p>
                    <p>Fisioterapeuta especialista em Neurologia Funcional e Analista de Sistemas, apaixonada por medicina, ciência e inovação, e sempre em busca de melhorar a qualidade de vida do maior número de pessoas possível, trazendo o lado humanizado da Medicina para a área de Tecnologia.</p>
                </Col>

                <Col xs='12' md='6' className='mt-5'>
                    <img src={gabriel} className='img-fluid' width='120px'/>
                    <p>Gabriel Almeida</p>
                    <p>Analista e Programador de Sistemas com experiência na indústria 4.0, desenvolvendo e integrando sistemas IOT. Sempre utilizando as melhores práticas de desenvolvimento de software e gerenciamento de equipes e focado em arquitetar soluções e resolver problemas.</p>
                </Col>
            </Row>
            <Row className='w-100 text-center'>
                <Col xs='12' md='6' className='mt-5'>
                    <img src={rafael} className='img-fluid' width='120px'/>
                    <p>Rafael Costa</p>
                    <p>Analista de Sistemas e Desenvolvedor BackEnd com experiência em logística, tendo trabalhado e interagindo em diversas áreas e participado de diferentes projetos, interessado em ciência e tecnologia, e com foco no trabalho em equipe e em se manter resiliente aos problemas.</p>
                </Col>

                <Col xs='12' md='6' className='mt-5'>
                    <img src={renne} className='img-fluid' width='120px'/>
                    <p>Renné Castrucci</p>
                    <p>Diretor de cena, fotógrafo, apaixonado por tecnologia e inovação. Traz seu olhar estético e apurado, decorrente de mais de 18 anos de trabalho na área da moda, e está sempre em busca de unir design e tecnologia em soluções que façam a diferença na vida do próximo.</p>
                </Col>
            </Row>
        </Container>
    )
}

const EyeWalk = () => {
    return (
        <Container fluid id='eyewalk' className='p-4 d-flex flex-column justify-content-center w-100 mh-100 explore'>
            <Col xs='12' sm='12' md='8' lg='6' xl='6' xxl='5' className='fs-3 ms-md-4'>
                <h2 className='display-3 fw-bold'>Explore o mundo</h2>
                <div className='line'/>
                <p>Seu guia para uma vida exploratória cheia de independência, segurança e descobertas deslumbrantes. Desperte novas sensações, desbrave culturas vibrantes e abra portas para experiências incríveis. Com o EyeWalk você poderá embarcar em uma jornada sem limites.</p>
            </Col>
        </Container>
    )
}

const Planos = () => {
    
    const [planos, setPlanos] = useState(null)

    useEffect(() => {
        planosService.getPlanos().then(plano => setPlanos(plano))
    }, [])

    return (
        <Container id='planos' className='p-md-0 p-lg-5 my-5 d-flex flex-column justify-content-center mh-100 align-items-center'>
            <h1 className='display-5 fw-bold text-center mt-5 pt-5 pt-sm-3 pt-lg-0'>Experimente o EyeWalk</h1>
            <h2 className='fw-bold text-center'>30 dias grátis</h2>
            <div className='text-center line'></div>
            <Row className='justify-content-between' id='listaPlanos'>
                <Col xs='12' sm='12' md='6' lg='5' className='fs-3 text-center mt-5'>
                    {
                    planos
                        ? <PlanCard title={planos[0].name} text={planos[0].description} price={planos[0].price} imgSrc={imageApp} imgAlt='Aplicação Web' btnText='Assinar' href='/comprar?plano=basico'></PlanCard>
                        : <PlanCard title='Plano Básico' text='' price='preço' imgSrc={imageApp} imgAlt='Aplicação Web' btnText='Assinar'></PlanCard>
                    }
                </Col>
                <Col xs='12' sm='12' md='6' lg='5' className='fs-3 text-center mt-5'>
                    {
                    planos
                        ? <PlanCard title={planos[1].name} text={planos[1].description} price={planos[1].price} imgSrc={imageOculos} imgAlt='Óculos EyeWalk' btnText='Assinar' href='/comprar?plano=premium'></PlanCard>
                        : <PlanCard title='Plano Premium' text='' price='preço' imgSrc={imageOculos} imgAlt='Óculos EyeWalk' btnText='Assinar'></PlanCard>
                    }
                </Col>
            </Row>
        </Container>
    )
}

const Footer = () => {
    return (
        <Container id='contato' fluid className='p-0 m-0 pt-3 bg-primary'>
            <p className='fw-bold ms-4'><u>Dúvidas?</u></p>

            <Row className='m-0 px-4'>
                <Col xs='12' sm='12' md='6' lg='4' xl='3' className='m-0 p-0'>
                    <Form.Group controlId='formName' className='mt-2'>
                        <FormControl name='name' type='text' placeholder='Nome'></FormControl>
                    </Form.Group>
                    <Form.Group controlId='formEmail' className='mt-4'>
                        <FormControl name='email' type='email' placeholder='Email'></FormControl>
                    </Form.Group>
                </Col>
                <Col xs='12' sm='12' md='6' lg='5' xl='4' xxl='3' className='m-0 p-0'>
                    <Form.Group controlId='formMessage' className='mt-4 mt-md-2 ms-md-4'>
                        <FormControl name='mensagem' as='textarea' rows='4' placeholder='Sua mensagem'></FormControl>
                    </Form.Group>
                </Col>
            </Row>

            <Button className='mx-4 my-4 bg-button'>Enviar</Button>

            <hr className='p-0 m-0'/>

            <div className='d-flex px-4 py-3 justify-content-center align-items-center'>
                <small>©2023 Insane Tecnology</small>
                <small className='ms-auto me-3'>Siga-nos</small>
                <MailOutlineIcon sx={{ color: "#FFBB3F", fontSize: 17, margin: "0 10px 0 0" }} />
                <InstagramIcon sx={{ color: "#FFBB3F", fontSize: 17, margin: "0 10px 0 0" }} />
                <LinkedInIcon sx={{ color: "#FFBB3F", fontSize: 17, margin: "0 0 0 0" }} />
            </div>
        </Container>
    )
}

const Main = () => {
    return (
        <>
        <AppBar/>
        <Inicio/>
        <QuemSomos/>
        <EyeWalk/>
        <Planos/>
        <ScrollTop/>
        <Footer/>
        </>
    )
}

export default Main