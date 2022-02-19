import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { get_pages, get_pokemons_name } from '../redux/actions';

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
   <div>
       <nav>
           <Link to='/add'>Create</Link>
           <Link to='/home'>Home</Link>
           <form onSubmit={e => onSubmit(e)}>
               <input type="text" name='nameIn' value={input.nameIn} onChange={handleInputChange} placeholder='Search by name...'/>
               <button type='submit'>buscar</button>
           </form>
    
       </nav>
   </div>
  )
}

export default NavBar

