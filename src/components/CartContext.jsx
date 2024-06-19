import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product, quantity) => { // Alteração aqui: recebendo quantity como argumento
    const existingItemIndex = cartItems.findIndex(item => item.set_id === product.set_id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[existingItemIndex].quantity < 3) {
        updatedCartItems[existingItemIndex].quantity += 1;
      }
      setCartItems(updatedCartItems);
    } else {
      setCartItems(prevItems => [...prevItems, { ...product, quantity }]);
    }
  };

    const removeItemFromCart = (productRemove) => {
        setCartItems(prevItems => prevItems.filter(item => item.set_id !== productRemove.set_id));
    };

    const increaseItemQuantity = (productId) => {
        const updatedCartItems = [...cartItems];
        const itemToIncrease = updatedCartItems.find(item => item.set_id === productId);
        if (itemToIncrease && itemToIncrease.quantity < 3) {
          itemToIncrease.quantity += 1;
          setCartItems(updatedCartItems);
        }
    };
    
      const decreaseItemQuantity = (productId) => {
        const updatedCartItems = [...cartItems];
        const itemToDecrease = updatedCartItems.find(item => item.set_id === productId);
        if (itemToDecrease && itemToDecrease.quantity > 1) {
          itemToDecrease.quantity -= 1;
          setCartItems(updatedCartItems);
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((acc, item) => acc + (item.set_price * item.quantity), 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, increaseItemQuantity, decreaseItemQuantity, clearCart, calculateSubtotal }}>
        {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    return context;
}