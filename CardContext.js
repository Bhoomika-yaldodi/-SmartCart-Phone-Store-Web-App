import React, { createContext, useState } from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (!exists) {
      setCartItems([...cartItems, product]);
    }
  };

  return (
    <CardContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CardContext.Provider>
  );
};
