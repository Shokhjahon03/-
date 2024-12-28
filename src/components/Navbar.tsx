"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../imgs/img.webp";
import { Button } from "flowbite-react";
const Navbar = () => {
  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-30">
        <div className="container">
          <div className="w-full flex items-center justify-between bg-white">
            <Image
              className="w-[50px] rounded-lg lg:w-[70px]"
              src={logo}
              alt="alt"
            />
            <div className="flex items-center gap-6">
              <Link href={"/"} className="hover:text-blue-500">
                Log in
              </Link>
              <Button color="blue">Ro'yxatdan o'tish</Button>
            </div>
          </div>
        </div>
      </nav>
      <div className=" flex z-30  border-t-2 justify-around p-2 w-full fixed left-0  bottom-0  md:text-[20px] lg:text-[40px] bg-white">
        <Link className="" href={"/"}>
          <i className="bx text-blue-600 bx-home-alt hover:text-blue-500"></i>
        </Link>
        <Link className="" href={"/"}>
          <i className="bx text-blue-600 bx-intersect hover:text-blue-500"></i>
        </Link>
        <button className="">
          <i className="bx text-blue-600 bx-plus-circle hover:text-blue-500"></i>
        </button>
        <Link className="" href={"/"}>
          <i className="bx text-blue-600 bxl-product-hunt hover:text-blue-500"></i>
        </Link>
        <Link className="" href={"/"}>
          <i className="bx text-blue-600 bxs-user-account hover:text-blue-500"></i>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
