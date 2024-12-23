import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

const ShopFilter = () => {
  const [open, setOpen] = useState({
    category: false,
    price: false,
    skinType: false,
    ingredients: false,
  });
  return (
    <div className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 w-1/4 p-10 flex flex-col gap-5   rounded-2xl text-black">
      <div className="flex flex-col pb-2  border-0 border-b-2 border-black border-opacity-40 ">
        <div
          className="flex justify-between w-full items-center cursor-pointer my-2"
          onClick={() =>
            setOpen((prev) => ({ ...prev, category: !open?.category }))
          }
        >
          <h1 className="text-lg font-semibold">Category</h1>
          {open.category ? (
            <LuMinus className="text-xl" />
          ) : (
            <GoPlus className="text-xl" />
          )}
        </div>
        {open.category && (
          <ul className="flex flex-col gap-2 mb-3 ease-in-out duration-500">
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p>Body care</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p>Toners</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p>Serums</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p>Face cream</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p>Eye & Up care</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p>Masks & Treatments</p>
            </li>
          </ul>
        )}
      </div>
      <div className="flex flex-col pb-2  border-0 border-b-2 border-black border-opacity-40">
        <div
          className="flex justify-between w-full items-center cursor-pointer my-2"
          onClick={() => setOpen((prev) => ({ ...prev, price: !open?.price }))}
        >
          <h1 className="text-lg font-semibold">Price</h1>
          {open.price ? (
            <LuMinus className="text-xl" />
          ) : (
            <GoPlus className="text-xl" />
          )}
        </div>
        {open.price && (
          <ul className="flex flex-col gap-2 mb-3 ease-in-out duration-500">
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p>$1000 - More</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p>$500 - $999</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p>$100 - $499</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p>$50 - $99</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p>$1 - $49</p>
            </li>
          </ul>
        )}
      </div>
      <div className="flex flex-col pb-2  border-0 border-b-2 border-black border-opacity-40 ">
        <div
          className="flex justify-between w-full items-center cursor-pointer my-2"
          onClick={() =>
            setOpen((prev) => ({ ...prev, skinType: !open?.skinType }))
          }
        >
          <h1 className="text-lg font-semibold">Skin Type</h1>
          {open.skinType ? (
            <LuMinus className="text-xl" />
          ) : (
            <GoPlus className="text-xl" />
          )}
        </div>
        {open.skinType && (
          <ul className="flex flex-col gap-2 mb-3 ease-in-out duration-500">
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p>Dry</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p>Oily</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p>Combination</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p>Sensitive</p>
            </li>
          </ul>
        )}
      </div>
      <div className="flex flex-col pb-2  border-0 border-b-2 border-black border-opacity-40 ">
        <div
          className="flex justify-between w-full items-center cursor-pointer my-2"
          onClick={() =>
            setOpen((prev) => ({ ...prev, ingredients: !open?.ingredients }))
          }
        >
          <h1 className="text-lg font-semibold">Ingredients</h1>
          {open.ingredients ? (
            <LuMinus className="text-xl" />
          ) : (
            <GoPlus className="text-xl" />
          )}
        </div>
        {open.ingredients && (
          <ul className="flex flex-col gap-2 mb-3 ease-in-out duration-500">
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p>With vitamin E</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p>Paraben-Free</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p>Cruelty-Free</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p>Natural oils</p>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShopFilter;
