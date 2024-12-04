import { useSelector } from "react-redux";

import { RootState } from "@/utils/store/store";
import { formatPrice } from "@/utils/formatter";

import { Button } from "./ui/button";

const CartTotal = () => {
  const user = true;

  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <div className="bg-[#DFE6E6] dark:bg-[#242322] text-[#2B2B2B] dark:text-[#FAFAFA] p-5 h-60 rounded-lg space-y-2 text-base font-medium">
      <h1 className="mt-1">Shopping Summary</h1>
      <div className=" space-y-2">
        <div className="flex justify-between text-sm font-normal">
          <h2>Sub total</h2>
          <p>{formatPrice(cartTotal)}</p>
        </div>
        <div className="flex justify-between text-sm font-normal">
          <h2>Shipping</h2>
          <p>{formatPrice(shipping)}</p>
        </div>
        <div className="flex justify-between text-sm font-normal">
          <h2>Tax</h2>
          <p>{formatPrice(tax)}</p>
        </div>
        <div className="flex justify-between text-sm font-normal">
          <h2>Orders total</h2>
          <p className="text-[#778F86] text-base font-medium">
            {formatPrice(orderTotal)}
          </p>
        </div>
      </div>
      {user ? (
        <Button className="w-full bg-[#F5C02F] shadow-none hover:bg-[#F5C02F]/80 text-[#2B2B2B]">
          Checkout
        </Button>
      ) : (
        <Button className="w-full bg-[#F5C02F] shadow-none hover:bg-[#F5C02F]/80 text-[#2B2B2B]">
          Please Login
        </Button>
      )}
    </div>
  );
};

export default CartTotal;
