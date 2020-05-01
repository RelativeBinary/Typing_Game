import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  mode: 'Easy',
  scores: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component wraps all the jsx stuff in App.js
export const GlobalProvider = ({ children }) => {
  // Reducer used here
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  //change gamemode

  //start new game

  return (
    <GlobalContext.Provider
      value={{
        mode: state.mode,
        //changeDifficulty
        //startNewGame
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
