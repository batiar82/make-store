import makeStore from "./MakeStore";
const planetsReducer = (state, action) => {
    if (action.type === 'add')
    // return {...state, planets: [...state.planets,action.payload]};
    return [...state, action.payload];
    else throw new Error('Unknown action'+JSON.stringify(action));
}

const initialPlanets = ['Earth', 'Mars'];

const [PlanetsProvider, UsePlanets, UsePlanetsDispatch] = makeStore(planetsReducer, initialPlanets);
 
export {PlanetsProvider, UsePlanets, UsePlanetsDispatch};