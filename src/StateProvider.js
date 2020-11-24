import React, { createContext, useContext, useReducer } from "react";

//Prepare the datalayer
export const StateContext = createContext();

//Wrap our app and provide the Datalayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull information from the datalayer
export const useStateValue = () => useContext(StateContext);
