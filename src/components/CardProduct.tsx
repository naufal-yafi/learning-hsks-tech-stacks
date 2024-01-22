import ProductType from "@type/product.type";
import Image from "next/image";

const CardProduct = (props: ProductType) => {
  return (
    <div className="w-full border-b border-r border-black">
      <figure>
        <Image src={props.images[0]} alt="product image" />
      </figure>
      <figcaption className="px-5 py-5">
        <h1 className="text-lg">{props.title}</h1>
        <p className="text-xs">{props.description}</p>

        <div className="mt-3 flex gap-3 justify-start items-center">
          <h2>
            <span className="text-xs">$</span>{" "}
            <span className="font-bold">{props.price}</span>
          </h2>

          <button className="btn bg-black text-white">Buy Now</button>
        </div>
      </figcaption>
    </div>
  );
};

export default CardProduct;
