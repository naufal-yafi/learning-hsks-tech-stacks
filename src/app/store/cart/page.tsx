"use client";

import TotalCart from "@component/total-cart";
import useCart from "@lib/zustand/cart";
import ListCart from "@list/list-cart";
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
