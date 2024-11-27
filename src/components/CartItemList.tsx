import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import CartItem from "./CartItem";
import { CartState } from "@/utils/apis/products";
import { useSelector } from "react-redux";

interface RootState {
  cartState: CartState;
}

const CartItemList = () => {
  const cartItems = useSelector(
    (state: RootState) => state.cartState.cartItems || []
  );

  return (
    <div className="col-span-2 space-y-4">
      {/* heading cart */}
      <div className="bg-[#DFE6E6] w-full p-5 rounded-lg flex justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox id="select_all" className="shadow-none" />
          <label
            htmlFor="select_all"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#2B2B2B]"
          >
            Select All
          </label>
        </div>
        <Button className="flex text-end text-sm font-semibold text-[#395C4E] bg-transparent hover:bg-transparent shadow-none px-0">
          Delete
        </Button>
      </div>

      {/* item cart list */}
      {cartItems.map((item) => (
        <CartItem key={item.cartID} cartItem={item} />
      ))}
    </div>
  );
};

export default CartItemList;
