import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "@/hooks/use-toast";
import { useEffect } from "react";

import { clearCart, toggleAllCheck } from "@/utils/store/cartSlice";
import { RootState } from "@/utils/store/store";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import CartItem from "./CartItem";

const CartItemList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: RootState) => state.cartState.cartItems || []
  );

  const allChecked = cartItems.every((item) => item.checked);

  const handleSelectAll = () => {
    dispatch(toggleAllCheck(!allChecked));
  };

  useEffect(() => {
    dispatch(toggleAllCheck(true));
  }, [dispatch]);

  const handleClearCart = () => {
    dispatch(clearCart());
    toast({
      title: "Success removed all item",
      description: "All item removed from cart",
      variant: "destructive",
    });
  };

  return (
    <div className="lg:col-span-2 md:col-span-2 space-y-4">
      <div className="bg-[#DFE6E6] dark:bg-[#242322] w-full p-5 rounded-lg flex justify-between h-[77px]">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="select_all"
            className="shadow-none"
            checked={allChecked}
            onCheckedChange={handleSelectAll}
          />
          <label
            htmlFor="select_all"
            className="text-xs lg:text-sm md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#2B2B2B] dark:text-[#FAFAFA]"
          >
            Select All <span>({cartItems.length})</span>
          </label>
        </div>

        {cartItems.some((item) => item.checked) && (
          <Button
            onClick={handleClearCart}
            className="flex text-end text-xs lg:text-sm md:text-sm font-semibold text-[#395C4E] dark:text-[#778F86] bg-transparent hover:bg-transparent shadow-none px-0"
          >
            Delete
          </Button>
        )}
      </div>

      {cartItems.map((item) => (
        <CartItem key={item.cartID} cartItem={item} />
      ))}
    </div>
  );
};

export default CartItemList;
