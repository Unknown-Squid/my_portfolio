'use client'; 
import React, { useRef, useEffect } from 'react';

const Loading = () => {
  const videoRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video && !hasStarted.current) {
      hasStarted.current = true;
      video.currentTime = 0;
      video.play().catch(() => {
        // Handle autoplay restrictions silently
      });
    }
  }, []);

  return (
    <div className='fixed inset-0 w-screen h-screen bg-black flex items-center justify-center overflow-hidden z-[9999]'>
      <video 
        ref={videoRef}
        className='w-full h-full object-contain'
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/animation/big-screen-loader.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Loading
