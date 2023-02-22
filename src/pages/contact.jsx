import React from "react";
import loop from "../../public/img/image/loop.png"
import gradient from "../../public/img/image/gradient.png"
import searchIcon from "../../public/img/image/searchIcon.svg"
import dropdown_vector from "../../public/img/image/dropdown-vector.svg"
import { FAQ_question} from "@/data/faq-questions";
import { Linklist } from "@/data/linklist";

export function Contact() {
  return (
    <div className="bg-black w-full pt-[13%] flex flex-col justify-center items-center py-20">
      <div className="flex flex-col justify-center items-center gap-5 my-10 w-[80%]">
        <p className="text-4xl md:text-6xl text-white font-base">Write a Message to Swap</p>
        <p className="text-lg md:text-xl text-white font-base">We’d love to hear from you and answer any questions</p>
      </div>
      <section className="z-50 w-[90%] md:w-[80%] gap-5 bg-[#1C1C1C] bg-opacity-60 py-[4rem] px-[3rem] rounded-3xl grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center">
        <div className="flex flex-col justify-center items-center md:border-2 rounded-2xl border-purple-200 py-5 px-14">
          <div>
            <div className=" relative flex  flex-col gap-5 z-50 p-5">
              <p className="text-3xl text-white font-normal"> Contacts </p>
              <div>
                <p className="text-base text-white font-thin"> For service issues: </p>
                <p className="text-xs text-[#ACB4FF] font-thin"> support@Swap.io </p>
              </div>
              <div>
                <p className="text-base text-white font-thin"> For marketing requests: </p>
                <p className="text-xs text-[#ACB4FF] font-thin"> marketing@Swap.io </p>
              </div>
              <div>
                <p className="text-base text-white font-thin"> For general questions: </p>
                <p className="text-xs text-[#ACB4FF] font-thin"> partnerships@Swap.io </p>
              </div>
            </div>
            <div className="flex gap-4 py-5 z-50">
              {Linklist.map((item)=>(
                  <a href={`${item.link}`}>
                    <img className="flex justify-center hover:brightness-150 active:brightness-100" src={item.name} alt="..."/>
                  </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-8 mb-5">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-sm md:text-base text-white font-normal rounded-md  bg-white bg-opacity-5 ease-in-out m-0 focus:outline-none"
              placeholder="Name"
            />
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-sm md:text-base text-white font-normal rounded-md  bg-white bg-opacity-5 ease-in-out m-0 focus:outline-none"
              placeholder="Email"
            />
          </div>
          <div class="flex justify-center mb-5">
            <div class="mb-3 w-full rounded-md bg-transparent">
              <select className=" rounded-md bg-[#1b1b1b] w-full px-3 py-2 text-white leading-normal focus:outline-none gap-3" data-te-select-init>
                <option value="1">subject1</option>
                <option value="2">subject2</option>
                <option value="3">subject3</option>
                <option value="4">subject4</option>
                <option value="5">subject5</option>
                <option value="6">subject6</option>
                <option value="7">subject7</option>
                <option value="8">subject8</option>
              </select>
            </div>
          </div>
          <textarea id="message" rows="4" className="block bg-white bg-opacity-5 p-2.5 w-full h-full text-sm text-white rounded-lg border-none focus:ring-0 active:ring-0" placeholder="Message"></textarea>
          <div className="grid grid-cols-1 md:grid-cols-3 my-5 place-items-center">
            <button className="w-28 h-8 bg-btnbg bg-cover rounded-full justify-center items-center border-4 shadow-2xl shadow-deep-purple-900  border-blue-100 outline outline-blue-900 hidden lg:inline-block hover:brightness-125 active:brightness-100 col-span-1">
              <p className="text-white text-sm font-medium ">Send</p>
            </button>
            <p className="text-base font-normal text-white w-[full] col-span-2">By sending this message, I agree to the <span className="text-[#9E58DC]">Privacy Policy </span> and <span className="text-[#9E58DC]"> Termsof Service </span></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
