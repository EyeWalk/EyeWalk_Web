import * as React from 'react';
import { Navbar, Container, Row, Col, Nav, Image, NavbarBrand, NavLink, Button } from 'react-bootstrap';
import logo from '../../img/logoEyeWalk.png';
import imageApp from '../../img/app-925.png';
import imageOculos from '../../img/oculos-925.png';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import ellen from '../../img/PictureE.png';
import gabriel from '../../img/PictureG.png';
import rafael from '../../img/PictureRa.png';
import renne from '../../img/PictureRe.png';
import PlanCard from './PlanCard'

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.bg-navBar');
    navbar.classList.toggle('bg-navBar-active', window.scrollY > 80);
});

const AppBar = () => {
    return (
        <Navbar bg="navBar" variant='dark' className='px-4 px-sm-4 px-md-5 py-2 py-sm-1 py-md-0 navbar' fixed='top' expand='lg' collapseOnSelect>
            
            <NavbarBrand className='fs-1 fw-bold'>
                <img src={logo} className='me-3 img img-fluid' width='80px'/>
                <span>EyeWalk</span>
            </NavbarBrand>
            
            <NavbarToggle/>

            <NavbarCollapse>
                <Nav className='my-4 ms-auto fs-6'>
                    <NavLink href='#inicio'>Início</NavLink>
                    <NavLink href='#quemsomos'>Quem Somos</NavLink>
                    <NavLink href='#eyewalk'>EyeWalk</NavLink>
                    <NavLink href='#planos'>Planos</NavLink>
                    <NavLink className='text-highLight' href='/comprar'>Quero experimentar</NavLink>
                </Nav>
            </NavbarCollapse>

        </Navbar>
    )
}

const Inicio = () => {
    return (
        <Container fluid id='inicio' className='d-flex flex-column justify-content-center align-items-center w-100 mh-100 hero'>
            <h3 className="hero-title fw-bold">EyeWalk...</h3>
            <h2 className="hero-text">Uma visão além do alcance!</h2>
            <a href="#quemsomos" className="hero-link">Mais informações</a>
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
            <a href="#buy" class="btn">Veja mais</a>
        </Container>
    )
}

const textBasico = 'Guia com navagação por voz, Reconhecimento de objetos, Agenda de contatos com função de emergência';
const textPremium = 'Guia com navagação por voz, Reconhecimento de objetos, Agenda de contatos com função de emergência, Dispositivo Eyewalk (incluso fones e carregador), Detecção de obstáculos em tempo real, Reconhecimento facial';

const Planos = () => {
    return (
        <Container id='planos' className='p-md-0 p-lg-5 my-5 d-flex flex-column justify-content-center mh-100'>
            <h1 className='display-6 fw-bold text-center mt-5 pt-3'>Nossos Planos</h1>
            <Row className='justify-content-between'>
                <Col xs='12' sm='12' md='6' lg='5' className='fs-3 text-center mt-5'>
                    <PlanCard title='Plano Básico' text={textBasico} price='R$ 75' imgSrc={imageApp} imgAlt='Aplicação Web' btnText='Assinar'></PlanCard>
                </Col>
                <Col xs='12' sm='12' md='6' lg='5' className='fs-3 text-center mt-5'>
                    <PlanCard title='Plano Premium' text={textPremium} price='R$ 150' imgSrc={imageOculos} imgAlt='Óculos EyeWalk' btnText='30 dias grátis'></PlanCard>
                </Col>
            </Row>
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
        </>
    )
}

export default Main