import "./Popular.scss";

import Image from "next/image";
import Link from "next/link";
import { Products__API } from "@/app/static/static";
import React from "react";

const Popular = () => {
  const productItems = Products__API?.slice(0, 4).map((product) => (
    <div className="popular__card" key={product?.id}>
      <div className="popular__card__img">
        <Link href={`/product/${product.id}`}>
          <Image alt="product.png" src={product?.img} />
        </Link>
      </div>
      <div className="popular__card__info">
        <h4>{product?.title}</h4>
        <p>{product?.price}$</p>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="popular container">
        <h2 className="popular__title">Popular</h2>
        <p className="popular__desc">
          Our top selling product that you may like
        </p>
        <div className="popular__cards">{productItems}</div>
      </div>
    </div>
  );
};

export default Popular;
