import React from "react";
import btc from "../../../public/img/coin/btc.svg"
import eth from "../../../public/img/coin/eth.svg"
import dropdown_vector from "../../../public/img/image/dropdown-vector.svg"
import searchIcon from "../../../public/img/image/searchIcon.svg"
import direction from "../../../public/img/image/direction.svg"
import btn01 from "../../../public/img/image/btn01.svg"
import { useState, useEffect } from "react";
export function Exchange({items}) {
  const [sendopenbar, setSendopenbar] = useState(false);
  const [getopenbar, setGetopenbar] = useState(false);
  const [sendselected, setSendselected] = useState(0);
  const [getselected, setGetselected] = useState(0);
  const [inputvalue, setInputvalue] = useState();
  const [exchangedvalue, setExchangedvalue] = useState(0);
  const [ratio, setRatio] = useState(0);
  useEffect(()=>{
    setSendselected(0);
    setGetselected(0);
    setExchangedvalue(0);
    setInputvalue(0);
  },[items])
  useEffect(()=>{ 
    setExchangedvalue(0);
    setInputvalue(0);
  },[sendselected])
  const cal=()=>{
 let temp =ratio * inputvalue;
 setExchangedvalue(temp);
}
console.log("send",items[sendselected].coinName);
console.log("send",items[getselected].coinName);
console.log("inputvalue",inputvalue);
console.log("exchangedvalue",exchangedvalue);
console.log("ratio",ratio);
  return (
    <div>
      <div className=" relative flex justify-center items-center flex-col gap-3 w-full">
        <div className="w-full bg-[#1A1B23] bg-opacity-80 p-2 rounded-xl md:rounded-3xl md:p-8">
          <div className=" bg-opacity-80 gap-5 flex flex-col">
            <div className="relative flex w-full justify-between items-center rounded-xl md:rounded-3xl">
              <div className="flex bg-black bg-opacity-20 justify-between p-4 w-[65%] h-[4rem] items-center rounded-tl-xl md:rounded-tl-3xl md:h-[100px]">
                <div>
                  <p className="text-lg w-[80px] md:w-full font-medium text-white md:text-2xl">You send</p>
                </div>
                <div>
                  <input
                    type="number"
                    className="form-control block w-full px-3 py-1.5  text-lg text-right md:text-2xl text-[#BDFF00] font-normal bg-transparent ease-in-out m-0  focus:bg-transparent focus:border-blue-600 focus:outline-none
                    "
                    id="exampleFormControlInput1"
                    placeholder="input"
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e.target.value)}
                  />
                </div>
              </div>
              <button className="flex justify-between w-[33%] h-[4rem] md:h-[6rem] items-center gap-8 px-2 md:px-6 bg-black bg-opacity-20 py-4 rounded-tr-xl md:rounded-tr-3xl" onClick={e => (setSendopenbar(!sendopenbar), setGetopenbar(false))}>
                <div className="flex items-center gap-2">
                  <img className="w-[24px] md:w-[42px]" src={items[sendselected].coin} alt="..." />
                  <p className=" text-lg font-medium text-white md:text-2xl">{items[sendselected].coinName}</p>
                </div>
                <img className="w-[12px] md:w-[24px]" src={dropdown_vector} alt="..." />
              </button>
            {sendopenbar ? (
              <div className=" absolute bg-[#121015] rounded-b-lg md:rounded-b-3xl w-full top-[110%] z-50">
                <div className="flex justify-center w-full">
                  <div className="mb-3 w-full px-5 py-3  flex items-center ">
                    <img className="absolute ml-2 w-[16px] md:px-4 md:w-[24px]" src={searchIcon} alt="..." />
                    <input type="search" className="form-control block w-full px-10 py-2 text:lg md:text-2xl font-normal text-gray-700 bg-[#15161C] bg-clip-padding transition ease-in-out focus:text-gray-700 focus:outline-none rounded-full placeholder-gray-700" id="exampleSearch" placeholder="Type a cryptocurrency or ticker"/>
                  </div>
                </div>
                <div>
                  <div className="px-5 py-5">
                    <p className="text-white text-lg md:text-2xl py-2">All cryptocurrencies</p>
                    <div className=" h-80 scrollbar scroll-py-6 scrol scrollbar-track-[#15161C] scrollbar-thumb-gray-500 scroll-mx-14 scrollbar-corner-transparent  overflow-y-scroll">
                      <div>
                        {items.map((item, index)=>(
                          <div className="flex py-4 items-center">
                            <button className="flex items-center gap-5 w-1/2 " onClick={(e)=>(setSendselected(index), setSendopenbar(false))}>
                              <img className="w-[24px] md:w-[42px]" src={item.coin} alt="..." />
                              <p className="text-lg md:text-2xl text-white">{item.coinName}</p>
                            </button>
                            <p className="w-1/2 justify-start text-lg md:text-2xl text-white">{item.fullName}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ):(<></>)}
            </div>
            <div className="flex justify-between items-center w-full px-10">
              <p className="text-white opacity-80 font-light  text-lg md:text-2xl">Floating rete only</p>
              <img className="w-[20px] md:w-[40px]" src={direction} alt="..."/>
            </div>
            <div className="flex w-full justify-between items-center rounded-3xl relative">
              <div className="flex bg-black bg-opacity-20 justify-between p-4  w-[65%] h-[4rem] items-center rounded-bl-xl md:rounded-bl-3xl md:h-[100px]">
                <div>
                  <p className="text-lg font-medium text-white md:text-2xl">You get</p>
                </div>
                <div className="mb-3">
                  <p className="text-lg md:text-2xl text-[#BDFF00] inline-block">{exchangedvalue.toFixed(3)}</p>
                </div>
              </div>
              <button className="flex justify-between w-[33%] h-[4rem] md:h-[6rem] items-center gap-8 bg-black bg-opacity-20 py-4 px-2 md:px-6  rounded-br-3xl" onClick={e => (setGetopenbar(!getopenbar))}>
                <div className="flex items-center gap-2">
                  <img className="w-[24px] md:w-[42px]" src={items[getselected].coin} alt="..." />
                  <p className="text-lg font-medium text-white md:text-2xl">{items[getselected].coinName}</p>
                </div>
                <img className="w-[12px] md:w-[24px]" src={dropdown_vector} alt="..." />
              </button>
            {getopenbar ? (
              <div className=" absolute bg-[#121015] rounded-b-lg md:rounded-b-3xl w-full top-[110%] z-50">
                <div className="flex justify-center w-full">
                  <div className="mb-3 w-full px-5 py-3  flex items-center ">
                    <img className="absolute ml-2 w-[16px] md:px-4 md:w-[24px]" src={searchIcon} alt="..." />
                    <input type="search" className="form-control block w-full px-10 py-2 text:lg md:text-2xl font-normal text-gray-700 bg-[#15161C] bg-clip-padding transition ease-in-out focus:text-gray-700 focus:outline-none rounded-full placeholder-gray-700" id="exampleSearch" placeholder="Type a cryptocurrency or ticker"/>
                  </div>
                </div>
                <div>
                  <div className="px-5 py-5">
                    <p className="text-white text-lg md:text-2xl py-2">All cryptocurrencies</p>
                    <div className=" h-80 scrollbar scroll-py-6 scrol scrollbar-track-[#15161C] scrollbar-thumb-gray-500 scroll-mx-14 scrollbar-corner-transparent  overflow-y-scroll">
                      <div>
                        {items.map((item, index)=>(
                          <div className="flex py-4 items-center">
                            <button className="flex items-center gap-5 w-1/2 " onClick={(e)=>(setGetselected(index), setGetopenbar(false))}>
                              <img className="w-[24px] md:w-[42px]" src={item.coin} alt="..." />
                              <p className="text-lg md:text-2xl text-white">{item.coinName}</p>
                            </button>
                            <p className="w-1/2 justify-start text-lg md:text-2xl text-white">{item.fullName}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ):(<></>)}
            </div>
            <button className="w-full relative flex items-center justify-center py-5  hover:brightness-125 active:brightness-100" onClick={(e)=>(setRatio(items[sendselected].exchange/items[getselected].exchange),cal())}>
              <p className="text-white text-2xl md:text-4xl absolute">
                Exchange
              </p>       
              <img className="w-full" src={btn01} alt="..."/>     
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exchange;
