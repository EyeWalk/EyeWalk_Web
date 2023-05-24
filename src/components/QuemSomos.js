import * as React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ellen from '../images/PictureE.png';
import gabriel from '../images/PictureG.png';
import rafael from '../images/PictureRa.png';
import renne from '../images/PictureRe.png';


const QuemSomos = () => {
    return (
        <Container id='quemsomos' className='py-5 d-flex flex-column justify-content-center mh-100'>
            <h1 className='display-6 fw-bold text-center mt-5'>Quem Somos</h1>
            <p className='mx-5 mb-2 fs-5 text-center'>A Insane Technology é uma startup brasileira, inicialmente criada para um projeto de conclusão de curso e que, atualmente, busca soluções tecnológicas que impactem a qualidade de vida das pessoas, como o EyeWalk que traz mais acessibilidade no dia a dia de pessoas com deficiência visual.</p>

            <Row className='w-100 text-center'>
                <Col xs='12' md='6' className='mt-5'>
                    <Image src={ellen} fluid width='120px'/>
                    <p>Ellen Gomes</p>
                    <p>Fisioterapeuta especialista em Neurologia Funcional e Analista de Sistemas, apaixonada por medicina, ciência e inovação, e sempre em busca de melhorar a qualidade de vida do maior número de pessoas possível, trazendo o lado humanizado da Medicina para a área de Tecnologia.</p>
                </Col>

                <Col xs='12' md='6' className='mt-5'>
                    <Image src={gabriel} fluid width='120px'/>
                    <p>Gabriel Almeida</p>
                    <p>Analista e Programador de Sistemas com experiência na indústria 4.0, desenvolvendo e integrando sistemas IOT. Sempre utilizando as melhores práticas de desenvolvimento de software e gerenciamento de equipes e focado em arquitetar soluções e resolver problemas.</p>
                </Col>
            </Row>
            <Row className='w-100 text-center'>
                <Col xs='12' md='6' className='mt-5'>
                    <Image src={rafael} fluid width='120px'/>
                    <p>Rafael Costa</p>
                    <p>Analista de Sistemas e Desenvolvedor BackEnd com experiência em logística, tendo trabalhado e interagindo em diversas áreas e participado de diferentes projetos, interessado em ciência e tecnologia, e com foco no trabalho em equipe e em se manter resiliente aos problemas.</p>
                </Col>

                <Col xs='12' md='6' className='mt-5'>
                    <Image src={renne} fluid width='120px'/>
                    <p>Renné Castrucci</p>
                    <p>Diretor de cena, fotógrafo, apaixonado por tecnologia e inovação. Traz seu olhar estético e apurado, decorrente de mais de 18 anos de trabalho na área da moda, e está sempre em busca de unir design e tecnologia em soluções que façam a diferença na vida do próximo.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default QuemSomos;