import React, {useState} from "react";
import {UsePlanets, UsePlanetsDispatch} from '../../hooks/PlanetStore';

const PlanetsManager = () => {
  const dispatch = UsePlanetsDispatch();  
  const planets = UsePlanets();
  const [value, setValue] = useState('Jupiter');
  const handleAddPlanet = () =>
  dispatch({type: "add", payload: value}); 
  return (
    <>
      <input type='text' value={value} onChange={e => setValue(e.target.value)}/>
      <button onClick={handleAddPlanet}>Add Planet</button>
      <div>
        {planets.map((planet) => (
          <div key={planet}>{planet}</div>
        ))}
      </div>
    </>
  );
};

export default PlanetsManager;
