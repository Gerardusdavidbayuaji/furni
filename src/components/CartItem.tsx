import { useDispatch } from "react-redux";

import { removeItem, editItem, toggleItemCheck } from "@/utils/store/cartSlice";
import { ICartItem } from "@/utils/apis/products";
import { formatPrice } from "@/utils/formatter";

import { Trash2Icon, MinusIcon, PlusIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface CartItemProps {
  cartItem: ICartItem;
}

const CartItem = ({ cartItem }: CartItemProps) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    const cartID = parseInt(cartItem.cartID);
    dispatch(removeItem(cartID));
    toast({
      title: "Success removed item",
      description: "Item removed from cart",
      variant: "destructive",
    });
  };

  const handleAmountChange = (newAmount: number) => {
    if (newAmount < 1 || newAmount > 100) return;
    dispatch(editItem({ id: cartItem.id, quantity: newAmount }));
  };

  const handleCheckBoxChange = () => {
    dispatch(toggleItemCheck(cartItem.id));
  };

  return (
    <div
      key={cartItem.id}
      className="bg-[#DFE6E6] dark:bg-[#242322] w-full p-5 rounded-lg"
    >
      <div className="flex items-center space-x-2">
        <Checkbox
          id={`select-item-${cartItem.id}`}
          checked={cartItem.checked} // Status checkbox mengikuti `cartItem.checked`
          onCheckedChange={handleCheckBoxChange}
          className="shadow-none"
        />
        <label
          htmlFor={`select-item-${cartItem.id}`}
          className="text-sm font-medium text-[#2B2B2B] dark:text-[#FAFAFA]"
        >
          {cartItem.company}
        </label>
      </div>

      <div className="ml-7 mt-2">
        <div className="flex justify-between space-x-4">
          <div className="flex space-x-2">
            <img
              src={cartItem.image}
              alt={cartItem.title}
              className="h-20 w-20 object-cover rounded-lg"
            />
            <div className="space-y-1">
              <h4 className="text-sm font-normal">{cartItem.title}</h4>
              <div className="flex items-center space-x-2">
                <h1 className="text-xs font-normal">Color :</h1>
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: cartItem.productColor ?? "#000000",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="grid justify-between">
            <h1 className="text-base font-normal text-[#2B2B2B] dark:text-[#FAFAFA] text-end">
              {formatPrice(cartItem.price)}
            </h1>
            <div className="flex items-center space-x-2">
              <Button
                className="bg-[#DFE6E6] dark:bg-[#242322] hover:bg-[#778F86] hover:dark:bg-[#778F86] p-0 h-8 w-8 rounded-md shadow-none"
                onClick={handleRemoveItem}
              >
                <Trash2Icon className="text-[#2B2B2B] dark:text-[#FAFAFA]" />
              </Button>

              <div className="flex items-center space-x-2 p-1 border border-spacing-1 border-[#2B2B2B] rounded-md">
                <Button
                  className="bg-[#DFE6E6] dark:bg-[#242322] hover:bg-[#778F86] hover:dark:bg-[#778F86] p-0 h-8 w-8 rounded-md shadow-none"
                  onClick={() => handleAmountChange(cartItem.quantity - 1)}
                >
                  <MinusIcon className="text-[#2B2B2B] dark:text-[#FAFAFA]" />
                </Button>
                <p className="text-sm font-normal text-[#2B2B2B] dark:text-[#FAFAFA] w-4 flex justify-center text-center">
                  {cartItem.quantity}
                </p>
                <Button
                  className="bg-[#DFE6E6] dark:bg-[#242322] hover:bg-[#778F86] hover:dark:bg-[#778F86] p-0 h-8 w-8 rounded-md shadow-none"
                  onClick={() => handleAmountChange(cartItem.quantity + 1)}
                >
                  <PlusIcon className="text-[#2B2B2B] dark:text-[#FAFAFA]" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
