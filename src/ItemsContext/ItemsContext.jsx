import React, { useContext, useState } from 'react';

export const ItemsContext = React.createContext({
  items: [],
  setItems: () => {}
});

export const useItems = () => useContext(ItemsContext);

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  return (
    <ItemsContext.Provider
      value={{ items, setItems, shoppingList, setShoppingList }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
