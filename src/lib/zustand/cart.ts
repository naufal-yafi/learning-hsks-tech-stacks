import CartType from "@type/cart.type";
import { create } from "zustand";

const useCart = create((set) => ({
  cart: [
    {
      id: 1,
      image: "asdsa",
      title: "asdasd",
      price: 12,
    },
  ],
  addCart: (newCart: CartType) =>
    set((state: { cart: CartType[] }) => ({
      cart: [...state.cart, newCart],
    })),
}));

export default useCart;
