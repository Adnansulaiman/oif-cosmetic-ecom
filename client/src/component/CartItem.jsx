import { IoIosClose } from "react-icons/io";
import CartImage from '../assets/images/product-3.jpeg';
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

const CartItem = () => {
  return (
    <div className="flex mt-4 justify-between w-full border-b border-black border-opacity-40 pb-4">
                <div className="flex gap-4">
                    <img src={CartImage} alt="" className="w-28 h-28 rounded-2xl" />
                    <div className="flex flex-col my-2">
                        <h1 className="text-lg font-semibold">Product name</h1>
                        <p className="text-xs">$99.99</p>
                        <div className="flex justify-between px-4 w-28 items-center bg-white rounded-lg mt-4">
                            <LuMinus className="text-xl cursor-pointer hover:scale-110" />
                            <p>1</p>
                            <GoPlus className="text-xl cursor-pointer hover:scale-110" />
                        </div>
                    </div>
                </div>
                <div className="flex">
                   <IoIosClose className="text-4xl  cursor-pointer  hover:bg-gray-300 rounded-full" /> 
                </div>
            </div>
  )
}

export default CartItem
