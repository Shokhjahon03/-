"use client";

import { Carousel } from "flowbite-react";
import Navbar from "@/components/Navbar";
import { Button } from "flowbite-react";
export default function Home() {
  return (
    <div>
      <Navbar />
      <header className="w-full pt-[100px]">
        <div className="container">
          <div className="w-full flex-wrap flex gap-5 justify-between items-center">
            <div className="max-w-[400px]">
              <h1 className="text-[20px] font-medium mb-2">Get a Job</h1>
              <p className="text-[20px] mb-2">
                Ish beruvchi va ish qidiruvchi uchun qulay
              </p>
              <Button color="blue">Ish beruvchi qo'shish</Button>
            </div>
            <div className="h-56 max-w-[700px] w-full sm:h-64 xl:h-80 2xl:h-96">
              <Carousel>
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                  alt="..."
                />
              </Carousel>
            </div>
          </div>
        </div>
      </header>
      {/* <img
        className="fixed w-[100px] left-6 top-1/2 h-[100px]"
        src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-white-arrow-pointer-3d-symbol-png-image_10091233.png"
        alt="alt"
      />
      <img
        className="fixed w-[100px] left-10 top-1/3 h-[100px]"
        src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-white-arrow-pointer-3d-symbol-png-image_10091233.png"
        alt="alt"
      />
      <img
        className="fixed w-[100px] left-[100px] top-[500px] h-[100px]"
        src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-white-arrow-pointer-3d-symbol-png-image_10091233.png"
        alt="alt"
      />
      <img
        className="fixed w-[100px] left-6 top-1/2 h-[100px]"
        src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-white-arrow-pointer-3d-symbol-png-image_10091233.png"
        alt="alt"
      />
      <img
        className="fixed w-[100px] left-6 top-1/2 h-[100px]"
        src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-white-arrow-pointer-3d-symbol-png-image_10091233.png"
        alt="alt"
      />
      <img
        className="fixed w-[100px] left-6 top-1/2 h-[100px]"
        src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-white-arrow-pointer-3d-symbol-png-image_10091233.png"
        alt="alt"
      /> */}
    </div>
  );
}
