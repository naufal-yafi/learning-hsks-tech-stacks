import Link from "next/link";
import { Carousel } from "./Carousel";

const CardProduct = (props: {
  id: number | string;
  images: string[];
  title: string;
  description: string;
  price: number;
}) => {
  return (
    <div className="w-full border-b border-r border-black">
      <Link href={`/store/${props.id}`}>
        <figure className="min-w-0 flex">
          <Carousel images={props.images} />
        </figure>
      </Link>
      <figcaption className="px-5 py-5">
        <Link href={`/store/${props.id}`}>
          <h1 className="text-lg line-clamp-2 hover:underline">
            {props.title}
          </h1>
        </Link>

        <p className="text-xs line-clamp-4 mt-1">{props.description}</p>

        <div className="mt-5 flex gap-3 justify-start items-center">
          <h2>
            <span className="text-xs">$</span>
            <span className="font-bold text-xl">{props.price}</span>
          </h2>

          <button className="btn">Buy Now</button>
        </div>
      </figcaption>
    </div>
  );
};

export default CardProduct;
