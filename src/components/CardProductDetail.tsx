import useProductDetail from "@hook/useProductDetail";
import Utils from "@lib/utils";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { Carousel } from "./Carousel";
import LoadingCardProductDetail from "./Loading/LoadingCardProductDetail";

const CardProductDetail = (props: { id: number }) => {
  const { product, loading } = useProductDetail(props.id);

  return (
    <section className="px-6 lg:px-32">
      {loading ? (
        <LoadingCardProductDetail />
      ) : (
        <>
          <Link href="/">
            <button className="btn-secondary mb-5">
              <p className="flex justify-center items-center gap-4">
                <FiArrowLeft size={"1.5em"} />
                Back
              </p>
            </button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <figure className="w-full lg:w-[450px] h-[450px] overflow-hidden mb-5">
              <Carousel images={product?.images} />
            </figure>

            <figcaption className="flex flex-col items-start">
              <h1 className="text-lg">{product.title}</h1>

              <p className="flex justify-center items-center gap-4">
                <span className="text-xs px-2 py-1 rounded-full bg-neutral-200">
                  {product.category.name}
                </span>
                <span className="text-xs">
                  $<span className="font-bold text-xl">{product.price}</span>
                </span>
              </p>

              <p className="text-xs mt-2">{product.description}</p>
              <p className="text-[0.65rem] mt-1">
                ~ {Utils.formatDate(product.creationAt, product.updatedAt)}
              </p>

              <button className="btn w-full mt-5">Buy Now</button>
            </figcaption>
          </div>
        </>
      )}
    </section>
  );
};

export default CardProductDetail;
