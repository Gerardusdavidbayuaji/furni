import { useState } from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import ThemeSubmenu from "./ThemeSubmenu";
import Auth from "@/pages/auth/auth";
import MenuItem from "./MenuItem";

import {
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

import {
  LucideShoppingCart,
  PackageSearch,
  LogOutIcon,
  HandCoins,
  UserIcon,
  House,
} from "lucide-react";

const DropDown = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLogoutClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDialogOpen(true);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <UserIcon className="w-6 h-6 cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 mr-24 mt-1">
          <DropdownMenuLabel>Hi, Jhon Doe</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <MenuItem Icon={House} label="Home" to="/" className="lg:hidden" />
            <MenuItem
              Icon={PackageSearch}
              label="Products"
              to="/products"
              className="lg:hidden"
            />
            <MenuItem
              Icon={LucideShoppingCart}
              label="Cart"
              to="/cart"
              className="lg:hidden"
            />
            <MenuItem
              Icon={HandCoins}
              label="Orders"
              to="/orders"
              className="lg:hidden"
            />
            <ThemeSubmenu />
            <MenuItem
              Icon={LogOutIcon}
              label="Logout"
              onClick={handleLogoutClick}
            />
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-[#F0F2F1] w-[90%] h-[685px] mx-auto">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 w-full h-full p-3">
            <div className="lg:flex flex-col justify-center md:hidden">
              <h1 className="w-80 font-semibold text-3xl leading-10 ">
                Transform Your Space with Elegant Furniture.
              </h1>
              <p className="text-[#2B2B2B] dark:text-[#bfbfbb] font-normal text-base mt-1">
                Bawa kenyamanan ke rumah Anda dengan koleksi furnitur terbaru
                kami.
              </p>
            </div>
            <div className="bg-[#DFE6E6] dark:bg-[#242322] p-5 space-y-5 overflow-auto touch-pan-y rounded-lg">
              <Auth />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DropDown;
