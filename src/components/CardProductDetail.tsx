"use client";

import useProductDetail from "@hook/useProductDetail";
import Utils from "@lib/utils";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { Carousel } from "./Carousel";
import LoadingCardProductDetail from "./Loading/LoadingCardProductDetail";

const CardProductDetail = (props: { id: number }) => {
  const { product, loading } = useProductDetail(props.id);

  return (
    <section className="container-padding">
      {loading ? (
        <LoadingCardProductDetail />
      ) : (
        <>
          <Link href="/">
            <button className="mb-5 btn-secondary">
              <p className="flex-center gap-4">
                <FiArrowLeft size={"1.5em"} />
                Home
              </p>
            </button>
          </Link>

          <div className="cardproduct_detail_container">
            <figure className="cardproduct_detail_figure">
              <Carousel images={product?.images} />
            </figure>

            <figcaption className="cardproduct_detail_figcaption">
              <h1 className="text-lg">{product.title}</h1>

              <p className="cardproduct_detail_price">
                <span className="label">{product.category.name}</span>
                <span className="text-xs">
                  $<span className="text-xl font-bold">{product.price}</span>
                </span>
              </p>

              <p className="mt-2 text-xs">{product.description}</p>
              <p className="mt-1 text-[0.65rem]">
                ~ {Utils.formatDate(product.creationAt, product.updatedAt)}
              </p>

              <button className="w-full mt-5 btn">Buy Now</button>
            </figcaption>
          </div>
        </>
      )}
    </section>
  );
};

export default CardProductDetail;
