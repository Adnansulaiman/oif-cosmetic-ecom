// import Logo from '../../assets/images/oif.green.png';
import { Link, NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoMenu } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = ({ setCartOpen }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();
  useEffect(()=>{
    const handleClickCloseMenu =(event) =>{
      if(menuRef.current && !menuRef.current.contains(event.target)){
        setOpenMenu(false)
      }
    }
    document.addEventListener("mousedown",handleClickCloseMenu)
    return () =>{
      document.removeEventListener("mousedown",handleClickCloseMenu)

    }
},[setOpenMenu])
  return (
    <>
      <div
        className=" hidden md:flex fixed z-50 text-black bg-gray-400 mt-4 mx-0 px-4 rounded-xl 
    justify-between items-center w-[calc(100%-6rem)] left-12 h-16 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20"
      >
        <ul className="flex gap-8 items-center ">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? { fontWeight: "bold" } : null)}
          >
            <li className="hover:scale-110">Home</li>
          </NavLink>
          <NavLink
            to="/shop"
            style={({ isActive }) => (isActive ? { fontWeight: "bold" } : null)}
          >
            <li className="hover:scale-110">Shop</li>
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? { fontWeight: "bold" } : null)}
          >
            <li className="hover:scale-110">About Us</li>
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? { fontWeight: "bold" } : null)}
          >
            <li className="hover:scale-110">Contact</li>
          </NavLink>
          <NavLink
            to="/blog"
            style={({ isActive }) => (isActive ? { fontWeight: "bold" } : null)}
          >
            <li className="hover:scale-110">Blog</li>
          </NavLink>
        </ul>
        <p className="text-3xl font-black pr-20">OIF.</p>
        <div className="flex  gap-16 items-center">
          <Link onClick={() => setCartOpen(true)}>
            <p className="hover:scale-110">Cart(0)</p>
          </Link>
          <Link to="/login">
            <p className="hover:scale-110">Login</p>
          </Link>
          <div className="flex gap-2 items-center ">
            <p>User.</p>
            <Link to="/profile">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt=""
                className="w-6 h-6 rounded-full hover:border-2 hover:border-black"
              />
            </Link>
          </div>
        </div>
        {/* {cartOpen && (
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
    )} */}
      </div>
      <div className="flex justify-between w-full items-center md:hidden my-3 px-5 fixed bg-transparent">
        <h1 className="text-2xl font-black">OIF.</h1>
        <div className="flex gap-4 items-center">
          <Link>
            <IoIosSearch className="text-2xl " />
          </Link>
          <Link>
            <LiaShoppingBagSolid className="text-2xl" />
          </Link>
          <IoMenu className="text-3xl cursor-pointer" onClick={() => setOpenMenu(true)} />
        </div>
      </div>
      {openMenu && (
        <div 
        ref={menuRef}
        className="gap-3  ease-in-out  sm:hidden justify-between absolute p-3 w-1/3 h-screen z-50 top-0 right-0 bg-white flex flex-col">
        <div className="flex flex-col gap-4">
        <div className="flex border-b pb-1 border-opacity-30 border-black justify-end">
          <IoCloseOutline
            className="text-3xl cursor-pointer "
            onClick={() => {
              setOpenMenu(false);
            }}
          />
        </div>
        <div className="flex border-b pb-1 border-opacity-30 border-black flex-col  items-center ">
          <Link to="/profile">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
              className="w-6 h-6 rounded-full hover:border-2 hover:border-black"
            />
          </Link>
          <p>Adnan</p>
        </div>
        <ul className="flex px-4 py-2 flex-col  gap-2">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? { fontWeight: "bold" } : null)}
          >
            <li className="hover:scale-110">Home</li>
          </NavLink>
          <NavLink
            to="/shop"
            style={({ isActive }) => (isActive ? { fontWeight: "bold" } : null)}
          >
            <li className="hover:scale-110">Shop</li>
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? { fontWeight: "bold" } : null)}
          >
            <li className="hover:scale-110">About Us</li>
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? { fontWeight: "bold" } : null)}
          >
            <li className="hover:scale-110">Contact</li>
          </NavLink>
          <NavLink
            to="/blog"
            style={({ isActive }) => (isActive ? { fontWeight: "bold" } : null)}
          >
            <li className="hover:scale-110">Blog</li>
          </NavLink>
        </ul>
        </div>
        <div className="flex px-4 flex-col">
            <Link><p>Settings</p></Link>
            <Link><p>Logout</p></Link>
        </div>
      </div>
      )}

      {openMenu &&
      (
        <div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-40"
        onClick={() => setCartOpen(false)} // Close cart on overlay click
      ></div>
      )}
      
    </>
  );
};

export default Navbar;
