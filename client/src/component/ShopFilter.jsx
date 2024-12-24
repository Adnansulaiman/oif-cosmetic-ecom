import { useState } from "react";

import FilterList from "./FilterList";

const categoryItem = ['Body Care','Toners','Serums','Face Creams','Eye & Up care','masks & Treatments'];
const skinTypeItem = ['Dry','Oily','Combination','Sensitive'];
const ingredientsItem = ['With Vitamin E','Cruelty-Free','Parabean-Free','Naturals Oils'];
const priceItem = ['$1000 - More','$500 - $999','$100 - $499','$50 - $99','$1 - $49'];



const ShopFilter = () => {
  const [open, setOpen] = useState({
    category: false,
    price: false,
    skinType: false,
    ingredients: false,
  });
  return (
    <div className="bg-gray-400 z-40 top-16 left-2 absolute bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 w-1/2 md:w-1/4 p-4 md:p-10 flex flex-col md:gap-5   rounded-2xl text-black">
      <FilterList openValue={open?.category} setOpen={setOpen} keyName='category'name='Category' items={categoryItem}  />
      <FilterList openValue={open?.price} setOpen={setOpen} keyName='price' name='Price' items={priceItem}  />
      <FilterList openValue={open?.skinType} setOpen={setOpen} keyName='skinType' name='Skin Type' items={skinTypeItem}  />
      <FilterList openValue={open?.ingredients} setOpen={setOpen} keyName='ingredients' name='Ingredients' items={ingredientsItem}  />
      {/* <div className="flex flex-col pb-2  border-0 border-b-2 border-black border-opacity-40">
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
              <input type="checkbox" className="w-3 h-3 md:w-4 md:h-4" />{" "}
              <p>$1000 - More</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-3 h-3 md:w-4 md:h-4" />{" "}
              <p>$500 - $999</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-3 h-3 md:w-4 md:h-4" />{" "}
              <p>$100 - $499</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-3 h-3 md:w-4 md:h-4" />{" "}
              <p>$50 - $99</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-3 h-3 md:w-4 md:h-4" />{" "}
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
              <input type="checkbox" className="w-3 h-3 md:w-4 md:h-4" />{" "}
              <p>Dry</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-3 h-3 md:w-4 md:h-4" />{" "}
              <p>Oily</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-3 h-3 md:w-4 md:h-4" />{" "}
              <p>Combination</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-3 h-3 md:w-4 md:h-4" />{" "}
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
              <input type="checkbox" className="w-3 h-3 md:w-4 md:h-4" />{" "}
              <p>With vitamin E</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-3 h-3 md:w-4 md:h-4" />{" "}
              <p>Paraben-Free</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-3 h-3 md:w-4 md:h-4" />{" "}
              <p>Cruelty-Free</p>
            </li>
            <li className="flex gap-4 items-center">
              <input type="checkbox" className="w-3 h-3 md:w-4 md:h-4" />{" "}
              <p>Natural oils</p>
            </li>
          </ul>
        )}
      </div> */}
    </div>
  );
};

export default ShopFilter;
