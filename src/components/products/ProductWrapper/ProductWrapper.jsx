"use client";

import "./ProductWrapper.scss";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductWrapper = ({ data, limit }) => {
  return (
    <>
      <div className="products container">
        <h2>Products</h2>
        <p>Order it for you or for your beloved ones </p>
        <div className="products__cards">
          {data?.products?.slice(0, limit).map((product) => (
            <div className="products__card" key={product?.id}>
              <div className="products__card__img">
                <Link href={`/product/${product.id}`}>
                  <Image
                    width={200}
                    height={200}
                    alt="product.png"
                    src={product?.images[0]}
                  />
                </Link>
              </div>
              <div className="products__card__info">
                <h4>{product?.title}</h4>
                <p>{product?.price}$</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductWrapper;
