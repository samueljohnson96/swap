import React from "react";
import { useState } from "react";
import loop from "../../public/img/image/loop.png"
import GooglePlay from "../../public/img/image/GooglePlay.svg" 
import appstoreR from "../../public/img/image/appstoreR.svg" 
import thurstpilot from "../../public/img/image/thurstpilot.svg" 
import gradient from "../../public/img/image/gradient.png"
import video from "../../public/img/image/video.jpg"
import arrow from "../../public/img/image/arrow.svg"
import btc from "../../public/img/coin/btc.svg"
import eth from "../../public/img/coin/eth.svg"
import { Step_info } from "@/data/cariousal-data";
import { Questions } from "@/data/questions";
export function How() {
  const num = Step_info.length;
  const [previewindex, setPreviewindex] = useState(0);
 console.log(num);
  return (
    <div className="bg-black w-full px-4 flex flex-col justify-center items-center  pt-[13%]">
      <img className="absolute top-0 left-0 w-1/2 z-0" src={loop} alt="..."/>
      <img className="absolute top-20 right-0 w-1/2 opacity-20 brightness-150 z-0" src={gradient} alt="..."/>
      <div className=" relative flex justify-center items-center flex-col w-[80%] py-10 gap-10">
        <section className="items-center justify-center grid grid-cols-1 md:grid-cols-5 ">
          <p className="text-3xl font-bold text-white mb-8 md:col-span-2 md:text-6xl">How it works</p>
          <div className=" col-span-3 md:col-span-3 ">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <button>
                <img className="hover:brightness-125 active:brightness-100" src={GooglePlay} alt="...."/>
              </button>
              <button>
                <img className="hover:brightness-125 active:brightness-100" src={thurstpilot} alt="...."/>
              </button>
              <button>
                <img className="hover:brightness-125 active:brightness-100" src={appstoreR} alt="...."/>
              </button>
            </div>
          </div>
        </section>
        <section className="">
          <div className="justify-center items-center gap-10 place-items-center grid grid-cols-1 md:grid-cols-3 ">
            <div className="bg-[#1C1C1C] bg-opacity-50 p-5 rounded-3xl gap-5 w-[20rem] h-[28rem] relative md:col-span-1">
              <div className="w-[18rem] h-[22rem] relative">
                <div className="absolute duration-500">
                  <p className="text-white text-xl font-normal font-['Outfit'] ease-in-out mb-3"><span>step</span>{previewindex+1}</p>
                  <p className="text-white text-3xl font-thin font-['Outfit']  mb-3">{Step_info[previewindex].title}</p>
                  <p className="text-white text-xl font-thin font-['Outfit']  mb-3">{Step_info[previewindex].text}</p>
                </div>
              </div>
              <div className=" flex w-full gap-3 mb-3">
                {Step_info.map((item, index)=>(
                  <button className={`${ previewindex===index ? 'opacity-100':'opacity-50'} duration-100 hover:brightness-125 active:brightness-100`} onClick={e=>(setPreviewindex(index))}>
                    <div className="bg-white w-10 h-1"/>
                  </button>
                ))}
              </div>
              <p className="text-white"><span>{previewindex+1}</span>/<span>{num}</span></p>
            </div>
            <img className="w-full md:col-span-2" src={Step_info[previewindex].img} alt="..."/>
          </div>
        </section>
        <section>
          <div className="justify-center items-center gap-10 p-5 place-items-center grid grid-cols-1 md:grid-cols-3 ">
            <img className="w-full md:col-span-2 rounded-3xl" src={video} alt="..."/>
            <div className="bg-[#1C1C1C] bg-opacity-50 p-8 rounded-3xl gap-5 w-[20rem] relative md:col-span-1">
              <p className="text-white text-3xl font-thin font-['Outfit']  mb-5"> Watch a tutorial Detailed Video Guide</p>
              <div className="flex items-center gap-3 mb-5">
                <img src={btc} alt="..."/>
                <p className="text-white text-2xl">BTC</p>
                <img src={arrow} alt="..."/>
                <img src={eth} alt="..."/>
                <p className="text-white text-2xl">ETH</p>
              </div>
              <p className="text-white text-xl font-thin font-['Outfit']  mb-3"> You are welcome to learn more about every step of the crypto exchange on SimpleSwap. Find all the necessary instructions in this video.</p>
            </div>
          </div>
        </section>
        <section className="p-1 md:p-5">
          <p className="text-white text-4xl font-thin font-['Outfit'] mb-5">Related Questions</p>
          <div className="grid grid-cols-1 p-1 md:grid-cols-2 md:p-10">
            {Questions.map((item)=>(
              <p className="text-white text-2xl font-thin font-['Outfit'] mb-5">{item.question}</p>
            ))}
          </div>  
        </section>
      </div>
    </div>
  );
}

export default How;
