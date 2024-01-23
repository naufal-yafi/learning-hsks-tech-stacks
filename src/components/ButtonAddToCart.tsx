import Utils from "@lib/utils";
import useCart from "@lib/zustand/cart";
import CartType from "@type/cart.type";

const ButtonAddToCart = (props: { cart: CartType; isFull?: boolean }) => {
  const carts = useCart((state: any) => state.cart.data);
  const addToCart = useCart((state: any) => state.addCart);
  const MATCH: boolean = Utils.isMatchTitle(carts, props.cart.title);

  return (
    <button
      className={`btn ${props.isFull ? "w-full" : "w-auto"} ${
        MATCH
          ? "cursor-not-allowed bg-neutral-200 border-neutral-200 text-black/60"
          : ""
      }`}
      onClick={() =>
        addToCart({
          id: props.cart.id,
          image: props.cart.image,
          title: props.cart.title,
          price: props.cart.price,
        })
      }
      disabled={MATCH}
    >
      Add to Cart
    </button>
  );
};

export default ButtonAddToCart;
