import React from "react";
import { useSelector } from "react-redux";
import Pokemons from "../components/Pokemons";
import LateralBar from "../components/LateralBar";
import PaginationBar from "../components/PaginationBar";
import Direccion from "../components/Direccion";
import { Principal, Sidebar, Contenedor } from "../css-componentes/Home";
import NotFound from "../components/NotFound";

const Home = () => {
  const pages = useSelector((state) => state.pages);
  const poke = useSelector((state) => state.pokemonsOrder);
    


  return (
    <Contenedor>
      <div className="lateral">
        <Sidebar>
          <div>{pages.length ? <LateralBar /> : null}</div>
        </Sidebar>
        {pages.length ? <Direccion /> : null}
        <Principal>
          <PaginationBar />
        {poke !== null ? <Pokemons />: <NotFound />}
        </Principal>
      </div>
    </Contenedor>
  );
};

export default Home;
