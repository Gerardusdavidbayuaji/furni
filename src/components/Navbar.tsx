import { LucideShoppingCart } from "lucide-react";
import { UserIcon } from "lucide-react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <header className="w-full bg-[#395C4E] sticky top-0 z-50">
      <nav className="mx-auto flex justify-between items-center text-white py-6 px-24">
        <h1 className="font-normal text-4xl cursor-pointer">Furni.</h1>
        <NavLinks />
        <div className="flex gap-5">
          <UserIcon className="w-5 h-5 cursor-pointer" />
          <LucideShoppingCart className="w-5 h-5 cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
