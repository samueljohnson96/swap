import logbg from "../../public/img/image/logbg.png"
import googleIcon from "../../public/img/image/googleIcon.svg"
import whiteArrow from "../../public/img/image/whiteArrow.svg"
import { Link } from "react-router-dom"

  export const LogIn = () => {

    return (
    <>
      <div className="relative grid grid-cols-2 place-content-center place-items-center bg-black">
        <div className="absolute flex top-[10%] right-[5%]">
          <Link to ="/home">
            <button className="flex justify-center items-center gap-3">
                <img src={whiteArrow} alt="..."></img>
                <p className="text-lg text-white font-semibold">Home</p>
            </button>
          </Link>
        </div>
      <img src={logbg} alt="..."/>
        <div className="flex flex-col justify-center items-center gap-4 w-[80%]">
          <p className="text-white text-5xl font-semibold">Log In</p>
          <div className="flex gap-2">
            <p className="text-white text-base">Not Swap customer yet?</p>
            <Link to ="/signup">
              <p className="text-[#994ED8] text-base">Sign Up</p>
            </Link>
          </div>
          <button className="w-full py-6 rounded-xl gap-2 flex bg-transparent border-2 border-gray-700 justify-center hover:brightness-150 active:brightness-100 focus:brightness-100">
            <img className="h-[2rem]" src={googleIcon} alt="..."/>
            <p className="text-white text-2xl">Continue with Google</p>
          </button>
          <p className="text-lg text-white font-normal"> Or </p>
          <div className="w-full">
            <p className="text-lg text-white font-normal mb-4">Email</p>
            <input
              type="email"
              className="form-control block w-full px-3 py-3 text-sm md:text-base text-white font-normal rounded-md  bg-white bg-opacity-5 ease-in-out m-0 placeholder-gray-600 focus:outline-none mb-4"
              placeholder="Input your name"
            />
            <p className="text-lg text-white font-normal mb-4">Password</p>
            <input
              type="password"
              className="form-control block w-full px-3 py-3 text-sm md:text-base text-white font-normal rounded-md  bg-white bg-opacity-5 ease-in-out m-0 placeholder-gray-600 focus:outline-none mb-4"
              placeholder="Input your password"
            />
          </div>
          <button className="w-40 h-10 bg-btnbg bg-cover rounded-full justify-center items-center border-4 shadow-2xl shadow-deep-purple-900  border-blue-100 outline outline-blue-900 hidden lg:inline-block hover:brightness-125 active:brightness-100 col-span-1">
            <p className="text-white text-xl font-medium ">Log In</p>
          </button>
          <p className="text-lg text-white font-normal mb-4">Forgot your password?</p>
        </div>
      </div>
    </>
    
  );
}

export default LogIn;
