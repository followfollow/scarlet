"use client";

import { createContext, useContext, useState, ReactNode, useMemo } from "react";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: string) => void;
  updateItemQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  totalPrice: number;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItem = (item: MenuItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== itemId));
  };

  const updateItemQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((i) => (i.id === itemId ? { ...i, quantity } : i))
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.price) * item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        updateItemQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
