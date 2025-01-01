import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "@/utils/store/store";

import { LucideShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import DropDown from "./CustomDropDown";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
      setIsScrolled(currentScrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const cartItems = useSelector(
    (state: RootState) => state.cartState?.cartItems ?? []
  );

  const numItemsInCart = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-[#395C4E]/80 backdrop-blur-md" : "bg-[#395C4E]"}`}
    >
      <nav className="px-12 sm:px-12 lg:px-24 py-3 sm:py-3 md:py-4 lg:py-5 mx-auto flex justify-between items-center text-[#FAFAFA]">
        <Link to="/">
          <h1 className="text-xl md:text-4xl font-normal cursor-pointer">
            Furni.
          </h1>
        </Link>
        <NavLinks />
        <div className="flex gap-4 md:gap-5 justify-center items-center">
          <div className="relative flex cursor-pointer">
            <Link to="/cart">
              <LucideShoppingCart className="w-5 h-5 md:w-5 md:h-5" />
              <Badge className="absolute -top-2 -right-3 flex items-center justify-center rounded-full h-auto w-3 md:w-4 bg-[#F5C02F]">
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
