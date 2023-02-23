import React from "react";
import searchIcon from "../../public/img/image/searchIcon.svg"
import dropdown_vector from "../../public/img/image/dropdown-vector.svg"
import { FAQ_question} from "@/data/faq-questions";
export function FAQ() {
  return (
    <div className=" bg-transparent w-full pt-[13%] flex justify-center items-center">
      <div className=" relative flex justify-center items-center flex-col w-[85%] gap-10 z-50 ">
        <div className="w-full grid grid-cols-1 md:grid-cols-3">
          <div className="z-50 left-0 md:col-span-1 gap-10 py-10 md:py-0 ">
             <p className="text-white text-6xl font-bold col-span-1 mb-5">FAQ</p>
            {FAQ_question.map((items)=>(
              <div className="md:border-r-2 border-gray-600 h-[full] w-[80%] border-spacing-5">
                <a href={`#${items.id}`}>
                  <button className="scroll-smooth text-white text-xl text-left font-['Outfit'] px-3 py-3 rounded-xl focus:brightness-50">{items.title}</button>
                </a>
              </div>
            ))}
          </div>  
          <div className="h-screen col-span-2 scroll-smooth scrollbar-track-[#1b121f] scrollbar-track-rounded-xl scrollbar-none scrollbar-thumb-gray-500 overflow-y-auto">
            <div className="relative w-full px-5 py-2 flex items-center col-span-2 mb-5">
              <img className="absolute ml-4 w-[16px]" src={searchIcon} alt="..." />
              <input type="search" className="form-control block w-full pl-12 pr-4 py-2 text:lg md:text-lg font-normal text-gray-700 bg-[#15161C] bg-clip-padding transition ease-in-out focus:text-gray-700 focus:outline-none rounded-full placeholder-gray-700" id="exampleSearch" placeholder="Search"/>
            </div>
            {FAQ_question.map((items)=>(
              <>
                <p id={`${items.id}`} className="md:text-4xl text-2xl text-white w-full font-['Outfit']">{items.title}</p>
                <section id={`${items.id}`}>
                  {items.child.map((item)=>(
                    <div className=" bg-transparent">
                      <h2 className="mb-0" id={`aa${item.id}_${items.id}`}>
                        <button
                          className="group justify-between relative text-white flex w-full items-center rounded-none bg-transparent py-4 px-3 text-left text-lg text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 "
                          type="button"
                          data-te-collapse-init
                          data-te-target={`#${item.id}_${items.id}`}
                          aria-expanded="true"
                          aria-controls={`${item.id}_${items.id}`}>
                          {item.question}
                            <span>
                              <img className="min-w-[1rem] w-[1rem]" src={dropdown_vector} alt="..."/>
                            </span>
                        </button>
                      </h2>
                      <div id={`${item.id}_${items.id}`} 
                          class="!visible hidden"
                          data-te-collapse-item
                          data-te-collapse-show
                          aria-labelledby={`aa${item.id}_${items.id}`}
                          data-te-parent={`#${items.id}_${items.id}`}>
                        <div className="py-4 px-5 text-white text-sm">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
              </>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
