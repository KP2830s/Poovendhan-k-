import React, { createContext, useContext, useState } from 'react';


const CartContext = createContext();

export const useCart = () => useContext(CartContext);



//The children here means: "whatever components are inside this provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (product) => {
    const normalizedProduct = {
      ...product,
      price: typeof product.price === 'string'
        ? parseFloat(product.price.replace(/[$,]/g, '').trim())
        : Number(product.price) || 0, // fallback to 0
    };

    setCartItems((prevItems) => {
      const existing = prevItems.find(item => item.id === normalizedProduct.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === normalizedProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...normalizedProduct, quantity: 1 }];
    });
  };

  // ✅ Add item to cart
  /*   const addToCart = (product) => {
      setCartItems((prevItems) => {
        const existing = prevItems.find(item => item.id === product.id);
        if (existing) {
          return prevItems.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prevItems, { ...product, quantity: 1 }];
      });
    }; */

  // ✅ Remove item

  const removeFromCart = (id) => {

    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // ✅ Increase quantity
  const increaseQty = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // ✅ Decrease quantity
  const decreaseQty = (id) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0) // remove if qty is 0
    );
  };

  // After other functions like increaseQty and decreaseQty

  // const getTotalPrice = () => {
  //   return cartItems.reduce((total, item) => {
  //     const itemPrice = parseFloat(item.price.replace('$', '')); // remove $ sign
  //     return total + itemPrice * item.quantity;
  //   }, 0);
  // };
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = Number(item.price);
      return total + itemPrice * item.quantity;
    }, 0);
  };

  // const getTotalPrice = () => {
  //   return cartItems.reduce((total, item) => {
  //     const price = typeof item.price === 'number' ? item.price : parseFloat(item.price);
  //     return total + price * item.quantity;
  //   }, 0);
  // };
  // console.log("Cart Items:", cartItems)


  // const getTotalPrice = () => {
  //   return cartItems.reduce((total, item) => {
  //     return total + item.price * item.quantity;
  //   }, 0);
  // };

  // const getTotalPrice = () => {
  //   return cartItems.reduce((total, item) => {
  //     return total + item.price * item.quantity;
  //   }, 0);
  // };
  // 

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, increaseQty, decreaseQty, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
