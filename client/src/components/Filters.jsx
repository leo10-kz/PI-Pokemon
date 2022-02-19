
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get_pages, order_fuerza, order_name, order_type } from '../redux/actions';

const Filters = () => {
   const dispatch = useDispatch()
  const tipos = useSelector(state => state.pokeTypes) 
   
 

  const click = (e) =>{
   
    dispatch(order_name(e.target.value));
       dispatch(get_pages())
  }

   const click1 = (e) =>{
    dispatch(order_fuerza(e.target.value));
     dispatch(get_pages())
 }

 const click2 = (e) =>{ 
    dispatch(order_type(e.target.value))
    dispatch(get_pages())
 }
 
  return (
  
    <main>
      <select name="orderName" onChange={(e) => click(e)}>
          <option value="ascendente">A-Z</option>
          <option value="descendente">Z-A</option>
      </select>
      
      <select name="orderFuerza" onChange={(e) => click1(e)}>
          <option value="ascendente">Max</option>
          <option value="descendente">Min</option>
      </select>
       
      <select name="orderTipos" onChange={(e) => click2(e)}>
        {tipos.map((t, i) => (<option key={i}>{t.name}</option>))}
      </select>

    </main>
  )
}

export default Filters
