import ProductImage from '../assets/images/product-2.jpeg';
import { FaRegHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const ProductCard = () => {
  return (
    <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-72 md:h-72 flex flex-col justify-between py-3 rounded-2xl bg-cover bg-center mt-5 md:mb-10   drop-shadow-md" style={{backgroundImage:`url(${ProductImage})`}}>
      <div className="flex justify-between px-3 items-center">
        <p className='font-semibold text-xs md:text-sm'>Shiny Glam</p>
        <div className="flex justify-center items-center w-6 h-6 md:w-9 md:h-9  bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 ">
            <FaRegHeart className='hover:scale-110 cursor-pointer text-xs md:text-base' />
        </div>
      </div>
        <div className="flex justify-between items-center rounded-lg bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 mx-3 p-2">
            <div className="flex flex-col justify-center">
                <h1 className=' text-xs md:text-sm font-semibold '>Glossy Liquid </h1>
                <p className='text-xs'>$ 99.99</p>
            </div>
            <div className="flex">
            <div className="flex justify-center items-center w-6 h-6 md:w-9 md:h-9  bg-gray-400 rounded-md md:rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 ">
            <FaPlus className='hover:scale-110 text-xs md:text-base cursor-pointer' />
        </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
