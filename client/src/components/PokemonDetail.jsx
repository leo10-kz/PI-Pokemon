import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { get_pokemons_id } from "../redux/actions";
import { Conteiner, Detalles, Estadisticas, Linkshome } from "../css-componentes/Details";
import { SwapLeftOutlined} from '@ant-design/icons';

const PokemonDetail = () => {
  const { id } = useParams();
  const pokeId = useSelector((state) => state.pokemonId);

  const dispatch = useDispatch();
  const types = pokeId.types;

  useEffect(() => {
    dispatch(get_pokemons_id(id));
  }, [dispatch, id]);
console.log(types);
  return (

    <Conteiner>
      <Linkshome to='/home'><SwapLeftOutlined /></Linkshome>
      <Detalles>
        <div>
          <p>{pokeId.id}</p>
          <h2>{pokeId.name}</h2>
          <img src={pokeId.image} alt="" />
          <h3>Tipo:</h3>
          {types && types.map((t, i) => <p key={i}>{t}</p>)}
        </div>
      </Detalles>
      <Estadisticas>
        <div>
          <h2>Estadisticas</h2>
          
          <div className="progreso rojo">
            <span style={{width: pokeId.vida}}>VIDA:{pokeId.vida}</span>
          </div>
          <div className="progreso azul">
            <span style={{width: pokeId.fuerza}}>FUERZA:{pokeId.fuerza}</span>
          </div>
          <div className="progreso amarillo">
            <span style={{width:+ pokeId.defenza}}>DEFENZA:{pokeId.defenza}</span>
          </div>
          <div className="progreso verde">
            <span style={{width:pokeId.velocidad}}>VELOCIDAD:{pokeId.velocidad}</span>
          </div>
          <div className="progreso marron">
            <span style={{width: pokeId.altura}}>ALTURA:{pokeId.altura}</span>
          </div>
          <div className="progreso naranja">
            <span style={{width: pokeId.peso}}>PESO:{pokeId.peso}</span>
          </div>
        </div>
      </Estadisticas>
    </Conteiner>
  );
};

export default PokemonDetail;
