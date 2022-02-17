import React from 'react'
import { Link } from 'react-router-dom';

const PokemonCard = ({id, name, image, tipo}) => {
  
  return (
    <div>
      <Link to={`/pokemon/${id}`}>
      <h1>{name}</h1>
      </Link>
      <img src={image} alt="" />
      {tipo.map(t =>{
        return(<p>{t}</p>)
      })}
    </div>
  )
}

export default PokemonCard