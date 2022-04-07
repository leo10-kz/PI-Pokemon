import React from "react";
import { Card, Title, Pie, Image } from "../css-componentes/Card";
import { Links } from "../css-componentes/Card";


const PokemonCard = ({ id, name, image, types, fuerza }) => {

  let sprite;
    if(id >= 1 && id <= 100){
        sprite = true
    }

  return (
    <Card >

        <Links to={`/pokemon/${id}`}>
      <Title>
          <h2>{name}</h2>
      </Title>
    <Image> 
      { sprite ?
      <img src={`images/sprites/${id}.gif`} alt="not" />
      : <img src={image} alt="not found" />
      }
    </Image>
      <Pie>
        <div>
          <p>Tipo:</p>
           {types.map((t) => {
            return <img src={`images/types/${t}.png`} alt="Types" height="50px" key={t} />
          })}
        </div>
        <div>
          <p>Fuerza:</p>
          <span>{fuerza}</span>
        </div>
      </Pie>
          </Links>
    </Card>
  );
};

export default PokemonCard;
