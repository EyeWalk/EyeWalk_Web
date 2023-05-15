import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, FormLabel, FormControl, Col, Row} from 'react-bootstrap';

const BuyForm = () => {
    return (
        <Form action='https://api.eyewalk.42g.com.br/api/v1/plan' method='post'>
            <p className='fw-semibold fs-5' style={{textDecoration: 'underline'}}>Dados da entrega</p>

            <Form.Group controlId='formName' className='mt-4'>
                <FormLabel>Nome completo</FormLabel>
                <FormControl name='name' className='form-control' type='text' placeholder='Nome Sobrenome'></FormControl>
            </Form.Group>

            <Form.Group controlId='formEmail' className='mt-2'>
                <FormLabel>Email</FormLabel>
                <FormControl name='email' className='form-control' type='email' placeholder='email@email.com'></FormControl>
            </Form.Group>

            <Col xs='4' sm='4' md='5' lg='4'>
                <Form.Group controlId='formCep' className='mt-2'>
                    <FormLabel>CEP</FormLabel>
                    <FormControl name='zipcode' className='form-control' type='text' pattern="\d{5}-?\d{3}" placeholder='00000-000'></FormControl>
                </Form.Group>
            </Col>

            <Row>
                <Col xs='9' sm='8' className='mt-2'>
                    <Form.Group controlId='formAddress'>
                        <FormLabel>Endereço</FormLabel>
                        <FormControl className='form-control' type='text' placeholder='Logradouro'></FormControl>    
                    </Form.Group>
                </Col>
                <Col xs='3' sm='4' className='mt-2'>
                    <Form.Group controlId='formAddressNumber'>
                        <FormLabel>Número</FormLabel>
                        <FormControl className='form-control' type='number' placeholder='Número'></FormControl>    
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col xs='9' sm='8' className='mt-2'>
                    <Form.Group controlId='formAddressArea'>
                        <FormLabel>Bairro</FormLabel>
                        <FormControl className='form-control' type='text' placeholder='Bairro'></FormControl>    
                    </Form.Group>
                </Col>
                <Col xs='3' sm='4' className='mt-2'>
                    <Form.Group controlId='formAddressState'>
                        <FormLabel>Estado</FormLabel>
                        <FormControl className='form-control' type='text' placeholder='Estado'></FormControl>    
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col xs='12' sm='6' className='mt-2'>
                    <Form.Group controlId='formAddressExtra'>
                        <FormLabel>Complemento</FormLabel>
                        <FormControl className='form-control' type='text' placeholder='Complemento'></FormControl>    
                    </Form.Group>
                </Col>
                <Col xs='12' sm='6' className='mt-2'>
                    <Form.Group controlId='formAddressCity'>
                        <FormLabel>Cidade</FormLabel>
                        <FormControl className='form-control' type='text' placeholder='Cidade'></FormControl>    
                    </Form.Group>
                </Col>
            </Row>

            <p className='fw-semibold fs-5 mt-4' style={{textDecoration: 'underline'}}>Informações de pagamento</p>

            <Form.Group controlId='formPaymentCard' className='mt-2'>
                <FormLabel>Cartão de crédito | Débito</FormLabel>
                <FormControl name='card' className='form-control' type='number' placeholder='0000 0000 0000 0000'></FormControl>
            </Form.Group>

            <Row>
                <Col xs='12' sm='6' className='mt-2'>
                    <Form.Group controlId='formPaymentDate'>
                        <FormControl className='form-control' type='text' placeholder='MM/YY'></FormControl>    
                    </Form.Group>
                </Col>
                <Col xs='12' sm='6' className='mt-2'>
                    <Form.Group controlId='formPaymentCvv'>
                        <FormControl className='form-control' type='text' placeholder='CVV'></FormControl>    
                    </Form.Group>
                </Col>
            </Row>

            <Button type='submit' className='btn-warning w-100 fs-5 mt-5' style={{fontWeight: '600',backgroundColor: '#FFBB3F'}}>30 DIAS GRÁTIS</Button>
            <div className='text-center mt-2'>
                <small className='text-muted text-center'>*Após 30 dias será cobrada uma taxa de R$ 150,00 por mês. Você pode cancelar o plano a qualquer momento.</small>
            </div>
        </Form>

    )
}

export default BuyForm