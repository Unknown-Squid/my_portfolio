"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie - only loads when explicitly needed
const Lottie = dynamic(
  () => import("lottie-react"),
  { 
    ssr: false,
  }
);

const Loading = () => {
  const [mounted, setMounted] = useState(false);
  const [loadLottie, setLoadLottie] = useState(false);
  const [animationData, setAnimationData] = useState(null);
  
  useEffect(() => {
    setMounted(true);
    
    // Defer Lottie loading - only load if loader is shown for more than 100ms
    const loadLottieTimer = setTimeout(() => {
      setLoadLottie(true);
      // Load the animation data
      fetch("/animation/big-screen-loader.json")
        .then(res => res.json())
        .then(data => setAnimationData(data))
        .catch(err => {
          console.error('Error loading animation:', err);
        });
    }, 100);
    
    return () => clearTimeout(loadLottieTimer);
  }, []);

  // Show black screen while loading
  if (!mounted || !loadLottie || !animationData) {
    return (
      <div className="flex justify-center items-center w-full h-full fixed top-0 left-0 bg-black z-[9999]"></div>
    );
  }

  // Load Lottie animation after delay
  return (
    <div className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-black z-[9999]">
      <div className="w-[800px] h-[800px] max-w-[90vw] max-h-[90vh] relative flex items-center justify-center">
        <Lottie 
          animationData={animationData}
          loop 
          autoplay 
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default Loading;
