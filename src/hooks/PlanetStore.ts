import { Reducer } from "react";
import makeStore, {Action} from "./MakeStore";
import { v4 as uuidv4 } from 'uuid';

export type Planet = {id: string, name: string};
export type PlanetAction = Action<Planet>;

const planetsReducer: Reducer<Planet[], PlanetAction> = (state, action) => {
    switch (action.type) {
        case 'add': return [...state, action.payload];
        case 'delete': return state.filter(planet => planet.id !== action.payload.id)
        default: throw new Error('Unknown action'+JSON.stringify(action));
    }
}

const initialPlanets = [{id: uuidv4(), name: 'Earth'}, {id: uuidv4(), name: 'Mars'}];

const [PlanetsProvider, UsePlanets, UsePlanetsDispatch] = makeStore<Planet>(planetsReducer, initialPlanets);
 
export {PlanetsProvider, UsePlanets, UsePlanetsDispatch};