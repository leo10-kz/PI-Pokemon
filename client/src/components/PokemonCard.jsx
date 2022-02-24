import React from "react";
import { Link } from "react-router-dom";
import { Card, Title, Pie, Image } from "../css-componentes/Card";

const PokemonCard = ({ id, name, image, types, fuerza }) => {
  console.log(types);
  return (
    <Card>
      <Title>
        <Link to={`/pokemon/${id}`}>
          <h1>{name}</h1>
        </Link>
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
    </Card>
  );
};

export default PokemonCard;
