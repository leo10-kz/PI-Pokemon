import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { get_pages, get_pokemons_name } from '../redux/actions';
import { Navegacion, Contenedor } from '../css-componentes/Nav';


const NavBar = () => {

const dispatch = useDispatch();

const [input, setInput] = useState({
    nameIn:''
});

const  handleInputChange = (e) =>{
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
}

const onSubmit = async (e) =>{
    e.preventDefault();
    await dispatch(get_pokemons_name(input.nameIn))
    dispatch(get_pages())
 }

  return (
   <Contenedor>
       <Navegacion>
           <div>
           <form onSubmit={e => onSubmit(e)}>
               <input type="text" name='nameIn' value={input.nameIn} onChange={handleInputChange} placeholder='Search by name...'/>
               <button type='submit'></button>
           </form>
           </div>
           <div className='links'>
           <Link to='/add'>Create</Link>
           <Link to='/home'>Home</Link>
           </div>
       </Navegacion>
   </Contenedor>
  )
}

export default NavBar

