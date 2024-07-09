"use client";

import "./SinglePage.scss";

import Image from "next/image";
import { Products__API } from "@/app/static/static";
import React from "react";
import { useParams } from "next/navigation";

const SinglePage = () => {
  const { id } = useParams();
  console.log(id);
  const product = Products__API.find((prod) => prod.id === parseInt(id));
  console.log("Product:", product); // Debugging log

  return (
    <div>
      <div className="singlePage container">
        <div className="singlePage__img">
          <Image alt="product.png" src={product.img} />
          <h3>
            All hand-made with natural soy wax, Candleaf is made for your
            pleasure moments.
          </h3>
          <p>🚚 FREE SHIPPING</p>
        </div>
        <div className="singlePage__info">
          <h2>{product.title}</h2>
          <div className="singlePage__info__price">
            <p>{product.price}</p>
            <span>Quality</span>
            <div className="singlePage__info__price__button">
              <button>+</button>
              <span>1</span>
              <button>-</button>
            </div>
          </div>
          <div className="singlePage__info__radio">
            <div className="singlePage__info__radio__top">
              <p>One time purchase</p>
              <p>
                Subscribe now and get the 10% of discount on every recurring
                order. The discount will be applied at checkout. See details
              </p>
            </div>
            <button>+ Add to cart</button>
          </div>
          <div className="singlePage__info__bottom">
            <p>
              <b> Wax:</b> Top grade Soy wax that delivers a smoke less,
              consistent burn
            </p>
            <p>
              <b> Fragrance:</b> Premium quality ingredients with natural
              essential oils
            </p>
            <p>
              <b>Burning Time:</b> 70-75 hours <b>Dimension:</b> 10cm x 5cm
              <b>Weight:</b> 400g
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;