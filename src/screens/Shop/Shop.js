import * as React from 'react';
import { useEffect, useState } from 'react';
import BuyForm from '../../components/BuyForm';
import BuyDetail from '../../components/BuyDetail';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './shop.css';
import planosService from "../../services/planos"

const Shop = () => {
    const [planos, setPlanos] = useState(null)

    useEffect(() => {
        planosService.getPlanos().then(plano => setPlanos(plano))
    }, [])
    return (
        <div className='page'>

            <Container className='d-flex flex-column justify-content-center mh-100 align-items-center'>
                <Row className='bg-white'>
                    <Col md className='primaryBackground text-white px-5 py-4'>
                        <BuyDetail planos={planos} />
                    </Col>
                    <Col md className='mx-md-1 mx-lg-5 py-4'>
                        <BuyForm />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Shop