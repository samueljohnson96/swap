import logbg from "../../public/img/image/logbg.png"
import googleIcon from "../../public/img/image/googleIcon.svg"
import whiteArrow from "../../public/img/image/whiteArrow.svg"
import { Link } from "react-router-dom"
export const SignUp = () => {

    return (
    <>
      <div className="grid grid-cols-2 place-content-center place-items-center bg-black">
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
          <p className="text-white text-5xl font-semibold">Sign Up</p>
          <div className="flex gap-2">
            <p className="text-white text-base">Already have an account?</p>
            <Link to ="/login">
              <p className="text-[#994ED8] text-base">Log In</p>
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
            <p className="text-lg text-white font-normal mb-4">Confirm Password</p>
            <input
              type="password"
              className="form-control block w-full px-3 py-3 text-sm md:text-base text-white font-normal rounded-md  bg-white bg-opacity-5 ease-in-out m-0 placeholder-gray-600 focus:outline-none mb-4"
              placeholder="Confirm your password"
            />
              <div className="flex items-center mb-4">
                  <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                  <label for="checkbox-1" class="text-sm ml-3 font-medium text-white">I would like to receive marketing e-mails</label>
              </div>
              <div className="flex items-center mb-4">
                  <input id="checkbox-2" aria-describedby="checkbox-1" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                  <label for="checkbox-2" class="text-sm ml-3 font-medium text-white">By signing up, I agree to the <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a> and <a href="#" class="text-blue-600 hover:underline">Terms of Service</a></label> 
              </div>
          </div>
          <button className="w-40 h-10 bg-btnbg bg-cover rounded-full justify-center items-center border-4 shadow-2xl shadow-deep-purple-900  border-blue-100 outline outline-blue-900 hidden lg:inline-block hover:brightness-125 active:brightness-100 col-span-1">
            <p className="text-white text-xl font-medium ">Sign Up</p>
          </button>
        </div>
      </div>
    </>
    
  );
}

export default SignUp;
