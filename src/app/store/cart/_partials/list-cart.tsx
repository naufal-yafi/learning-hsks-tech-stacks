import { CardCart } from "@card/card-cart";
import { EachRender } from "@lib/common";
import CartType from "@type/cart.type";

export function ListCart({ carts }: Readonly<{ carts: CartType[] }>) {
  return (
    <div id="list__cart" className="container-padding">
      <EachRender
        of={carts}
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
    </div>
  );
}
