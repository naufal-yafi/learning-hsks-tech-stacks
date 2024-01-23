import CartType from "@type/cart.type";
import Image from "next/image";

const CardCart = (props: CartType) => {
  return (
    <div className="border-l border-r border-b border-black flex-center justify-start gap-5">
      <figure className="w-[100px] h-[80px] overflow-hidden border-r border-black">
        <Image
          src={props.image}
          alt="thumbnail"
          width={100}
          height={100}
          quality={80}
        />
      </figure>

      <figcaption>
        <h1 className="text-xs">{props.title}</h1>
        <p>
          <span className="text-xs">$</span>
          <span className="text-xl font-bold">{props.price}</span>
        </p>
      </figcaption>
    </div>
  );
};

export default CardCart;
