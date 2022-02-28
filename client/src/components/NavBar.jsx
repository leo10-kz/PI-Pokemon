import React, { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { get_pages, get_pokemons_name, set_current } from '../redux/actions';
import { Navegacion, Contenedor } from '../css-componentes/Nav';
import { SearchOutlined } from '@ant-design/icons'


const NavBar = () => {

const dispatch = useDispatch();


const [input, setInput] = useState({
    nameIn:''
});

const  handleInputChange =  (e) =>{
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
   
}

const onSubmit = async (e) =>{
    e.preventDefault();
   await dispatch(get_pokemons_name(input.nameIn))
   dispatch(get_pages())
   dispatch(set_current(0))

   setInput({
       nameIn:''
   })
    
 }

 const buttonSubmit = useMemo(()=>{
    if(input.nameIn.length === 0)return true;
    return false
 },[input.nameIn])


  return (
   <Contenedor>
       <Navegacion>
           
           <form onSubmit={e => onSubmit(e)}>
               <input type="text" name='nameIn' value={input.nameIn} onChange={handleInputChange} placeholder='Search by name...'/>
               <button type='submit'disabled={buttonSubmit} ><SearchOutlined /></button>
           </form>
           
       </Navegacion>
   </Contenedor>
  )
}

export default NavBar

