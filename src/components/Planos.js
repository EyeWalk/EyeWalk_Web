import * as React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imageApp from '../images/app-925.png';
import imageOculos from '../images/oculos-925.png';
import PlanCard from '../components/PlanCard';
import planosService from '../services/planos';
import {currencyFormat} from '../components/Currency';

const Planos = () => {
    
    const [planos, setPlanos] = useState(null)

    useEffect(() => {
        planosService.getPlanos().then(plano => setPlanos(plano))
    }, [])

    return (
        <Container id='planos' className='p-md-0 p-lg-5 my-5 d-flex flex-column justify-content-center mh-100 align-items-center'>
            <h1 className='display-5 fw-bold text-center mt-5 pt-5 pt-sm-3 pt-lg-0'>Experimente o EyeWalk</h1>
            <h2 className='fw-bold text-center'>30 dias grátis</h2>
            <div className='text-center line'/>
            <Row className='justify-content-between' id='listaPlanos'>
                <Col xs='12' sm='12' md='6' lg='5' className='fs-3 text-center mt-5'>
                    {
                    planos
                        ? <PlanCard title={planos[0].name} text={planos[0].description} price={currencyFormat(planos[0].price)} imgSrc={imageApp} imgAlt='Aplicação Web' btnText='Assinar' href='/comprar'></PlanCard>
                        : <PlanCard title='Plano Básico' text='' price='preço' imgSrc={imageApp} imgAlt='Aplicação Web' btnText='Assinar'></PlanCard>
                    }
                </Col>
                <Col xs='12' sm='12' md='6' lg='5' className='fs-3 text-center mt-5'>
                    {
                    planos
                        ? <PlanCard title={planos[1].name} text={planos[1].description} price={currencyFormat(planos[1].price)} imgSrc={imageOculos} imgAlt='Óculos EyeWalk' btnText='Assinar' href='/comprar'></PlanCard>
                        : <PlanCard title='Plano Premium' text='' price='preço' imgSrc={imageOculos} imgAlt='Óculos EyeWalk' btnText='Assinar'></PlanCard>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Planos;