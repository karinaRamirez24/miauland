import React from 'react';
import './Footer.css'; 
import miauland from '../../Assets/imagenes/Miauland.png';


const Footer = () => {
  return (
    <div>
        <footer className="main__content">
            <div className="main__content-initial">
            <div className='initial__img'>
               <img src={miauland} alt="Miauland" />
            </div>
            <div className='initial__text'>
              <p>Copyright © 2025-2026  MIAULAND | Todas las marcas e imágenes mencionados son propiedad de sus dueños.</p>
              <p>Diseñado por: Aloga Software Solutions S.A. de C.V.</p>
            </div>

            </div>
        </footer>
    </div>
  )
}

export default Footer