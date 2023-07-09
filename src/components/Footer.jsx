import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <footer className='text-white py-4 bg-dark'>
            <div className='container'>
                <nav className='row'>
                    <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justify-content-center'>POKEMON</Link>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weight-bold mb-2'>pokemon</li>
                        <li className='text-center'>En este sitio web podras encontara informaciones sobre tus pokemon favoritos</li>
                    </ul>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weight-bold mb-2'>Enlaces</li>
                        <li>
                            <Link to='/Pokemon' className='text-reset'>Pokemon</Link>
                        </li>
                        <li>
                            <Link to='/Items' className='text-reset'>Items</Link>
                        </li>
                    </ul>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weight-bold mb-2'>Siguenos</li>
                        <li className='d-flex justify-content-between'>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-youtube"></i>
                        <i class="bi bi-facebook"></i>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    </div>
  )
}

export default Footer
