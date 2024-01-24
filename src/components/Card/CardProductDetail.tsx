"use client";

import ButtonAddToCart from "@button/ButtonAddToCart";
import ButtonBackToHome from "@button/ButtonBackToHome";
import { Carousel } from "@component/List/Carousel";
import useProductDetail from "@hook/useProductDetail";
import Utils from "@lib/utils";
import LoadingCardProductDetail from "@skeleton/LoadingCardProductDetail";
import React from "react";

const CardProductDetail = ({ id }: { id: number }) => {
  const { product, loading } = useProductDetail(id);

  return (
    <div id="card__product__detail">
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

              <div className="w-full mt-5">
                <ButtonAddToCart
                  cart={{
                    id: Number(product.id),
                    image: product.images[0],
                    price: product.price,
                    title: product.title,
                  }}
                  isFull
                />
              </div>
            </figcaption>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default CardProductDetail;
