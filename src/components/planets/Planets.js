import React from "react";
import PlanetsManager from "./PlanetsManager";
import { PlanetsProvider } from "../../hooks/PlanetStore";

const Planets = () => {
  return (
    <PlanetsProvider>
      <PlanetsManager />
    </PlanetsProvider>
  );
};

export default Planets;
