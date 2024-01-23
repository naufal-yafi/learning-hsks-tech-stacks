"use client";

import ListCart from "@component/EachRender/ListCart";
import useCart from "@lib/zustand/cart";

export default function ListShop() {
  const carts = useCart((state: any) => state.cart.data);

  return <ListCart carts={carts} />;
}
