import React from 'react';
import Carousell from '../components/Carousell.jsx';
import Footer from '../components/Footer.jsx';

const Main = () => {
  return (
    <div>
      <Carousell/>
        <div className='container mb-5'>
          <h1 className='text-white p-2 bg-dark'>POKEMON</h1>
            <figure>
              <blockquote className='blockquote'>
                <p className='text-center mt-3'>
                Los pokemon son una clase de criaturas inspiradas en animales reales, insectos, objetos, plantas o crituras mitologicas. Los jugadores toman el papel entrenadores pokemon y tienen tres objetivos generales.
                </p>
              </blockquote>
              <figcaption className='blockquote-footer'>
                Wikipedia
              </figcaption>
            </figure>
            <h2 className='bg-dark text-white mb-5'>Opening</h2>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/uDIoEbbFKAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <Footer/>   
    </div>
  )
}

export default Main

