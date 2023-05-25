import * as React from 'react';
import { Navbar, Nav, Image, NavbarBrand, NavLink } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import logo from '../images/logoEyeWalk.png';
import { scrollTo } from '../components/ScrollToTop';

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.bg-navBar');
    if (navbar) navbar.classList.toggle('bg-navBar-active', window.scrollY > 80);
});

const AppBar = () => {
    return (
        <Navbar bg="navBar" variant='dark' className='px-4 px-sm-4 px-md-5 py-2 py-sm-1 py-md-0 navbar' fixed='top' expand='lg' collapseOnSelect>
            
            <NavbarBrand className='fs-1 fw-bold'>
                <Image src={logo} fluid className='me-3 img img-fluid' width='80px'/>
                <span>EyeWalk</span>
            </NavbarBrand>
            
            <NavbarToggle/>

            <NavbarCollapse>
                <Nav className='my-4 ms-auto fs-6'>
                    <NavLink onClick={() => scrollTo('inicio')}>Início</NavLink>
                    <NavLink onClick={() => scrollTo('quemsomos')}>Quem Somos</NavLink>
                    <NavLink onClick={() => scrollTo('eyewalk')}>EyeWalk</NavLink>
                    <NavLink onClick={() => scrollTo('planos')}>Planos</NavLink>
                    <NavLink onClick={() => scrollTo('contato')}>Contato</NavLink>
                    <NavLink className='text-highLight' href='/comprar'>Quero experimentar</NavLink>
                </Nav>
            </NavbarCollapse>

        </Navbar>
    )
}

export default AppBar;