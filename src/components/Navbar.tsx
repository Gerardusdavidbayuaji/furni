import { UserIcon } from "lucide-react";
import { LucideShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center py-8 text-[white] ">
      <h1 className="font-normal text-4xl cursor-pointer">Furni.</h1>

      <div className="flex gap-7 font-light">
        <p className="un cursor-pointer">Home</p>
        <p className="un cursor-pointer">Products</p>
        <p className="un cursor-pointer">Cart</p>
        <p className="un cursor-pointer">Checkout</p>
        <p className="un cursor-pointer">Orders</p>
      </div>

      <div className="flex gap-5">
        <UserIcon className="w-5 h-5 cursor-pointer" />
        <LucideShoppingCart className="w-5 h-5 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
