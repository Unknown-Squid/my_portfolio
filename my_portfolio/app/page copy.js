"use client"
import Image from "next/image";
import Navbar from "./Components/pages/Navbar";
import { motion } from "framer-motion";
import FadingInTextAnimation from "./Components/Animations/FadingInTextAnimation";
import SquidLibTextAnimation from "./Components/Animations/SquidLibTextAnimation";
import AnimatedButton from "./Components/Buttons/AnimatedButton";


export default function Home() {

  const charArray = ["S","Q","U","I","D","space","L","I","B"]

  return (
    <div className="bg-neutral-900 w-screen h-screen overflow-x-hidden overflow-y-auto">
      
      <main className="w-full h-fit flex flex-col">
        <div className="flex w-full h-screen items-center justify-center">

            <div className="w-[80%] h-[80%] bg-black/40 flex items-center justify-center rounded-xl shadow-[10px_10px_20px_rgba(0,0,0,0.5)] border border-white/20 backdrop-blur-sm">

              <div className="flex flex-col justify-center items-center w-1/2 h-full bg-transparent">
                <SquidLibTextAnimation charArray={charArray}/>
                <FadingInTextAnimation text={"My Personalized Library"}/>
                <AnimatedButton label={"Get Started"}/>
              </div>  

              <div className="flex h-full w-1/2 items-center justify-center">
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  className="w-full max-w-[600px] h-full max-h-[600px] aspect-square flex justify-center items-center rounded-[100%] bg-transparent overflow-hidden relative"
                  style={{
                    boxShadow: "0 20px 60px rgba(72, 208, 140, 0.4), 0 10px 20px rgba(0, 0, 0, 0.1)"
                  }}
                >
                    <video 
                      className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.5] rounded-[100%]" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                    >
                      <source src="/animation/squid-lib-bg-animation.mp4" type="video/mp4" />
                    </video>
                    <div 
                      className="w-[60%] h-[60%] rounded-[100%] flex justify-center items-center overflow-hidden absolute bg-transparent"
                    >
                      <Image
                        src={"/animation/squid-lib-animation.gif"}
                        width={500}
                        height={500}
                        alt="squid-lib-animation"
                        className="w-full h-full object-contain opacity-[0.6]"
                      />
                    </div>
                </motion.div>

              </div>

            </div>

        </div>



      </main>

    </div>
  );
}
