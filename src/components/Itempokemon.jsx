import React from 'react';
import {Usefecth} from './Usefecth'

export const Itempokemon = ({url}) => {

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
                <img src={data.sprites.default} alt='item'/>
                </div>
                <div className='card-footer'>
                    <p className='card-text text-capitalize'>{data.name}</p>
                </div>
            </div>
        }
    </div>
)
}
