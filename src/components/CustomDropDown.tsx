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

const DropDown = () => {
  const navigate = useNavigate();

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
            <DropdownMenuItem onClick={() => navigate("/login")}>
              <LogOutIcon />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default DropDown;
