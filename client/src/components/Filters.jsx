
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get_pages, order_create_by, filter_type, ordering } from '../redux/actions';
import { Main } from '../css-componentes/Filters';


const Filters = () => {
   const dispatch = useDispatch()
  const tipos = useSelector(state => state.pokeTypes) 
  

 

  const click = (e) =>{
   
    dispatch(ordering(e.target.value));
       dispatch(get_pages())
  }


 const click2 = (e) =>{ 
    dispatch(filter_type(e.target.value))
    dispatch(get_pages())
 }

const click3 = (e) =>{
 dispatch(order_create_by(e.target.value));
 dispatch(get_pages())
}
 
  return (
  
    <Main>
      <select name="orderName" onChange={(e) => click(e)}>
          <option value="all">Por defecto</option>
          <option value="ascendente"> A - Z</option>
          <option value="descendente">Z - A</option>
          <option value="maximo">Fuerza (+)</option>
          <option value="minimo">Fuerza (-)</option>
      </select>
      
       
      <select name="orderTipos"  onChange={(e) => click2(e)}>
        <option value="all">Todos los Tipos</option>
        {tipos.map((t, i) => (<option key={i}>{t.name}</option>))}
      </select>


      <select name="orderCreate"  onChange={(e) => click3(e)}>
          <option value="all">Todos </option>
          <option value="existe"> Api </option>
          <option value="creado"> Creados </option>
      </select>
    </Main>
  )
}

export default Filters

