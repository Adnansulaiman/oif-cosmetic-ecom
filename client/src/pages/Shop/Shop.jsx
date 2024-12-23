import ShopThumb from "../../assets/images/shop-image-1.jpg";
import ProductCard from "../../component/ProductCard";
import ShopFilter from "../../component/ShopFilter";
import { IoIosClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Shop = () => {
  return (
    <div className="bg-contain bg-secondary ">
      <div className="pt-24   mx-12 text-white ">
        <div
          className="  rounded-2xl h-96 bg-cover bg-center p-10"
          style={{ backgroundImage: `url(${ShopThumb})` }}
        >
          <h1 className="text-7xl font-bold max-w-5xl  ">
            We Know Everthing About Your Skin .
          </h1>
          <p className="text-lg mt-3">
            Discover your natural beauty with a marketplace of skincare products
            from the world's best brands{" "}
          </p>
        </div>
        <div className="flex mt-6 gap-4">
          <ShopFilter />
          <div className="bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 w-3/4 h-[950px]  rounded-2xl flex flex-col text-black ">
            <div className=" bg-gray-100 py-4 m-2 rounded-lg flex justify-between px-5 items-center">
              <div className="flex gap-16">
                <p className="hover:underline cursor-pointer mt-1 font-medium">
                  Clear
                </p>
                <div className="flex gap-3">
                  <div className="bg-gray-200 flex justify-between gap-3 py-1 px-2 items-center rounded-2xl ">
                    <p className="">Toner</p>
                    <IoIosClose className="text-xl cursor-pointer hover:scale-110" />
                  </div>
                  <div className="bg-gray-200 flex justify-between gap-3 px-2 items-center rounded-2xl ">
                    <p className="">Serum</p>
                    <IoIosClose className="text-xl cursor-pointer hover:scale-110" />
                  </div>
                  <div className="bg-gray-200 flex justify-between gap-3 px-2 items-center rounded-2xl ">
                    <p className="">Dry</p>
                    <IoIosClose className="text-xl cursor-pointer hover:scale-110" />
                  </div>
                  <div className="bg-gray-200 flex justify-between gap-3 px-2 items-center rounded-2xl ">
                    <p className="">With vitamin E</p>
                    <IoIosClose className="text-xl cursor-pointer hover:scale-110" />
                  </div>
                </div>
              </div>
              <div className="flex gap-1 justify-center cursor-pointer items-center">
                <p className="font-semibold">Sort</p>
                <IoIosArrowDown className="mt-1" />
              </div>
            </div>
            <div className="flex gap-10 justif flex-wrap px-11  overflow-y-auto">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
