import { useDispatch } from "react-redux";

import { removeItem, editItem } from "@/utils/store/cartSlice";
import { ICartItem } from "@/utils/apis/products";
import { formatPrice } from "@/utils/formatter";

import { Trash2Icon, MinusIcon, PlusIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  cartItem: ICartItem;
}

const CartItem = ({ cartItem }: CartItemProps) => {
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    const cartID = parseInt(cartItem.cartID);
    dispatch(removeItem(cartID));
  };

  const handleAmountChange = (newAmount: number) => {
    const cartID = parseInt(cartItem.cartID);
    dispatch(editItem({ id: cartID, quantity: newAmount }));
  };

  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;
  return (
    <div key={cartID} className="bg-[#DFE6E6] w-full p-5 rounded-lg">
      <div className="flex items-center space-x-2">
        <Checkbox id={`select-item-${cartID}`} />
        <label
          htmlFor={`select-item-${cartID}`}
          className="text-sm font-medium text-[#2B2B2B]"
        >
          {company}
        </label>
      </div>

      <div className="ml-7 mt-2">
        <div className="flex justify-between space-x-4">
          <div className="flex space-x-2">
            <img
              src={image}
              alt={title}
              className="h-20 w-20 object-cover rounded-lg"
            />
            <div className="space-y-1">
              <h4 className="text-sm font-normal">{title}</h4>
              <div className="flex items-center space-x-2">
                <h1 className="text-xs font-normal">Color :</h1>
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: productColor ?? "#000000" }}
                />
              </div>
            </div>
          </div>

          <div className="grid justify-between">
            <h1 className="text-base font-medium text-[#2B2B2B] text-end">
              {formatPrice(price)}
            </h1>
            <div className="flex items-center space-x-2">
              <Button
                className="bg-[#DFE6E6] hover:bg-[#FABD05] p-2 rounded-full"
                onClick={removeItemFromCart}
              >
                <Trash2Icon className="text-[#395C4E]" />
              </Button>

              <div className="flex items-center space-x-2 p-1 border rounded-md">
                <Button
                  className="bg-[#DFE6E6] hover:bg-[#FABD05] p-1 rounded-full"
                  onClick={() => handleAmountChange(Math.max(1, amount - 1))}
                >
                  <MinusIcon className="text-[#2B2B2B]" />
                </Button>
                <p className="text-base font-medium text-[#2B2B2B]">{amount}</p>
                <Button
                  className="bg-[#DFE6E6] hover:bg-[#FABD05] p-1 rounded-full"
                  onClick={() => handleAmountChange(amount + 1)}
                >
                  <PlusIcon className="text-[#395C4E]" />
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
