import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Filters from "../components/Filters";
import NavBar from "../components/NavBar";
import PaginationBar from "../components/PaginationBar";
import Pokemons from "../components/Pokemons";
import { get_types } from "../redux/actions";
import { Principal, Sidebar,Contenedor } from "../css-componentes/Home";

const Home = () => {
  const pages = useSelector((state) => state.pages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_types());
  });

  return (
    <Contenedor>
      <Sidebar>
        <div>
        {pages.length ? <PaginationBar /> : null}
        {pages.length ? <NavBar /> : null}
        {pages.length ? <Filters /> : null}
        </div>
      </Sidebar>
      <Principal>
        <Pokemons />
      </Principal>
    </Contenedor>
  );
};

export default Home;
