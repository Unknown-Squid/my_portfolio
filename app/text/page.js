"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./page.css";
export default function Home() {


  useEffect(() => {
  
  let count = 0;
            for (let i = 1; i < 6; i++){
              count += 1;
              const span = document.getElementById(`image${i}`);
              span.style.transform = `rotateY(calc(${count} * 45deg)) translateZ(380px)`
            }
    })

  return (

    <div className="gallery flex justify-center items-center w-full h-full">
            <span id="image1">
              <img src="vbNet.png" />
            </span>
            <span id="image2">
              <img src="vbNet.png" />
            </span>
            <span id="image3">
              <img src="vbNet.png" />
            </span>
            <span id="image4">
              <img src="vbNet.png" />
            </span>
            <span id="image5">
              <img src="vbNet.png" />
            </span>
        </div>
  );
}
