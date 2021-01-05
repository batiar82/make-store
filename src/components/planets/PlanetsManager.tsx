import React, {useState} from "react";
import {Planet, UsePlanets, UsePlanetsDispatch} from '../../hooks/PlanetStore';
import { v4 as uuidv4 } from 'uuid';

const PlanetsManager = () => {
  const dispatch = UsePlanetsDispatch();  
  const planets = UsePlanets();
  const [value, setValue] = useState('Jupiter');
  const handleAddPlanet = () =>
  dispatch({type: "add", payload: {id: uuidv4(), name: value}}); 
  const handleDeletePlanet = (planet : Planet) => () => {
    dispatch({
      type: "delete",
      payload: planet
    })

  }
  return (
    <>
      <input type='text' value={value} onChange={e => setValue(e.target.value)}/>
      <button onClick={handleAddPlanet}>Add Planet</button>
      <div>
        {planets.map((planet) => (
          <div key={planet.id} onClick={handleDeletePlanet(planet)}>{planet.name}</div>
        ))}
      </div>
    </>
  );
};

export default PlanetsManager;
