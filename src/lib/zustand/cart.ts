import CartType from "@type/cart.type";
import { create } from "zustand";

const useCart = create((set) => ({
  cart: {
    data: [],
  },
  addCart: (newCart: CartType) =>
    set((state: { cart: { data: CartType[] } }) => ({
      cart: {
        data: [...state.cart.data, newCart],
      },
    })),
}));

export default useCart;
