import React from "react";
import { subject } from "@/data/footerlist";
import star from "../../../public/img/image/star.svg"
import btn02 from "../../../public/img/image/btn02.svg"
import bb3d from "../../../public/img/image/bb3d.png"
import appstore from "../../../public/img/image/appstore.svg"
import google from "../../../public/img/image/google.svg"
import { Linklist } from "@/data/linklist";
import app from "../../../public/img/image/app.svg"
import gradient from "../../../public/img/image/gradient.png"


export function Footer() {
  return (
    <section className=" bg-[black] w-full py-5 flex flex-col items-center justify-center relative ">
      <div className="gap-5 py-10 grid grid-cols-1 md:grid-cols-7">
        <div className="flex min-w-[22rem] justify-center items-center col-span-3 md:justify-end">
          <p className="text-white text-xl font-medium">See our</p>
          <div className="mx-2" role="status">
            <svg aria-hidden="true" className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          <p className="text-white text-xl font-medium">reviews on</p>
          <img className="mx-1" src={star} alt="..."/>
          <p className="text-white text-xl font-medium"> Trustpilot</p>
          <div className="h-6 w-1 bg-white mx-4 lg-max:hidden"/>
        </div>
        <button className=" relative w-full flex justify-center items-center hover:brightness-125 active:brightness-100 min-w-[13rem]">
          <p className=" absolute text-white">BEST CHANGE</p>
          <img className="block" src={btn02} alt="..."/>
        </button>
        <div className="flex justify-center items-right md:justify-start  col-span-3">
          <div className="flex mx-5 min-w-[19rem]">
            <p className="text-white text-xl font-medium">Buy & sell crypto:</p>
            <img className="mx-3 w-8 h-8" src={bb3d} alt="..."/>
            <p className="text-white text-xl font-medium">VISA</p>
          </div>
        </div>
      </div>
      <div className="justify-center items-center gap-5 py-10 w-[70%] grid grid-cols-1 md:grid-cols-3 z-50">
        <button  className="flex justify-center md:justify-end hover:brightness-150 active:brightness-100" >
          <img src={appstore} alt="..."/>
        </button>
        <button  className="flex justify-center md:justify-center hover:brightness-150 active:brightness-100" >
          <img className="flex justify-center" src={google} alt="..."/>
        </button>
        <button  className="flex justify-center md:justify-start hover:brightness-150 active:brightness-100" >
          <img className="flex justify-center" src={app} alt="..."/>
        </button>
      </div>
      <div className="flex gap-4 my-16 z-50">
        {Linklist.map((item)=>(
            <a href={`${item.link}`}>
              <img className="flex justify-center hover:brightness-150 active:brightness-100" src={item.name} alt="..."/>
            </a>
        ))}
      </div>
      <div className=" relative flex items-center justify-end px-3 my-10 w-1/3 min-w-[340px] ">
        <input placeholder="Email Address" className="w-full bg-[#323234] text-xl text-white p-5 rounded-lg active:border-none focus:outline-none"/>
        <button className="absolute bg-[#6C5DD3] text-white text-base font-['Outfit'] h-[80%] px-7 py-3 mx-1 rounded-md hover:brightness-150 active:brightness-100">SUBMIT</button>
      </div>
      <div className="flex gap-3 my-10 md:gap-28 ">
        {subject.map((items)=>(
          <div className="flex flex-col gap-5">
            <p className=" text-base text-white font-semibold">{items.name}</p>
            {items.title.map((item)=>(
              <p className="font-['Outfit'] text-[#7B56FB] font-normal  text-xs md:text-base ">{item.list}</p>
            ))}
          </div>
        ))}           
      </div>
    </section>
  )
}

