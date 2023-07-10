import React, {useState} from 'react';

import {Usefecth} from '../components/Usefecth';
import {Cards} from '../components/Cards';

const Pokemon = () => {

  const [url,setUrl]=useState('https://pokeapi.co/api/v2/pokemon')

  const status= Usefecth(url);
  const {loading,data}=status;

  return (
    <div>
    <h1>Todos los pokemon</h1>
        <div>
          {
            loading
            ?
            <h1>Loading...</h1>
            :
            <div>
            <Cards results={data.results}/>

            <div className='container m-auto'>
              <button onClick={()=>setUrl(data.previous)} className='m-2 btn btn-dark'>Previous</button>
              <button onClick={()=>setUrl(data.next)} className='m-2 btn btn-dark'>Next</button>

            </div>

            </div>

          }
      </div>
    </div>
  )
}

export default Pokemon
