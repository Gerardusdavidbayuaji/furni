import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "@/utils/store/store";
import { formatPrice } from "@/utils/formatter";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const OrderItem = () => {
  const orders = useSelector((state: RootState) => state.orderState.orders);

  return (
    <>
      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-[#DFE6E6] dark:bg-[#242322] flex flex-col lg:flex lg:flex-row md:flex md:flex-row w-full px-5 py-[23px] rounded-lg space-y-2"
        >
          <div className="w-full flex flex-col">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="h-4 w-4 text-[#2B2B2B] dark:text-[#FAFAFA]" />
              <p className="text-[#2B2B2B] dark:text-[#FAFAFA] text-xs lg:text-sm md:text-sm font-medium">
                Shopping
              </p>
              <p className="text-[#2B2B2B] dark:text-[#FAFAFA] text-xs lg:text-sm md:text-sm font-medium">
                {order.paymentDate}
              </p>
            </div>

            {order.products.map((product) => (
              <div className="lg:ml-7 md:ml-7 mt-2">
                <div className="lg:flex lg:justify-between lg:space-x-4 md:flex md:justify-between md:space-x-4 space-y-2">
                  <div className="flex space-x-2">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover rounded-lg h-10 w-10 lg:h-20 lg:w-20 md:h-20 md:w-20"
                    />
                    <div className="space-y-1">
                      <h4 className="font-normal md:text-sm text-xs">
                        {product.title}
                      </h4>
                      <p className="text-xs font-normal text-[#2B2B2B] dark:text-[#778F86]">
                        {product.quantity} product x{" "}
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-1 flex flex-row lg:flex lg:flex-col md:flex md:flex-col lg:justify-end lg:items-end md:justify-end md:items-end justify-between items-center w-full">
            <p className="hidden md:flex text-[#395C4E] bg-[#778F86]/30 rounded-md font-semibold px-2 py-1 justify-center text-center w-16">
              Done
            </p>
            <div className="text-sm font-normal flex flex-col justify-start items-start lg:justify-end lg:items-end md:justify-end md:items-end">
              <p className="text-xs">Shopping amount</p>
              <h1 className="text-xs lg:text-base md:text-base font-normal text-[#2B2B2B] dark:text-[#778F86]">
                {formatPrice(order.totalAmount)}
              </h1>
            </div>
            <Link to="/products">
              <Button className="bg-[#395C4E] shadow-none hover:bg-[#395C4E]/80 py-0 px-0 w-20 text-xs font-medium text-[#FAFAFA]">
                Buy again
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default OrderItem;
