import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

function GlobalState({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(getCurrentItem) {
    let incCartItems = [...cartItems];
    const idxCurrentItem = incCartItems.findIndex(item => item.id === getCurrentItem.id);
    console.log(idxCurrentItem);

    if(idxCurrentItem === -1){
        incCartItems.push(getCurrentItem)
    }

    setCartItems(incCartItems)
  }

  

  function removeFromCart(getCurrentId){
    console.log(getCurrentId);
    let incCartItems = [...cartItems];
    incCartItems = incCartItems.filter(item=> item.id !== getCurrentId)
    setCartItems(incCartItems)
  }

  return (
    <Context.Provider value={{ cartItems, handleAddToCart, removeFromCart }}>
      {children}
    </Context.Provider>
  );
}

export default GlobalState;
