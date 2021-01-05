import React, { useReducer, Reducer, Dispatch, } from "react";
export type Action<T> = {type: string, payload: T}

type Store<T> = [React.FC, ()=>T[], ()=>Dispatch<Action<T>>];

export default function makeStore<T>(reducer : Reducer<T[],Action<T>>, initialState: T[]) : Store<T> {
    const dispatchContext = React.createContext<Dispatch<Action<T>>>(()=>console.error("No initial dispatcher provided"));
    const storeContext = React.createContext(initialState);
    
const StoreProvider: React.FC = ({ children } ) => {
  const [store, dispatch] = useReducer(reducer, initialState);
  
  return (
    <dispatchContext.Provider value={dispatch}>
      <storeContext.Provider value={store}>
        {children}
      </storeContext.Provider>
    </dispatchContext.Provider>
  );
};

function useDispatch() {
  return React.useContext(dispatchContext);
}
function useStore() {
    return React.useContext(storeContext);
}

return [StoreProvider, useStore, useDispatch];
}