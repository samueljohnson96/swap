import React from "react"
export const Swapcard = ({color,icon, percent,coin,type,period,limit,price,unit}) => {
    return(
        <div className="p-2 rounded-3xl" style={{backgroundColor:(color)}}>
          <div className="flex gap-2">
            <div>
              <div className="flex justify-center items-center">
                <img className="w-14" src={icon} alt="..." />
                <p className="text-white text-[1.4rem] font-['Outfit']">{percent}</p>
              </div>
              <p className="text-white text-xs px-2 font-['Outfit']">{coin}</p>
              <p className="text-white text-sm px-3 font-['Outfit']">Price</p>
            </div>
            <div className="flex flex-col">
              <p className="text-white text-base leading-loose font-['Outfit']">Type: {type}</p>
              <p className="text-white text-base leading-loose font-['Outfit']">Period: {period}</p>
              <p className="text-white text-base leading-loose font-['Outfit']">Limit: {limit}</p>
            </div>
          </div>
          <div className="flex px-2">
            <p className="text-white text-[44px] font-['Outfit'] ">{price}</p>
            <p className="text-white text-sm pt-8">{unit}</p>       
          </div>
        </div>
    )
}