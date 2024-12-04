import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/utils/store/store";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import CartItem from "./CartItem";
import { clearCart } from "@/utils/store/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "@/hooks/use-toast";

const CartItemList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: RootState) => state.cart.cartItems || []
  );
  const [selectAll, setSelectAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  useEffect(() => {
    setCheckedItems(cartItems.map((item) => item.id));
  }, [cartItems]);

  useEffect(() => {
    setSelectAll(checkedItems.length === cartItems.length);
  }, [checkedItems, cartItems.length]);

  const handleSelectAll = () => {
    if (selectAll) {
      setCheckedItems([]);
    } else {
      setCheckedItems(cartItems.map((item) => item.id));
    }
  };

  const handleItemCheck = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast({
      title: "Success removed all item",
      description: "All item removed from cart",
      variant: "destructive",
    });
  };

  return (
    <div className="col-span-2 space-y-4">
      <div className="bg-[#DFE6E6] dark:bg-[#242322] w-full p-5 rounded-lg flex justify-between h-[77px]">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="select_all"
            className="shadow-none"
            checked={selectAll}
            onCheckedChange={handleSelectAll}
          />
          <label
            htmlFor="select_all"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#2B2B2B] dark:text-[#FAFAFA]"
          >
            Select All <span>({cartItems.length})</span>
          </label>
        </div>

        {checkedItems.length > 0 && (
          <Button
            onClick={handleClearCart}
            className="flex text-end text-sm font-semibold text-[#395C4E] dark:text-[#778F86] bg-transparent hover:bg-transparent shadow-none px-0"
          >
            Delete
          </Button>
        )}
      </div>

      {cartItems.map((item) => (
        <CartItem
          key={item.cartID}
          cartItem={item}
          isChecked={checkedItems.includes(item.id)}
          onCheckChange={handleItemCheck}
        />
      ))}
    </div>
  );
};

export default CartItemList;
