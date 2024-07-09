"use client";

import "./Products.scss";

import Image from "next/image";
import Link from "next/link";
import { Products__API } from "@/app/static/static";
import React from "react";

const Products = () => {
  console.log(Products__API);
  const ProductItem = Products__API.map((product) => (
    <div className="products__card" key={product?.id}>
      <div className="products__card__img">
        <Link href={`/product/${product.id}`}>
          <Image alt="product.png" src={product?.img} />
        </Link>
      </div>
      <div className="products__card__info">
        <h4>{product?.title}</h4>
        <p>{product?.price}$</p>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="products container">
        <h2>Products</h2>
        <p>Order it for you or for your beloved ones </p>
        <div className="products__cards">{ProductItem}</div>
      </div>
    </div>
  );
};

export default Products;
