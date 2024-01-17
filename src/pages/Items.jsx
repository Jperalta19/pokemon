import React, {useState} from 'react';
import { Item } from '../components/Item';
import {Usefecth} from '../components/Usefecth';

const Items = () => {

  const [url,setUrl]=useState('https://pokeapi.co/api/v2/item')

  const status= Usefecth(url);
  const {loading,data}=status;


  return (
    <div>
      <h1>Todos los items</h1>
      <div>
          {
            loading
            ?
            <h1>Loading...</h1>
            :
            <div>
            <Item results={data.results}/>

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

export default Items
