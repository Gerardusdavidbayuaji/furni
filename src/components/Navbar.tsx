import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { RootState } from "@/utils/store/store";

import { LucideShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import DropDown from "./CustomDropDown";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const cartItems = useSelector(
    (state: RootState) => state.cartState?.cartItems ?? []
  );

  const numItemsInCart = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  useEffect(() => {
    console.log("numItemsInCart:", numItemsInCart);
    console.log("cartItems:", cartItems);
  }, [numItemsInCart, cartItems]);

  return (
    <header className="w-full bg-[#395C4E] sticky top-0 z-50">
      <nav className="mx-auto flex justify-between items-center text-[#FAFAFA] py-6 px-24">
        <Link to="/">
          <h1 className="font-normal text-4xl cursor-pointer">Furni.</h1>
        </Link>
        <NavLinks />
        <div className="flex gap-5">
          <div className="relative flex cursor-pointer">
            <Link to="/cart">
              <LucideShoppingCart className="w-6 h-6" />
              <Badge className="absolute -top-2 -right-3 flex items-center justify-center rounded-full h-auto w-4 bg-[#F5C02F]">
                <span className="text-center text-[#2B2B2B] text-xs">
                  {numItemsInCart}
                </span>
              </Badge>
            </Link>
          </div>
          <DropDown />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
