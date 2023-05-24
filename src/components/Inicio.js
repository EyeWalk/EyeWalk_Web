import * as React from 'react';
import { Container, Image } from 'react-bootstrap';
import arrow from '../images/arrow_down.png';
import { scrollTo } from '../components/ScrollToTop';

const Inicio = () => {
    return (
        <Container fluid id='inicio' className='d-flex flex-column justify-content-center align-items-center w-100 mh-100 hero' onClick={()=>scrollTo('quemsomos')}>
            <h3 className="hero-title fw-bold pt-5 pb-0 mb-2 mt-auto">EyeWalk...</h3>
            <h2 className="hero-text m-0 p-0">Uma visão além do alcance!</h2>
            <Image src={arrow} alt='Continue' className='slide-bottom p-5 mt-auto'/>
        </Container>
    )
}

export default Inicio;