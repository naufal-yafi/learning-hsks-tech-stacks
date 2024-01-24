import Utils from "@lib/utils";
import useCart from "@lib/zustand/cart";
import CartType from "@type/cart.type";

const ButtonAddToCart = ({
  cart,
  isFull,
}: {
  cart: CartType;
  isFull?: boolean;
}) => {
  const carts = useCart((state: any) => state.cart.data);
  const addToCart = useCart((state: any) => state.addCart);
  const MATCH: boolean = Utils.isMatchTitle(carts, cart.title);

  return (
    <button
      id="btn__add__to__cart"
      className={`btn ${isFull ? "w-full" : "w-auto"} ${
        MATCH
          ? "cursor-not-allowed bg-neutral-200 border-neutral-200 text-black/60"
          : ""
      }`}
      onClick={() =>
        addToCart({
          id: cart.id,
          image: cart.image,
          title: cart.title,
          price: cart.price,
        })
      }
      disabled={MATCH}
    >
      Add to Cart
    </button>
  );
};

export default ButtonAddToCart;
