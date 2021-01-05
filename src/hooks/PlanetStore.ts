import { Reducer } from "react";
import makeStore, {Action} from "./MakeStore";
import { v4 as uuidv4 } from 'uuid';

export type Planet = {id: string, name: string};
export type PlanetAction = Action<Planet>;

const planetsReducer: Reducer<Planet[], PlanetAction> = (state, action) => {
    if (action.type === 'add')
    // return {...state, planets: [...state.planets,action.payload]};
    return [...state, action.payload];
    else throw new Error('Unknown action'+JSON.stringify(action));
}

const initialPlanets = [{id: uuidv4(), name: 'Earth'}, {id: uuidv4(), name: 'Mars'}];

const [PlanetsProvider, UsePlanets, UsePlanetsDispatch] = makeStore<Planet>(planetsReducer, initialPlanets);
 
export {PlanetsProvider, UsePlanets, UsePlanetsDispatch};