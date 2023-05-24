import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from "../images/logoEyeWalk.png"
import oculos from "../images/oculos-925.png"

const BuyDetail = ({ planos }) => {
    return (
        <div>
            <div className="container-fluid text-start mb-5 p-0">
                <h3>
                    EyeWalk
                    <img src={logo} width="10%" height="10%" alt="Logo EyeWalk" className='ms-2' />
                </h3>
            </div>
            <p className='my-3'>Teste o EyeWalk</p>
            <h1 className='highLightText'>30 dias Grátis</h1>
            <span className='text-light'>Após o período de teste apenas R$150 por mês</span>
            <p className='my-5'>1 Aparelho EyeWalk, 1 carregador e link para o download do App</p>

            <Row>
                <Col xs='3' className='d-flex rounded-4 align-items-center'>
                    <img src={oculos} alt='Óculos EyeWalk' className='img img-fluid' />
                </Col>
                <Col>
                    <Row>
                        <Col><p>EyeWalk</p></Col>
                        <Col><p>30 dias grátis</p></Col>
                    </Row>
                    <Row style={{ marginTop: '-10px' }}>
                        <Col><p>Qt 1</p></Col>
                        <Col><p className='text-muted'>R$ {planos ? planos[1].price : "150,00"} / Mês seguinte</p></Col>
                    </Row>
                </Col>
            </Row>

            <div className='d-flex justify-content-between mt-5'>
                <p className='fw-semibold'>SubTotal</p>
                <p>R$ {planos ? planos[1].price : "150,00"}</p>
            </div>
            <hr />

            <div className='d-flex justify-content-between mt-3 text-muted'>
                <p className='fw-semibold'>Taxas</p>
                <p>R$ 0,00</p>
            </div>

            <hr className='mt-1' />

            <div className='d-flex justify-content-between mt-5'>
                <p className='fw-semibold'>Após 30 dias</p>
                <p>R$ {planos ? planos[1].price : "150,00"}</p>
            </div>

            <div className='d-flex justify-content-between mt-5 fs-3 highLightText'>
                <p className='fw-semibold'>Total a pagar</p>
                <p>R$ 0,00</p>
            </div>

            <div className='d-flex justify-content-between'>
                <small><a href='./#' className='link'>*Termos de compromisso</a></small>
                <small><a href='./#' className='link'>Privacidade</a></small>
            </div>
        </div>
    )
}

export default BuyDetail