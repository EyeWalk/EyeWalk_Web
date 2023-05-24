import * as React from 'react';
import AppBar from '../../components/AppBar';
import Inicio from '../../components/Inicio';
import QuemSomos from '../../components/QuemSomos';
import EyeWalk from '../../components/EyeWalk';
import Planos from '../../components/Planos';
import Footer from '../../components/Footer';
import ScrollTopButton from '../../components/ScrollToTop';
import './main.css';

const Main = () => {
    return (
        <div className='container-background'>
            <AppBar/>
            <Inicio/>
            <QuemSomos/>
            <EyeWalk/>
            <Planos/>
            <Footer/>
            <ScrollTopButton querySelector='#inicio'/>
        </div>
    )
}

export default Main