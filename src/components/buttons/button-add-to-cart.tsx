import { isMatchTitle } from "@helper/common";
import useCart from "@lib/zustand/cart";
import CartType from "@type/cart.type";

type SettingsType = {
  WIDE_BUTTONS_IN_FULL_OR_NOR: string;
  DATA_HAS_BEEN_SAVED_BUTTON_WILL_DISABLED: boolean;
  DATA_HAS_BEEN_SAVED_BUTTON_WILL_STYLE_DISABLED: string;
};

const ButtonAddToCart = ({
  cart,
  isFull,
  index,
}: {
  cart: CartType;
  isFull?: boolean;
  index: number;
}) => {
  const carts = useCart((state: any) => state.cart.data);
  const addToCart = useCart((state: any) => state.addCart);
  const IS_STORED_IN_CART: boolean = isMatchTitle(carts, cart.title);

  const settings: SettingsType = {
    WIDE_BUTTONS_IN_FULL_OR_NOR: isFull ? "w-full" : "w-auto",
    DATA_HAS_BEEN_SAVED_BUTTON_WILL_DISABLED: IS_STORED_IN_CART,
    DATA_HAS_BEEN_SAVED_BUTTON_WILL_STYLE_DISABLED: IS_STORED_IN_CART
      ? "cursor-not-allowed bg-neutral-200 border-neutral-200 text-black/60"
      : "",
  };

  return (
    <button
      id={`btn__add__to__cart__${index}`}
      className={`btn ${settings.WIDE_BUTTONS_IN_FULL_OR_NOR} ${settings.DATA_HAS_BEEN_SAVED_BUTTON_WILL_STYLE_DISABLED}`}
      onClick={() =>
        addToCart({
          id: cart.id,
          image: cart.image,
          title: cart.title,
          price: cart.price,
        })
      }
      disabled={settings.DATA_HAS_BEEN_SAVED_BUTTON_WILL_DISABLED}
    >
      Add to Cart
    </button>
  );
};

export default ButtonAddToCart;
