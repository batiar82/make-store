import React, { useReducer } from "react";


export default function makeStore(reducer, initialState) {
    const dispatchContext = React.createContext();
    const storeContext = React.createContext();
    
const StoreProvider = ({ children }) => {
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