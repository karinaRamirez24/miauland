import React from 'react';
import './Header.css';
import Miauland from '../../Assets/imagenes/Miauland.png';

function Header() {
    return (
        <header className="header">
                <a href=""><img src={Miauland} className='header__logo' alt="Logotipo de Miauland" /></a>
            <nav className="header__nav">
                <ul className='header__nav-list'>
                    <li><a href="#adopciones">Adopciones</a></li>
                    <li><a href="#donaciones">Donaciones</a></li>
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#contactanos">Contáctanos</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;