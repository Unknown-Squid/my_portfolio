"use client";
import React from "react";
import {
  CloseOutlined,
  ArrowBackOutlined,
  ReplayOutlined,
  ErrorOutline,
  StarOutline,
  BookmarkBorder,
  AccountCircle,
  MoreHoriz
} from "@mui/icons-material";
import Image from "next/image";
import PortfolioView from "./PortfolioView";

const WebsiteCard = () => {

  const positionsTop = [150, 450, 750, 1050]; 
  const positionsBottom = [110, 220, 330, 440]; 

  return (
    <div
      className="bg-black/[.2] w-[600px] h-full mt-20 rounded-[25px] flex justify-center relative"
      style={{ boxShadow: "-15px 20px 8px rgba(0, 0, 0, 0.5)" }}
    >
        <div className="bg-transparent w-full h-full rounded-[25px] flex justify-center overflow-hidden">

            <div className="felx flex-col border border-zinc-900/[.8] w-[70%] h-[70%] mt-14 rounded-[10px] overflow-hidden relative overflow-visible">

                <div className="flex w-full h-[5%] bg-zinc-900/[.8] rounded-t-[10px]">
                    <div className="w-[120px] h-[20px] rounded-t-[10px] bg-zinc-600 p-1 justify-between flex items-end px-2">
                        <p className="text-white text-[8px] flex items-center gap-1">
                        <Image
                            src={"/favicon.ico"}
                            width={500}
                            height={500}
                            className="w-[8px] h-[8px]"
                            alt="ulr icon"
                        />
                        Unknown Squid
                        </p>
                        <CloseOutlined
                        className="text-white/[.8]"
                        style={{ fontSize: "10px" }}
                        />
                    </div>
                </div>

                <div className="flex w-full h-[5%] bg-zinc-600 p-1 gap-2">
                    <div className="flex gap-2 text-white/[.8] items-center ms-1">
                        <ArrowBackOutlined style={{ fontSize: "12px" }} />
                        <ReplayOutlined style={{ fontSize: "12px" }} />
                    </div>

                    <div className="flex-1 h-full flex justify-between items-center rounded-[25px] bg-zinc-900/[.8] px-2">
                        <p className="text-[6px] text-white flex gap-2 items-center">
                        <ErrorOutline
                            className="text-white/[.8]"
                            style={{ fontSize: "8px" }}
                        />
                        localhost:3000
                        </p>
                        <StarOutline
                        className="text-white/[.8]"
                        style={{ fontSize: "8px" }}
                        />
                    </div>

                    <div className="flex gap-2 text-white/[.8] items-center">
                        <BookmarkBorder style={{ fontSize: "12px" }}/>
                        <AccountCircle style={{ fontSize: "12px" }}/>
                        <MoreHoriz style={{ fontSize: "12px" }}/>
                    </div>
                </div>

                <div className="w-full h-[90%] flex overflow-hidden rounded-b-[10px]">
                    <PortfolioView/>
                </div>


                <div className='bg-black w-[15px] h-[18%] absolute top-[100%] left-[50%] rounded-bl-[10px] flex overflow-visible items-end'>

                    <div className='bg-black w-[15px] h-[18%] relative rounded-bl-[10px]'>
                        <div className='bg-black w-[1900%] h-full absolute top-0 left-0 rounded-bl-[10px] rounded-tr-[10px] flex justify-end items-end'>
                            <div className='bg-black w-[22%] h-[30%] relative rounded-[10px] relative'>
                                {positionsTop.map((topValue, index) => (
                                    <div
                                        key={index}
                                        className={`bg-black h-[200%] absolute ${index > 2 ? "w-[118%]" : "w-full"} left-0 rounded-[10px]`}
                                        style={{ top: `${topValue}%` }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className={`bg-black h-[1.8%] w-[5%] absolute bottom-[-0.5%] right-[-2.2%] rounded-tl-[30px] rounded-br-[10px] rounded-tr-[2px] rotate-[30deg] flex justify-end`}>
            <div className="flex relative w-[50%] h-full">
                <div className="bg-black h-[79%] w-[150%] absolute bottom-[48.5%] left-[60%] rounded-tl-[30px] rounded-bl-[5px] rounded-r-[10px] rotate-[-30deg] flex justify-end">

                    <div className="flex relative w-[50%] h-full ">
                        <div className="flex absolute top-0 left-[70%] w-[970%] h-full bg-black rounded-r-[10px] flex justify-end">

                            <div className='bg-black w-[50%] h-full relative rounded-[10px] relative'>
                                {positionsBottom.map((bottomValue, index) => (
                                    <div
                                        key={index}
                                        className={`bg-black h-full absolute ${index > 2 ? "w-[118%]" : "w-full"} left-0 rounded-[10px] flex justify-end`}
                                        style={{ bottom: `${bottomValue}%` }}
                                    >
                                        {index > 2 ?
                                            <div className='w-[50%] h-full relative rounded-[10px] relative'>
                                                <div className="bg-black w-[20%] h-[475%] absolute left-[80%] top-[20%] rounded-t-[10px]">

                                                </div>
                                            </div> : null
                                        }
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  );
};

export default WebsiteCard;
