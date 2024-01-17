import React from 'react';
import {Usefecth} from './Usefecth'
import Modall from './Modall';

export const CardPokemon = ({url}) => {

    const status = Usefecth(url);
    const {loading,data}=status

    return (
    <div>
        {
            loading
            ?
            <h1>Loading</h1>
            :
            <div className='card' style={{with:'14rem'}}>
                <div className=' card-header'>
                    <h5 className='card-title'>{data.id}</h5>
                </div>
                <div className='card-body'>
                    <img src={data.sprites.front_default} alt='pokemon'/>
                </div>
                <div className='card-footer'>
                    <p className='card-text text-capitalize'>{data.forms[0].name}</p>
                </div>
                <Modall id={data.id} titulo={data.name} contenido={data.effect_entries}/>
            </div>
        }
    </div>
  )
}


