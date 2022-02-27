import React from "react";
import Filters from "./Filters";
import NavBar from "./NavBar";
import { Contenedor } from "../css-componentes/LateralBar";

const LateralBar = () => {
  return (
    <div>
      <Contenedor>
        <div className="one">
          <Filters />
        </div>
        <div className="two">
          <NavBar />
        </div>
      </Contenedor>
    </div>
  );
};

export default LateralBar;
