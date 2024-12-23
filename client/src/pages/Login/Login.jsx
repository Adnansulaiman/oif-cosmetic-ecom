import { Link } from "react-router-dom";
import Image from "../../assets/images/login-1.jpg";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="flex">
      <div
        className="flex flex-col justify-end  w-1/2 px-10 py-20  h-screen bg-cover bg-center   "
        style={{ backgroundImage: `url(${Image})` }}
      >
        <h1 className="text-8xl font-extrabold text-white">
          Get Everything You Want
        </h1>
      </div>
      <div className="flex flex-col justify-center gap-3 px-32 w-1/2">
        <h1 className="text-6xl font-bold mt-10">Welcome back</h1>
        <p className="text-  mb-10 px-3">
          Don't have an account? <span className="cursor-pointer underline hover:opacity-80"><Link to='/register'>SignUp</Link></span>
        </p>
        <form action="" className="flex flex-col ">
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-5 h-14 rounded-xl px-5 border outline-none bg-transparent border-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-14 rounded-xl px-5 border outline-none bg-transparent border-black"
          />
          <div className="flex justify-between items-center px-1 mt-3">
          <div className="flex gap-3  items-center   ">
            <input
              type="checkbox"
              className="w-4 h-4 accent-black cursor-pointer"
            />
            <p className="">Remember me</p>
          </div>
          <p className="underline hover:opacity-80 cursor-pointer">forget password?</p>
          </div>
          <button type="submit" className="w-full h-14 text-center bg-black text-white mt-16 rounded-xl hover:bg-transparent border hover:border-black hover:text-black text-lg font-semibold   ">Sign In</button>
          <button  className="w-full h-14 text-center bg-transparent  mt-3 rounded-xl hover:bg-black border border-black text-black hover:text-white text-lg font-semibold flex gap-3 items-center justify-center  "><FcGoogle className="text-3xl" /> <p>Sign In With Google</p></button>
        </form>
      </div>
    </div>
  );
};

export default Login;
