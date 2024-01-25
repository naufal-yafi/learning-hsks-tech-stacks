"use client";

import TotalCart from "@component/TotalCart";
import useCart from "@lib/zustand/cart";
import ListCart from "@list/ListCart";
import React from "react";

export default function ListShop() {
  const carts = useCart((state: any) => state.cart.data);

  return (
    <React.Fragment>
      <section id="section__cart__list">
        <ListCart carts={carts} />
      </section>

      <section id="section__cart__total">
        <TotalCart carts={carts} />
      </section>
    </React.Fragment>
  );
}
