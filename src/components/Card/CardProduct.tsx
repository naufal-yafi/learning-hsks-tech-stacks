import { Carousel } from "@each_render/Carousel";
import Link from "next/link";

const CardProduct = (props: {
  id: number | string;
  images: string[];
  title: string;
  description: string;
  price: number;
}) => {
  return (
    <div className="cardproduct__container">
      <Link href={`/store/${props.id}`}>
        <figure className="cardproduct__figure">
          <Carousel images={props.images} />
        </figure>
      </Link>
      <figcaption className="cardproduct__figcaption">
        <Link href={`/store/${props.id}`}>
          <h1 className="text-lg line-clamp-2 hover:underline">
            {props.title}
          </h1>
        </Link>

        <p className="mt-1 text-xs line-clamp-4">{props.description}</p>

        <div className="cardproduct__footer">
          <h2>
            <span className="text-xs">$</span>
            <span className="text-xl font-bold">{props.price}</span>
          </h2>

          <button className="btn">Buy Now</button>
        </div>
      </figcaption>
    </div>
  );
};

export default CardProduct;
