"use client";

import useCart from "@lib/zustand/cart";
import { ListCart, TotalCart } from "./_partials";

export default function ListShop() {
  const carts = useCart((state: any) => state.cart.data);

  return (
    <>
      <section id="section__cart__list">
        <ListCart carts={carts} />
      </section>

      <section id="section__cart__total">
        <TotalCart carts={carts} />
      </section>
    </>
  );
}
