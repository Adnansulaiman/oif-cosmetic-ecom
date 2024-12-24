import { Link } from "react-router-dom";
import Image from "../../assets/images/login-1.jpg";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="flex md:flex-row flex-col ">
      <div
        className="flex flex-col justify-end w-full md:w-1/2 px-10 py-20  h-screen bg-cover bg-center   "
        style={{ backgroundImage: `url(${Image})` }}
      >
        <h1 className="hidden md:flex text-8xl font-extrabold text-white">
          Get Everything You Want
        </h1>
      </div>
      <div className="flex absolute  md:static flex-col justify-center h-full gap-3 px-10 md:px-32 w-full md:w-1/2">
        <h1 className="text-5xl md:text-6xl font-bold  md:mt-32">Welcome back</h1>
        <p className="text-sm md:text-base font-semibold mb-5  md:mb-10 px-3">
          Don't have an account? <span className="cursor-pointer underline hover:opacity-80"><Link to='/register'>SignUp</Link></span>
        </p>
        <form action="" className="flex flex-col ">
          <input
            type="email"
            placeholder="Email"
            className="placeholder:text-black w-full mb-5 h-14 rounded-xl px-5 border outline-none bg-transparent border-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="placeholder:text-black w-full h-14 rounded-xl px-5 border outline-none bg-transparent border-black"
          />
          <div className="flex justify-between items-center px-1 mt-3">
          <div className="flex gap-1 md:gap-3  items-center   ">
            <input
              type="checkbox"
              className="  md:w-4 md:h-4 accent-black cursor-pointer"
            />
            <p className="md:text-base text-sm">Remember me</p>
          </div>
          <p className="underline  text-sm md:text-base hover:opacity-80 cursor-pointer">forget password?</p>
          </div>
          <button type="submit" className="w-full h-14 text-center bg-black  text-white mt-10 md:mt-16 rounded-xl hover:bg-opacity-90 border  border-black  text-lg font-semibold   ">Sign In</button>
          <button  className="w-full h-14 text-center bg-white  mt-3 rounded-xl hover:bg-slate-200 border-white md:border-black border  text-black  text-lg font-semibold flex gap-3 items-center justify-center  "><FcGoogle className="text-3xl" /> <p>Sign In With Google</p></button>
        </form>
      </div>
    </div>
  );
};

export default Login;
