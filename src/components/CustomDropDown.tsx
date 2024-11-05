import { useNavigate } from "react-router-dom";

import {
  LucideShoppingCart,
  LucideCircleCheck,
  PackageSearch,
  LogOutIcon,
  HandCoins,
  SunMedium,
  MoonIcon,
  UserIcon,
  Eclipse,
  Orbit,
  House,
} from "lucide-react";

import {
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const DropDown = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLogoutClick = (e: any) => {
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
            <DropdownMenuItem className="lg:hidden">
              <House />
              <span>Home</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="lg:hidden">
              <PackageSearch />
              <span>Products</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="lg:hidden">
              <LucideShoppingCart />
              <span>Cart</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="lg:hidden">
              <LucideCircleCheck />
              <span>Checkout</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="lg:hidden">
              <HandCoins />
              <span>Orders</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Eclipse />
                <span>Theme</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="mr-2 -mt-10">
                  <DropdownMenuItem>
                    <SunMedium />
                    <span>Light</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MoonIcon />
                    <span>Dark</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Orbit />
                    <span>System</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem onClick={handleLogoutClick}>
              <LogOutIcon />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-[80%] h-[600px] mx-auto bg-[#F0F2F1]">
          <div className="grid grid-cols-2 w-full h-full p-3">
            <div className="bg-orange-200">test 1</div>
            <div className="bg-orange-300 flex flex-col justify-center items-center">
              <h1>Register Now</h1>
              <p>
                belum memiliki akun? <span>silahkan klik disini</span>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DropDown;
