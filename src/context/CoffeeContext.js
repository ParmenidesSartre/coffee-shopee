import React, { createContext, useState, useContext } from 'react';
import data from '../theme/constant';

export const useCoffee = () => useContext(CoffeeContext);

const CoffeeContext = createContext();


export const CoffeeProvider = ({ children }) => {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [coffees, setCoffees] = useState(data);

  return (
    <CoffeeContext.Provider value={{ selectedCoffee, setSelectedCoffee, coffees }}>
      {children}
    </CoffeeContext.Provider>
  );
};