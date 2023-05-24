import * as React from 'react';
import { Container, Col } from 'react-bootstrap';

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

export default EyeWalk;