import React from "react";
import { useSelector } from "react-redux";
import Pokemons from "../components/Pokemons";
import LateralBar from "../components/LateralBar";
import PaginationBar from '../components/PaginationBar'
import Direccion from "../components/Direccion";
import { Principal, Sidebar, Contenedor } from "../css-componentes/Home";


const Home = () => {
  const pages = useSelector((state) => state.pages);
  

  return (
    <Contenedor>
      <div className="lateral">
      <Sidebar>
        <div>{pages.length ? <LateralBar /> : null}</div>
      </Sidebar>
      <Direccion />
      <Principal>
      <PaginationBar />
        <Pokemons />
      </Principal>
      </div>
    </Contenedor>
  );
};

export default Home;
