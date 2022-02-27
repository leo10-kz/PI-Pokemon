import React from "react";
import { Card, Title, Pie, Image } from "../css-componentes/Card";
import { Links } from "../css-componentes/Compartidos";


const PokemonCard = ({ id, name, image, types, fuerza }) => {
  console.log(types);
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
          <p><u>Tipo:</u></p>
          {types.map((t, i) => {
            return <p key={i}>{t}</p>;
          })}
        </div>
        <div>
          <p><u>Fuerza:</u></p>
          <span>{fuerza}</span>
        </div>
      </Pie>
          </Links>
    </Card>
  );
};

export default PokemonCard;
