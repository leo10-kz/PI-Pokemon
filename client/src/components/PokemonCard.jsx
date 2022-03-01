import React from "react";
import { Card, Title, Pie, Image } from "../css-componentes/Card";
import { Links } from "../css-componentes/Card";


const PokemonCard = ({ id, name, image, types, fuerza }) => {

  return (
    <Card>

        <Links to={`/pokemon/${id}`}>
      <Title>
          <h2>{name}</h2>
      </Title>
    <Image> 
      
      <img src={image} alt="" />
    </Image>
      <Pie>
        <div>
          <p>Tipo:</p>
           {types.map((t, i) => {
            return <p key={i} className="tipo">{t}</p>;
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
