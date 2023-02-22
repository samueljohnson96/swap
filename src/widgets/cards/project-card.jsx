import { Link } from "react-router-dom";
import 'flowbite';
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
// import {BiLinkExternal} from 'react-icons/Bi'
// import {SiIfixit} from 'react-icons/Si'
import escIcon from '../../../public/img/escIcon.png'
export function Project_Card({img, site_name, skill, description, demo, github}) {

  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);

  return (
    <div className="relative group shadow-lg">
      <img src={img} className="rounded-lg shadow-lg shadow-black" />
      <div className="absolute rounded-lg inset-0 bg-gray-900  opacity-0 group-hover:opacity-100 duration-200 flex flex-col items-center">
        <p className=" text-2xl text-white font-bold text-center  my-4" >{site_name}</p>
        <p className=" text-xl text-blue-gray-400 font-bold text-center  my-4" >{skill}</p>

        <div>
        <Fragment>
          <Button onClick={handleOpen} variant="outlined" color="gray">
            read more
          </Button>
          <Dialog
          className="bg-[bg-gray-900] shadow-xl shadow-black"
            open={open}
            handler={handleOpen}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader className="flex justify-between">
              <p className="text-2xl text-white font-bold text-center  my-4">{site_name}</p>
              <button onClick={handleOpen}>
               {/* <SiIfixit/> */}
              <img className="w-5 h-5" src={escIcon} alt="..."/>

               </button>
              </DialogHeader>
            <DialogBody divider>
              <img src={img} className="rounded-lg shadow-lg shadow-black mb-5" />
              <p className="text-lg text-white font-light text-center  my-4">{description}</p>
            </DialogBody>
            <DialogFooter className="flex gap-3">
              <a href={demo} target="_blank" rel="noopener noreferrer">
              <Button variant="outlined" color="gray" onClick={handleOpen}  className="flex justify-between gap-2 ">
                {/* <BiLinkExternal/> */}
                <span>Demo</span>
              </Button>
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer">
              <Button variant="outlined" color="gray" onClick={handleOpen} className="flex justify-between gap-2 ">
                {/* <BiLinkExternal/> */}
                <span>code</span>
              </Button>
              </a>
            </DialogFooter>
          </Dialog>
        </Fragment>
        </div>
   
      </div>
      
    </div>
  );
}

export default Project_Card