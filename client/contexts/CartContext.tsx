import React, { createContext, useContext, useReducer, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  category: "coffee" | "food" | "specialty";
  size?: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | {
      type: "ADD_ITEM";
      payload: Omit<CartItem, "quantity"> & { quantity?: number };
    }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" };

const CartContext = createContext<
  | {
      state: CartState;
      dispatch: React.Dispatch<CartAction>;
    }
  | undefined
>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const newItem = {
        ...action.payload,
        quantity: action.payload.quantity || 1,
      };
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id && item.size === newItem.size,
      );

      let newItems;
      if (existingItemIndex > -1) {
        newItems = [...state.items];
        newItems[existingItemIndex].quantity += newItem.quantity;
      } else {
        newItems = [...state.items, newItem];
      }

      const newTotal = newItems.reduce((total, item) => {
        const price = parseInt(item.price.replace("₹", ""));
        return total + price * item.quantity;
      }, 0);

      return { items: newItems, total: newTotal };
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.id !== action.payload);
      const newTotal = newItems.reduce((total, item) => {
        const price = parseInt(item.price.replace("₹", ""));
        return total + price * item.quantity;
      }, 0);
      return { items: newItems, total: newTotal };
    }

    case "UPDATE_QUANTITY": {
      const newItems = state.items
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item,
        )
        .filter((item) => item.quantity > 0);

      const newTotal = newItems.reduce((total, item) => {
        const price = parseInt(item.price.replace("₹", ""));
        return total + price * item.quantity;
      }, 0);

      return { items: newItems, total: newTotal };
    }

    case "CLEAR_CART":
      return { items: [], total: 0 };

    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
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
