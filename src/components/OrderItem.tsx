import { Button } from "@/components/ui/button";
import product1 from "/assets/product-1.jpeg";
import { ShoppingBag } from "lucide-react";

const OrderItem = () => {
  return (
    <div className="bg-[#DFE6E6] w-full px-5 py-[23px] rounded-lg">
      <div className="flex items-center justify-between space-x-4 text-sm font-normal text-[#2B2B2B]">
        <div className="flex items-center space-x-3">
          <ShoppingBag className="h-4 w-4" />
          <p>Shopping</p>
          <p>2 November 2024</p>
        </div>
        <div className="bg-[#778F86]/30 px-2 py-1 rounded-md">
          <p className="text-[#395C4E] font-semibold">Done</p>
        </div>
      </div>
      <div className="ml-7 mt-2">
        <div className="flex justify-between space-x-4">
          <div className="flex space-x-2">
            <img
              src={product1}
              alt="product-test"
              className="h-20 w-20 object-cover rounded-lg"
            />
            <div className="space-y-1">
              <h4 className="text-sm font-normal">Comfy Bed</h4>
              <p className="text-xs font-normal">1 product x Rp2.250.000</p>
            </div>
          </div>

          <div className="grid justify-between space-y-1">
            <p className="text-xs font-normal">Shopping amount</p>
            <h1 className="text-base font-medium text-[#2B2B2B] text-end">
              Rp2.250.000
            </h1>
            <div className="flex justify-end items-end">
              <Button className="bg-[#395C4E] shadow-none hover:bg-[#395C4E]/80 py-0 px-0 w-20 text-xs font-medium text-[#FAFAFA]">
                Buy again
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
