import { Button } from "./ui/button";
import { formatPrice } from "@/utils/formatter";
import { CartState } from "@/utils/apis/products";
import { useSelector } from "react-redux";

interface RootState {
  cartState: CartState;
}

const CartTotal = () => {
  const user = true;
  // const { cartTotal, shipping, tax, orderTotal } = useSelector(
  //   (state: RootState) => state.cartState
  // );

  const {
    cartTotal = 2,
    shipping = 3,
    tax = 2,
    orderTotal = 2,
  } = useSelector((state: RootState) => state.cartState || {});

  return (
    <div className="bg-[#DFE6E6] text-[#2B2B2B] p-5 h-60 rounded-lg space-y-2 text-base font-medium">
      <h1 className="mt-1">Shopping Summary</h1>
      <div className=" space-y-2">
        <div className="flex justify-between">
          <h4 className="text-sm font-normal">Sub total</h4>
          <h2>{formatPrice(cartTotal)}</h2>
        </div>
        <div className="flex justify-between">
          <h4 className="text-sm font-normal">Shipping</h4>
          <h2>{formatPrice(shipping)}</h2>
        </div>
        <div className="flex justify-between">
          <h4 className="text-sm font-normal">Tax</h4>
          <h2>{formatPrice(tax)}</h2>
        </div>
        <div className="flex justify-between">
          <h4 className="text-sm font-normal">Orders total</h4>
          <h2 className="text-[#395C4E]">{formatPrice(orderTotal)}</h2>
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
