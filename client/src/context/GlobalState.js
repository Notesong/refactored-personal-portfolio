import React, { createContext, useReducer } from "react";
import AppReducer from "../reducers/AppReducer";

// Initial state
const initialState = {
  isProject: true
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function setIsProject(isProjectPage) {
    dispatch({
      type: "SET_IS_PROJECT",
      payload: isProjectPage
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        isProject: state.isProject,
        setIsProject
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
