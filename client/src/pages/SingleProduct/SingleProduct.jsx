import Image from "../../assets/images/product-5.jpeg";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { LuMinus, LuPlus } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../component/Loading";

const SingleProduct = () => {
  const { prodId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    try {
      const fetchProductDetails = async (id) => {
        const response = await axios.get(
          `http://localhost:3000/api/products/${id}`
        );
        setProduct(response.data);
      };
      fetchProductDetails(prodId)
    } catch (err) {
      console.err(err);
    }finally{
      setLoading(false)
    }
    
  }, [prodId]);
  console.log(product)
  return (
    <>
    {product && (
      <div className=" flex md:flex-row flex-col w-full h-screen ">
      <div className="flex mt-5 w-full md:w-1/2 jus items-center h-[70vh] md:h-screen pl-10 pb-10 md:pb-0 md:pl-12 pt-20 md:pt-0 gap-5">
        <img
          src={product?.images[0]}
          alt=""
          className="w-72  md:w-[542px] bg-center bg-cover rounded-2xl drop-shadow-md  "
        />
        <div className="flex flex-col gap-5 md:gap-3">
          <img
            src={product?.images[0]}
            className=" w-16 h-16 md:w-32 md:h-32 rounded-lg md:rounded-2xl drop-shadow-md  border border-black cursor-pointer"
            alt=""
          />
          <img
            src={product?.images[0]}
            className="w-16 h-16 md:w-32 md:h-32 rounded-lg md:rounded-2xl drop-shadow-md  cursor-pointer"
            alt=""
          />
          <img
            src={product?.images[0]}
            className="w-16 h-16 md:w-32 md:h-32 rounded-lg md:rounded-2xl drop-shadow-md  cursor-pointer"
            alt=""
          />
          <img
            src={product?.images[0]}
            className="w-16 h-16 md:w-32 md:h-32 rounded-lg md:rounded-2xl drop-shadow-md  cursor-pointer"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/2 h-screen bg-gray-200 rounded-t-2xl md:rounded-s-2xl px-10  py-5 md:px-12 md:py-32 ">
        <h2 className="text-base md:text-xl font-semibold">{product?.brand}</h2>
        <h1 className="text-3xl md:text-4xl font-bold">{product?.name}</h1>
        <div className="flex gap-3 md:gap-6 mt-2 md:mt-3 items-center">
          <div className="flex gap-1 md:gap-2">
            <IoStar className="text-base md:text-lg" />
            <IoStar className="text-base md:text-lg" />
            <IoStar className="text-base md:text-lg" />
            <IoStarHalf className="text-base md:text-lg" />
            <IoStarOutline className="text-base md:text-lg" />
          </div>
          <p className="text-sm font-semibold md:text-base">18 Reviews</p>
        </div>
        <div className="flex gap-2 md:gap-3 mt-5">
          <div className="md:w-6 md:h-6 w-4 h-4 rounded-full shadow-md bg-[#a7667c] ring-1 ring-offset-2 ring-black"></div>
          <div className="md:w-6 md:h-6 w-4 h-4 rounded-full shadow-md bg-[#53313d]"></div>
          <div className="md:w-6 md:h-6 w-4 h-4 rounded-full shadow-md bg-[#f29eba]"></div>
        </div>
        <p className="text-sm md:text-base mt-5">
          {product?.description}
        </p>
        {/* Size Wrapper */}
        <p className="font-bold text-xl md:text-2xl mt-3">$ {product?.price}</p>
        <div className="flex items-center mt-5 md:mt-10 gap-4">
          <div className="flex justify-center items-center p-2 rounded-md border border-black">
            <LuMinus className="text-lg " />
          </div>
          <p className="text-lg font-bold">1</p>
          <div className="flex justify-center items-center p-2 rounded-md bg-black ">
            <LuPlus className="text-lg text-white " />
          </div>
        </div>
        <div className="flex w-full justify-center gap-5 mt-8 mb-10 md:mt-16">
          <button className="flex justify-center items-center gap-5 border w-1/2 h-14 font-bold text-lg rounded-xl  border-black">
            Add to Cart{" "}
          </button>
          <button className="flex justify-center items-center gap-5 bg-black text-white w-1/2 h-14 font-bold text-lg rounded-xl  ">
            Buy now
          </button>
        </div>
      </div>
    </div>
    )}
    {loading && <Loading />}
    </>
  );
};

export default SingleProduct;
