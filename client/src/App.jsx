import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Hero from './component/Hero/Hero
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./component/Cart";
import { useState } from "react";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div className="bg-secondary">
      <Navbar cartOpen={cartOpen} setCartOpen={setCartOpen} />
      {cartOpen && <Cart setCartOpen={setCartOpen} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
