import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { exchangeItem, buyItem } from "@/data/senditems";
import Exchange from "@/widgets/cards/Crypto-Exchange";
import coin from "../../public/img/image/coin.png"
import arrow from "../../public/img/image/arrow.svg"
import loop from "../../public/img/image/loop.png"
import gradient from "../../public/img/image/gradient.png"
const tabsData = [      
  {
    list:exchangeItem
  },
  {
    list:buyItem
  },
];

export function Home() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
 
  return (
    <div className="bg-black w-full pt-[13%]">
      <div className="relative flex justify-center items-center flex-col w-full py-10">
        <section className="flex flex-col items-center gap-5">
          <p className="text-3xl font-medium text-white md:text-6xl">Crypto Exchange</p>
          <p className="text-lg font-medium text-white md:text-xl">Free from sign-up, limits, complications</p>
          <div className="flex gap-3">
            <button className={`font-medium text-white  ${activeTabIndex===0 ? 'opacity-100':'opacity-50'}`} onClick={e=>(setActiveTabIndex(0))}>
              <p className="text-xl font-medium text-white md:text-3xl">Crypto Exchange</p>
            </button>
            <div className="h-8 w-1 bg-white"/>
            <button className={`font-medium text-white ${activeTabIndex===1 ? 'opacity-100':'opacity-50'}`} onClick={e=>(setActiveTabIndex(1))}>
              <p className= "text-xl font-medium text-white md:text-3xl">Buy/Sell Crypto</p>
            </button>
          </div>
            <div className="py-10 px-4">
              <Exchange items={tabsData[activeTabIndex].list}/>
            </div>
        </section>
        <section  className=" relative w-full flex justify-center items-center py-10 ">
          <div className="inset-0 flex justify-center items-center gap-5 z-20 py-5 px-3">
            <img className="z-50 h-[calc(20vw_+_20px)] lg-max:hidden " src={coin} alt="..."/>  
            <div className="flex flex-col gap-5 z-20">
              <p className="text-white text-3xl font-bold">1,000 SWAP to all registered customers!</p> 
              <p className="text-white text-xl font-medium">Create an account, finish the exchange and receive a pleasant Bonus. <br></br> Collect SWAP to purchase a BTC cashback subscription.</p> 
              <Link to = "/home">
                <div className="flex gap-2 items-center hover:brightness-150 active:brightness-100">
                  <p className="text-[#0F75FC] text-xl font-medium">sign up</p> 
                  <img src={arrow} alt="..."/>
                </div>
              </Link>
            </div>
          </div> 
        </section>
      </div>
    </div>
  );
}

export default Home;
