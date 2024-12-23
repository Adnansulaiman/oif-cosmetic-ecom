// import Logo from '../../assets/images/oif.green.png';
import { Link, NavLink } from "react-router-dom";

const Navbar = ({setCartOpen}) => {
  
  return (
    <div
      className="flex fixed z-50 text-black bg-gray-400 mt-4 mx-0 px-4 rounded-xl 
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
        <Link to='/login'>
        <p className="hover:scale-110">Login</p></Link>
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
    
  );
};

export default Navbar;
