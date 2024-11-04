import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import product1 from "/assets/product-1.jpeg";
import { Trash2Icon } from "lucide-react";
import { MinusIcon } from "lucide-react";
import { PlusIcon } from "lucide-react";

const CartItem = () => {
  return (
    <div className="bg-[#DFE6E6] w-full p-5 rounded-lg">
      <div className="flex items-center space-x-2">
        <Checkbox id="select-item" />
        <label
          htmlFor="select-item"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#2B2B2B]"
        >
          PT Lorem Ipsum
        </label>
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
              <div className="flex items-center space-x-2">
                <h1 className="text-xs font-normal">Color :</h1>
                <div className="w-4 h-4 rounded-full bg-[#D9D9D9]" />
              </div>
            </div>
          </div>

          <div className="grid justify-between">
            <h1 className="text-base font-medium text-[#2B2B2B] text-end">
              Rp2.250.000
            </h1>
            <div className="flex items-end w-auto space-x-2">
              <Button className="bg-[#DFE6E6] hover:bg-[#FABD05] py-0 px-0 h-8 w-8 shadow-none">
                <Trash2Icon className="text-[#395C4E]" />
              </Button>
              <div className="outline outline-1 outline-[#778F86] flex items-center space-x-2 p-1 rounded-md">
                <Button className="bg-[#DFE6E6] hover:bg-[#FABD05] py-0 px-0 h-5 w-5 shadow-none">
                  <MinusIcon className="text-[#2B2B2B]" />
                </Button>

                <p className="text-base font-medium text-[#2B2B2B]">1</p>

                <Button className="bg-[#DFE6E6] hover:bg-[#FABD05] py-0 px-0 h-5 w-5 shadow-none">
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
