import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import loop from "../../public/img/image/loop.png"
import gradient from "../../public/img/image/gradient.png"
import hompage1 from "../../public/img/image/homepage1.png"
import coins from "../../public/img/image/coins.svg"
import arrow from "../../public/img/image/arrow.svg"
import { Swapcard } from "@/widgets/cards/swapcard";
import { Swapcard_data } from "@/data/swapcard-data";
import { Participate } from "@/widgets/cards/loyalty/participate-card";
import { Participate_data } from "@/data/loyalty/participate-data";
export function Loyalty() {
  return (
    <div className="bg-black w-full pt-[13%] flex flex-col justify-center items-center">
        <img className="absolute top-0 w-1/2 left-0 z-0" src={loop} alt="..."/>
        <img className="absolute top-20 w-1/2 right-0 opacity-20 brightness-150 z-0" src={gradient} alt="..."/>
      <div className=" relative flex justify-center items-center flex-col w-[80%] py-10 gap-10 z-50">
        <section className="grid place-content-center place-items-center grid-cols-1 md:grid-cols-2   my-10 gap-5">
          <div className=" flex flex-col gap-5">
            <p className=" text-white text-3xl md:text-6xl font-semibold leading-tight">SimpleSwap<br></br>Loyalty Program</p>
            <p className=" text-white text-base font-semibold">We are glad to offer our customers the clearest and easiest <br></br>way to receive extra crypto making exchanges on<br/> SimpleSwap.</p>
            <button className="w-32 py-1.5 bg-btnbg bg-cover rounded-full flex justify-center items-center border-4 shadow-2xl shadow-deep-purple-900  border-blue-100 outline outline-blue-900 hover:brightness-125 active:brightness-100">
              <p className="text-white text-lg font-medium ">Sign Up</p>
            </button>
          </div>
          <img src={hompage1}/>
        </section>
        <section  className=" relative w-[full] flex justify-center items-center gap-5 px-5 py-10 my-10">
          <div  className="inset-0 flex justify-center items-center gap-3 z-20  px-3 bg-no-repeat bg-chatbg">
            <img className="z-50 h-[calc(20vw_+_20px)] lg-max:hidden " src={coins} alt="..."/>  
            <div className="flex flex-col gap-5 z-20">
              <p className="text-white text-3xl font-bold md:text-6xl">Reasons to Get Involved</p> 
              <p className="text-white text-xl font-thin md:text-2xl leading-tight">You will earn cashback in SWAP for every operation made on our service. <br></br> Collect enough SWAP and upgrade your cashback subscription to receive BTC.</p> 
              <div className="flex gap-2 items-center">
                <button className="w-36 py-1.5 bg-btnbg bg-cover rounded-full flex justify-center items-center border-4 shadow-2xl shadow-deep-purple-900  border-blue-100 outline outline-blue-900 hover:brightness-125 active:brightness-100">
                  <p className="text-white text-lg font-medium ">Join Now</p>
                </button>
              </div>
            </div>
          </div> 
        </section>
        <section className="gap-8 grid grid-cols-1 xl:grid-cols-3 my-10  ">
          {Swapcard_data.map((item)=>(
            <Swapcard
              color={item.color}
              icon={item.icon}
              percent={item.percent}
              coin={item.coin}
              type={item.type}
              period={item.period}
              limit={item.limit}
              price={item.price}
              unit={item.unit}
            />
          ))}
        </section>
        <section className="flex flex-col items-center gap-9 my-10  ">
          <p className="text-white font-['outfit'] text-3xl md:text-6xl">Make exchanges and receive BTC</p>
          <p className="text-white text-xl md:text-2xl">Sign up and enjoy our Loyalty Program!</p>
        
          <button className="px-4 py-1.5 bg-btnbg bg-cover rounded-full flex justify-center items-center border-4 shadow-2xl shadow-deep-purple-900  border-blue-100 outline outline-blue-900 hover:brightness-125 active:brightness-100">
            <p className="text-white text-xl font-medium ">Get cashback</p>
          </button> 
        </section>
        <section className=" ">
          <div className="my-14">
            <p className="text-xl text-white font-normal leading-normal">Find out</p>
            <p className="text-white text-3xl md:text-6xl font-semibold leading-normal">How to participate</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 place-content-center place-items-start gap-10">
            {Participate_data.map((item)=>(
              <Participate
              icon={item.icon}
              title={item.title}
              text={item.text}
              />
            ))}
          </div>
        </section>
        <section  className=" relative flex justify-center items-center py-10  ">
          <div className="gap-5 z-20 py-5 px-3 grid grid-cols-1 xl:grid-cols-2">
            <p className="text-white text-3xl md:text-6xl font-semibold leading-normal">What is SWAP?</p>
            <div className="flex flex-col gap-5 z-20">
              <p className="text-white text-xl font-medium">SimpleSwap Coin (SWAP) is a utility token that serves as an internal currency for the SimpleSwap Loyalty Program. SWAP holders can get such benefits as BTC cashback subscription and unique branded items for crypto fans. More than 60,000 customers already enjoy SWAP advantages!</p> 
              <Link to = "/home">
                <div className="flex gap-2 items-center hover:brightness-150 active:brightness-100">
                  <p className="text-[#0F75FC] text-xl font-medium">Learn more</p> 
                  <img src={arrow} alt="..."/>
                </div>
              </Link>

            </div>
          </div> 
        </section>
        <section className="gap-10">
          <div className="bg-[#182630] py-6 px-4 rounded-2xl grid grid-cols-1 md:grid-cols-5 place-content-center place-items-center">
            <div className=" col-span-4">
              <p className="text-white text-2xl md:text-4xl py-4">Get BTC cashback with our Loyalty Program</p>
              <p className="text-white text-base md:text-xl py-4">Just create an account to see all<br></br> benefits.</p>
            </div>
            <button className="w-36 h-10 py-1.5 bg-btnbg bg-cover rounded-full flex justify-center items-center border-4 shadow-2xl shadow-deep-purple-900  border-blue-100 outline outline-blue-900 my-4 hover:brightness-125 active:brightness-100">
              <p className="text-white text-xl font-medium ">Join Us</p>
            </button> 
          </div>
        </section>
      </div>
    </div>
  );
}

export default Loyalty;
