import { BsArrowUpRight } from "react-icons/bs";
import ProductImage from "../../assets/images/product-1.jpeg";

const ListItem = () => {
  return (
    <div
      className="w-48 h-48 rounded-2xl bg-cover bg-center  flex flex-col justify-between p-2 "
      style={{ backgroundImage: `url(${ProductImage})` }}
    >
        <div className="flex justify-end">
        <BsArrowUpRight className="text-2xl" />

        </div>
      <p className="m-1 font-semibold">Mystic Noir</p>
    </div>
  );
};

export default ListItem;
