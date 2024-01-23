import Utils from "@lib/utils";
import CartType from "@type/cart.type";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const CardCart = (props: CartType) => {
  return (
    <Link href={`/store/${props.id}`}>
      <div className="border-l border-r border-b border-black flex-center justify-between hover:bg-neutral-100 group transition duration-500">
        <div className="flex-center justify-start gap-5 ">
          <figure className="w-[100px] h-[80px] overflow-hidden border-r border-black">
            <Image
              src={Utils.fixUrlImg(props.image)}
              alt="thumbnail"
              width={100}
              height={100}
              quality={80}
            />
          </figure>

          <figcaption>
            <h1 className="text-xs overflow-hidden truncate w-[140px] sm:w-full">
              {props.title}
            </h1>
            <p>
              <span className="text-xs">$</span>
              <span className="text-xl font-bold">{props.price}</span>
            </p>
          </figcaption>
        </div>

        <div className="pr-4 opacity-0 group-hover:opacity-100 transition duration-500">
          <FiChevronRight className="" />
        </div>
      </div>
    </Link>
  );
};

export default CardCart;
