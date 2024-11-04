import { Button } from "./ui/button";

const CartTotal = () => {
  return (
    <div className="bg-[#DFE6E6] text-[#2B2B2B] p-5 h-60 rounded-lg space-y-2 text-base font-medium">
      <h1 className="mt-1">Shopping Summary</h1>
      <div className=" space-y-2">
        <div className="flex justify-between">
          <h4 className="text-sm font-normal">Sub total</h4>
          <h2 className="">Rp2.250.000</h2>
        </div>
        <div className="flex justify-between">
          <h4 className="text-sm font-normal">Shipping</h4>
          <h2 className="">Rp150.000</h2>
        </div>
        <div className="flex justify-between">
          <h4 className="text-sm font-normal">Tax</h4>
          <h2 className="">Rp30.000</h2>
        </div>
        <div className="flex justify-between">
          <h4 className="text-sm font-normal">Orders total</h4>
          <h2 className="text-[#395C4E]">Rp2.680.000</h2>
        </div>
      </div>
      <Button className="w-full bg-[#F5C02F] shadow-none hover:bg-[#F5C02F]/80 text-[#2B2B2B]">
        Buy (1)
      </Button>
    </div>
  );
};

export default CartTotal;
