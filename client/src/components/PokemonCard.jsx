import React from 'react'
import { Link } from 'react-router-dom';

const PokemonCard = ({id, name, image, types,fuerza}) => {
  console.log(types);
  return (
    <div>
      <Link to={`/pokemon/${id}`}>
      <h1>{name}</h1>
      </Link>
      
      <img src={image} alt="" />
      {types.map((t, i) =>{
        return(<p key={i}>{t}</p>)
      })} 
      <p>{fuerza}</p>
    </div>
  )
}

export default PokemonCard