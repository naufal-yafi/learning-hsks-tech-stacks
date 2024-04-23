import { ButtonAddToCart } from "@button/button-add-to-cart";
import { Carousel } from "@list/carousel";
import Link from "next/link";

export function CardProduct({
  id,
  images,
  title,
  description,
  price,
}: Readonly<{
  id: number | string;
  images: string[];
  title: string;
  description: string;
  price: number;
}>) {
  return (
    <div id="card__product" className="cardproduct__container">
      <Link href={`/store/${id}`}>
        <figure className="cardproduct__figure">
          <Carousel images={images} />
        </figure>
      </Link>
      <figcaption className="cardproduct__figcaption">
        <div className="h-[95px] md:h-[125px] overflow-hidden">
          <Link href={`/store/${id}`}>
            <h1 className="text-lg line-clamp-2 hover:underline">{title}</h1>
          </Link>

          <p className="mt-1 text-xs line-clamp-4">{description}</p>
        </div>

        <div className="cardproduct__footer">
          <h2>
            <span className="text-xs">$</span>
            <span className="text-xl font-bold">{price}</span>
          </h2>

          <ButtonAddToCart
            cart={{
              id: Number(id),
              image: images[0],
              price: price,
              title: title,
            }}
            index={Number(id)}
          />
        </div>
      </figcaption>
    </div>
  );
}
