import ShopThumb from "../../assets/images/shop-image-1.jpg";
import ProductCard from "../../component/ProductCard";
import ShopFilter from "../../component/ShopFilter";
// import { IoIosClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { useState, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import Loading from "../../component/Loading";

const Shop = () => {
  const { products, loading } = useContext(ProductContext);
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <>
      {products && (
        <div className="bg-contain bg-secondary ">
          <div className="pt-24 mx-4  md:mx-12 text-white ">
            <div
              className="  rounded-2xl h-52 md:h-96 bg-cover bg-center p-10"
              style={{ backgroundImage: `url(${ShopThumb})` }}
            >
              <h1 className="text-3xl md:text-7xl font-bold max-w-5xl  ">
                We Know Everthing About Your Skin .
              </h1>
              <p className="text-sm md:text-lg mt-3">
                Discover your natural beauty with a marketplace of skincare
                products from the world's best brands{" "}
              </p>
            </div>
            <div className="flex mt-6 gap-4">
              {/* <ShopFilter /> */}
              <div className="bg-gray-400 pb-10  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 w-full   rounded-2xl flex flex-col text-black ">
                {filterOpen && <ShopFilter />}
                <div className=" bg-gray-100 py-4 m-2 rounded-lg flex justify-between px-5 items-center">
                  <div
                    className="flex  justify-center cursor-pointer items-center"
                    onClick={() => setFilterOpen(!filterOpen)}
                  >
                    <p className="font-semibold">Filter</p>
                    <CiFilter className="mt-1" />
                  </div>

                  <div className="flex gap-1 justify-center cursor-pointer items-center">
                    <p className="font-semibold">Sort</p>
                    <IoIosArrowDown className="mt-1" />
                  </div>
                </div>
                <div className="flex gap-2 md:gap-10  justify-center flex-wrap px-11 ">
                  {products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && <Loading />}
    </>
  );
};

export default Shop;
