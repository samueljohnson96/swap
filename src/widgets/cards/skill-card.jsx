
import 'flowbite';
import {
  IconButton,
} from "@material-tailwind/react";
import {GrInternetExplorer} from "react-icons/gr";
export function Skill_Card({description, icon, skill}) {
  return (
    <div className="relative w-[300px] h-[200px] group my-10 brightness-200 ">
      <div className="z-0 absolute inset-0 bg-white group-hover:translate-y-[50%] duration-500 flex flex-col justify-center items-center shadow-lg shadow-black ">
        <p className=" text-lg text-gray-900 font-black text-center my-4" >{description}</p>
      </div>
      <div>
        <div className="z-10 absolute inset-0 bg-white whitesm group-hover:translate-y-[-50%] duration-500 flex flex-col items-center"></div> 
        <div className="z-10 absolute inset-0 bg-gray-900 group-hover:translate-y-[-50%] duration-500 flex flex-col items-center"></div>
        <div className="z-10 absolute inset-0 flex flex-col items-center  rounded-2xl blur-xl bg-indigo-500 brightness-100 outline outline-[10px] outline-indigo-500   border-[20px] border-indigo-500 duration-500 opacity-0 group-hover:translate-y-[-50%]  group-hover:opacity-100 "></div>
        <div className="z-10 absolute inset-0 bg-transparent group-hover:translate-y-[-50%] duration-500 flex flex-col items-center justify-center">
          <div className=" flex flex-col items-center opacity-30 group-hover:opacity-100 duration-200">
            {/* <GrInternetExplorer size={40} color="white"/> */}

              <div style={{color: 'white'}}>
                {icon}
              </div>
         
          <p className=" text-2xl text-white font-bold text-center  my-4">{skill}</p>
          </div>
        </div>
      </div>
   </div>
  );
} 

export default Skill_Card