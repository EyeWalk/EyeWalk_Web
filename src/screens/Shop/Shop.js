import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer/Footer';
import BuyForm from '../../components/BuyForm';
import BuyDetail from '../../components/BuyDetail';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Shop = () => {
    
    return (
        <div class='page'>
            <NavBar>                
                <button className='navLink' onClick={() => window.open("./","_self")}>Início</button>
                <button className='navLink' onClick={() => window.open("./","_self")}>Quem Somos</button>
                <button className='navLink' onClick={() => window.open("./","_self")}>Planos</button>
                <button className='navLink' onClick={() => window.open("./","_self")}>EyeWalk</button>
                <Link className='navLinkComprar' to="/comprar" >Quero Experimentar</Link>
            </NavBar>
            
            <Toolbar id="back-to-top-anchor"/>

            <Container className='container-background'>
                <Row className='my-4'>
                    <Col md className='primaryBackground text-white px-5 py-4'>
                        <BuyDetail/>
                    </Col>
                    <Col md className='mx-md-1 mx-lg-5 py-4'>
                        <BuyForm/>
                    </Col>
                </Row>
            </Container>
            
            <Footer />
        </div>
    )
}

export default Shop