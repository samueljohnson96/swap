import { useState, useEffect } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logo from "../../../public/img/image/logo.jpg"
import menuvector from '../../../public/img/image/menuvector.svg'
export default function Topbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 text-xl font-bold text-blue-gray-200 hover:text-white"
      >
        <Link to ="/how" className="flex items-center ">
          How it works
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 text-xl font-bold text-blue-gray-200 hover:text-white"
      >
        <Link to ="/loyalty" className="flex items-center ">
          Loyalty program
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 text-xl font-bold text-blue-gray-200 hover:text-white"
      >
        <Link to ="/faq" className="flex items-center ">
          FAQ
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 text-xl font-bold text-blue-gray-200 hover:text-white"
      >
        <Link to ="/Contact" className="flex items-center ">
          Contacts
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="w-full bg-black mx-auto  py-2 lg:px-8 lg:py-4 z-50">
      <div className="mx-auto flex items-center justify-between text-white">
        <div className="flex gap-1 md:gap-3">
          <Link to = "/home">
            <img className="w-[120px]" src={logo} alt="..." />
          </Link>
          <Menu placement="bottom-start">
            <MenuHandler>
              <Button variant="text"><img src={menuvector} alt="..."/></Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>SimpleSwap Affiliate Program<br></br>Become our partner and start to make profit</MenuItem>
              <MenuItem>SimpleSwap Blog<br></br>News and key concepts of the Crypto World</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex gap-8 ">
          <button className="w-32 py-1 bg-btnbg bg-cover rounded-full  justify-center items-center border-4 shadow-2xl shadow-deep-purple-900  border-blue-100 outline outline-blue-900 hidden lg:inline-block hover:brightness-125 active:brightness-100">
            <p className="text-white text-lg font-medium ">Log In</p>
          </button>
          <button className="w-32 py-1 bg-btnbg bg-cover rounded-full  justify-center items-center border-4 shadow-2xl shadow-deep-purple-900  border-blue-100 outline outline-blue-900 hidden lg:inline-block hover:brightness-125 active:brightness-100">
            <p className="text-white text-lg font-medium ">Sign Up</p>
          </button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden z-50"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container px-5 z-50">
          {navList}
          <div className=" flex justify-around">
            <button className="w-32 py-1 bg-btnbg bg-cover rounded-full flex justify-center items-center border-4 shadow-2xl shadow-deep-purple-900  border-blue-100 outline outline-blue-900 hover:brightness-125 active:brightness-100">
              <p className="text-white text-xl font-medium ">Log In</p>
            </button>
            <button className="w-32 py-1 bg-btnbg bg-cover rounded-full flex justify-center items-center border-4 shadow-2xl shadow-deep-purple-900  border-blue-100 outline outline-blue-900 hover:brightness-125 active:brightness-100">
              <p className="text-white text-xl font-medium ">Sign Up</p>
            </button>
          </div>
        </div>
      </MobileNav>
    </div>
  );
}