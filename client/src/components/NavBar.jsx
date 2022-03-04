import React, { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { get_pages, get_pokemons_name/* , set_current */ } from '../redux/actions';
import { Navegacion, Contenedor } from '../css-componentes/Nav';
import { SearchOutlined } from '@ant-design/icons'


const NavBar = () => {

const dispatch = useDispatch();


const [input, setInput] = useState('');


const handleInputChange = async (e) =>{
    e.preventDefault();
   await dispatch(get_pokemons_name(input))
   dispatch(get_pages())
  // dispatch(set_current(0))

   setInput('')
    
 }

 const buttonSubmit = useMemo(()=>{
    if(input.length === 0)return true;
    return false
 },[input])


  return (
   <Contenedor>
       <Navegacion>
           
           <form onSubmit={ handleInputChange}>
               <input type="text"  value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Search by name...'/>
               <button type='submit'disabled={buttonSubmit} ><SearchOutlined /></button>
           </form>
           
       </Navegacion>
   </Contenedor>
  )
}

export default NavBar

