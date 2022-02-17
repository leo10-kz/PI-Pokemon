import React,{ useEffect  } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { get_pokemons_id } from '../redux/actions';

const PokemonDetail = () => {
    const{ id } = useParams()
    const pokeId = useSelector(state => state.pokemonId);
    
    const dispatch = useDispatch();
    const tipos = pokeId.tipos 
   
    useEffect(()=>{
       dispatch(get_pokemons_id(id))
    },[dispatch, id])
 

  return (
   <div>
     <p>{pokeId.id}</p>
     <h2>{pokeId.name}</h2>
     <img src={pokeId.image} alt="" /> 
     {tipos && tipos.map((t,i) => (<p key={i}>{t}</p>))}
     <div>
         <h3>Estadisticas</h3>
         <p>Vida: {pokeId.vida}</p>
         <p>fuerza: {pokeId.fuerza}</p>
         <p>Defenza: {pokeId.defenza}</p>
         <p>Velocidad: {pokeId.velocidad}</p>
         <p>Altura: {pokeId.altura}</p>
         <p>Peso: {pokeId.peso}</p>
     </div>
   </div>
  )
}

export default PokemonDetail

