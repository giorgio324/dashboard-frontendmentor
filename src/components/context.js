import React from 'react';
import { useState, useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [time, setTime] = useState('daily');
  const displayPage = (e) => {
    setTime(e.target.textContent.toLowerCase());
  };
  return (
    <AppContext.Provider value={{ time, displayPage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
