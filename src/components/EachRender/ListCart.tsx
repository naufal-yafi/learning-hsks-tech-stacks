import CardCart from "@component/Card/CardCart";
import EachRender from "@lib/EachRender";
import Utils from "@lib/utils";
import CartType from "@type/cart.type";
import React from "react";

const ListCart = (props: { carts: CartType[] }) => {
  return (
    <React.Fragment>
      <section id="section__list__cart" className="container-padding">
        <EachRender
          of={props.carts}
          render={(cart: CartType) => (
            <CardCart
              key={cart.id}
              id={cart.id}
              image={cart.image}
              title={cart.title}
              price={cart.price}
            />
          )}
        />
      </section>

      <section id="section__total__card__price" className="container-padding">
        <div className="p-4 border-l border-r border-b border-black flex-center flex-col items-end">
          <h2 className="flex-center flex-col mb-3">
            <span className="text-xs">TOTAL</span>
            <span className="text-xl font-bold">
              <span className="text-xs font-normal">$</span>
              {Utils.countPrice(props.carts)}
            </span>
          </h2>

          <button className="btn">Purchase</button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ListCart;
