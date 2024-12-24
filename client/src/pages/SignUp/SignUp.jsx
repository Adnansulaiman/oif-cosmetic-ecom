import { Link } from "react-router-dom";
import Image from "../../assets/images/signup-1.jpg";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse  text-white  md:text-black ">
      
      <div className="flex absolute md:static flex-col justify-center items-center gap-3 px-10 md:px-32 w-full h-full  md:w-1/2">
        <h1 className="text-5xl text-center md:text-6xl font-bold  md:mt-28">Create an account</h1>
        <p className=" mb-5  px-3 md:text-base text-sm">
          Already have an account? <span className="cursor-pointer underline hover:opacity-80"><Link to='/login'>Login</Link></span>
        </p>
        <form  className="flex flex-col  ">
          <div className="flex gap-5">
          <input
            type="text"
            placeholder="First name"
            name="fname"
            className="placeholder:text-white md:placeholder:text-black w-full mb-3 h-12 rounded-xl px-5 border outline-none bg-transparent md:border-black"
          />
          <input
            type="text"
            placeholder="Second name"
            name="sname"
            className="placeholder:text-white md:placeholder:text-black  w-full h-12 rounded-xl px-5 border outline-none bg-transparent md:border-black"
          />
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="placeholder:text-white md:placeholder:text-black w-full mb-3 h-12 rounded-xl px-5 border outline-none bg-transparent md:border-black"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="placeholder:text-white md:placeholder:text-black w-full h-12 mb-3 rounded-xl px-5 border outline-none bg-transparent md:border-black"
          />
          <input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            className="placeholder:text-white md:placeholder:text-black w-full h-12 rounded-xl px-5 border outline-none bg-transparent md:border-black"
          />
          <div className="flex justify-between items-center px-1 mt-3">
          <div className="flex gap-3  items-center   ">
            <input
              type="checkbox"
              className="w-4 h-4 accent-black cursor-pointer"
            />
            <p className="text-sm md:text-base">I agree to the <span className="underline">Terms & Conditions</span></p>
          </div>
         
          </div>
          <button type="submit" className="w-full h-12 text-center bg-black text-white mt-10 rounded-xl hover:bg-white border border-black hover:text-black text-lg font-semibold   ">Sign In</button>
          <button  className="w-full h-12 text-center bg-white  mt-3 rounded-xl hover:bg-black border border-white hover:border-black md:border-black text-black hover:text-white text-lg font-semibold flex gap-3 items-center justify-center  "><FcGoogle className="text-3xl" /> <p>Sign In With Google</p></button>
        </form>
      </div>
      <div
        className="flex flex-col justify-end w-full md:w-1/2 px-10 py-20  h-screen bg-cover bg-center   "
        style={{ backgroundImage: `url(${Image})` }}
      >
        <h1 className="text-8xl md:flex hidden font-extrabold text-white">
          Get Everything You Want
        </h1>
      </div>
    </div>
  );
};

export default SignUp;
