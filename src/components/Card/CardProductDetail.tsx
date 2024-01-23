"use client";

import ButtonBackToHome from "@component/ButtonBackToHome";
import { Carousel } from "@each_render/Carousel";
import useProductDetail from "@hook/useProductDetail";
import Utils from "@lib/utils";
import useCart from "@lib/zustand/cart";
import LoadingCardProductDetail from "@skeleton/LoadingCardProductDetail";
import React from "react";

const CardProductDetail = (props: { id: number }) => {
  const { product, loading } = useProductDetail(props.id);
  const carts = useCart((state: any) => state.cart.data);
  const addToCart = useCart((state: any) => state.addCart);

  return (
    <section id="section__product__detail" className="container-padding">
      {loading ? (
        <LoadingCardProductDetail />
      ) : (
        <React.Fragment>
          <ButtonBackToHome />

          <div
            id="card__product__detail"
            className="cardproduct_detail_container"
          >
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

              <button
                className={`w-full mt-5 btn ${
                  Utils.isMatchTitle(carts, product.title)
                    ? ""
                    : "bg-neutral-200 border-neutral-200 text-black"
                }`}
                onClick={() => {
                  addToCart({
                    id: product.id,
                    image: product.images[0],
                    title: product.title,
                    price: product.price,
                  });
                }}
              >
                Add to Cart
              </button>
            </figcaption>
          </div>
        </React.Fragment>
      )}
    </section>
  );
};

export default CardProductDetail;
