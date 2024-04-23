import { countPrice } from "@helper/common";
import CartType from "@type/cart.type";

export function TotalCart({ carts }: Readonly<{ carts: CartType[] }>) {
  return (
    <div id="total__cart" className="container-padding">
      <div className="p-4 border-l border-r border-b border-black flex-center flex-col items-end">
        <h2 className="flex-center flex-col mb-3">
          <span className="text-xs">TOTAL</span>
          <span className="text-xl font-bold">
            <span className="text-xs font-normal">$</span>
            {countPrice(carts)}
          </span>
        </h2>

        <button className="btn">Purchase</button>
      </div>
    </div>
  );
}
