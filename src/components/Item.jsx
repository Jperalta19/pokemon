import React from 'react';
import { Itempokemon } from './Itempokemon';

export const Item = ({results}) => {
  return (
    <div className='container'>
    <ul className='cards'>
        {
            results.map( p => (
                <li className='card-item' key={p.name}>
                    <Itempokemon url={p.url}/>
                </li>
            ))
        }
    </ul>
      
    </div>
  )
}