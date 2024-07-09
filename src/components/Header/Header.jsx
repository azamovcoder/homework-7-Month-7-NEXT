"use client";

import "./Header.scss";

import React, { useState } from "react";

import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import LogoImg from "@/app/assets/logo.svg";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        onClick={() => setShow((p) => false)}
        className={`overlay ${show ? "overlay-show" : ""} `}
      ></div>
      <header className="container  header ">
        <div className="header__logo">
          <Image alt="logo.svg" src={LogoImg} />
        </div>
        <ul className={`header__list ${show ? "show" : ""}`}>
          <li>Discovery</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
        <div className="header__buttons">
          <button>
            <FaRegUser />
          </button>
          <button>
            <IoCartOutline />
          </button>
          <button onClick={() => setShow((p) => !p)} className="header__bar">
            <FaBarsStaggered />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
