import * as React from 'react';
import { Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
                <MailOutlineIcon sx={{ color: "#FFBB3F", fontSize: 17, margin: "0 10px 0 0", cursor: "pointer" }} />
                <InstagramIcon sx={{ color: "#FFBB3F", fontSize: 17, margin: "0 10px 0 0", cursor: "pointer" }} />
                <LinkedInIcon sx={{ color: "#FFBB3F", fontSize: 17, margin: "0 0 0 0", cursor: "pointer" }} />
            </div>
        </Container>
    )
}

export default Footer;