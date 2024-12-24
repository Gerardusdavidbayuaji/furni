import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/store/store";
import { formatPrice } from "@/utils/formatter";

const OrderItem = () => {
  const orders = useSelector((state: RootState) => state.orderState.orders);

  return (
    <>
      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-[#DFE6E6] dark:bg-[#242322] w-full px-5 py-[23px] rounded-lg flex flex-row"
        >
          <div className="flex items-center justify-between space-x-4 text-sm font-normal text-[#2B2B2B]">
            <div className="flex items-center space-x-3 bg-orange-100">
              <ShoppingBag className="h-4 w-4 text-[#2B2B2B] dark:text-[#FAFAFA]" />
              <p className="text-[#2B2B2B] dark:text-[#FAFAFA]">Shopping</p>
              <p className="text-[#2B2B2B] dark:text-[#FAFAFA]">
                {order.paymentDate}
              </p>
            </div>
          </div>
          {/* Produk */}
          {order.products.map((product) => (
            <div key={product.id} className="ml-7 mt-2">
              <div className="flex justify-between space-x-4">
                <div className="flex space-x-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-20 w-20 object-cover rounded-lg"
                  />
                  <div className="space-y-1">
                    <h4 className="text-sm font-normal">{product.title}</h4>
                    <p className="text-xs font-normal text-[#2B2B2B] dark:text-[#778F86]">
                      {product.quantity} product x {formatPrice(product.price)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Order Total (Hanya 1x per order) */}
          <div className="bg-[#778F86]/30 px-2 py-1 rounded-md">
            <p className="text-[#395C4E] font-semibold">Done</p>
          </div>
          <div className="flex justify-between mt-4 ml-7">
            <div className="text-sm font-normal">
              <p className="text-xs">Shopping amount</p>
              <h1 className="text-base font-medium text-[#2B2B2B] dark:text-[#778F86]">
                {formatPrice(order.totalAmount)}
              </h1>
            </div>
            <div className="flex justify-end items-end">
              <Link to="/">
                <Button className="bg-[#395C4E] shadow-none hover:bg-[#395C4E]/80 py-0 px-0 w-20 text-xs font-medium text-[#FAFAFA]">
                  Buy again
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OrderItem;
