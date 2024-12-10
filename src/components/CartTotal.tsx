import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "@/utils/store/store";
import { formatPrice } from "@/utils/formatter";

import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import Auth from "@/pages/auth/auth";

const CartTotal = () => {
  const user = true;
  const [isPaymentSuccessed, setIsPaymentSuccessed] = useState(false);
  const navigate = useNavigate();
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state: RootState) => state.cart
  );

  const handlePayment = () => {
    setIsPaymentSuccessed(true);
    setTimeout(() => {
      navigate("/orders");
    }, 3000);
  };

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
        <Dialog>
          <DialogTrigger className="w-full">
            <Button className="w-full bg-[#F5C02F] shadow-none hover:bg-[#F5C02F]/80 text-[#2B2B2B]">
              Checkout
            </Button>
          </DialogTrigger>
          {!isPaymentSuccessed ? (
            <DialogContent className="w-2/5 h-[350px] mx-auto">
              <div className="flex flex-col justify-between">
                <div>
                  <h1 className="font-semibold text-2xl">Total Pesanan Anda</h1>
                  <p className="text-[#2B2B2B]/70 dark:text-[#bfbfbb] font-normal text-base">
                    Cek total belanja Anda sebelum melanjutkan ke pembayaran
                  </p>
                </div>
                <div className="space-y-2">
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
                <Button
                  className="w-full bg-[#F5C02F] shadow-none hover:bg-[#F5C02F]/80 text-[#2B2B2B]"
                  onClick={handlePayment}
                >
                  Bayar Sekarang
                </Button>
              </div>
            </DialogContent>
          ) : (
            <DialogContent className="w-2/5 h-[350px] mx-auto">
              <div className="flex flex-col justify-center text-center space-y-1">
                <h1 className="font-semibold text-2xl">Pembayaran Berhasil</h1>
                <p className="text-[#2B2B2B]/70 dark:text-[#bfbfbb] font-normal text-base">
                  Terima kasih telah berbelanja! Pembayaran Anda telah diproses
                  dengan sukses.
                </p>
              </div>
            </DialogContent>
          )}
        </Dialog>
      ) : (
        <Dialog>
          <DialogTrigger className="w-full">
            <Button className="w-full bg-[#F5C02F] shadow-none hover:bg-[#F5C02F]/80 text-[#2B2B2B]">
              Please Login
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[90%] h-[685px] mx-auto">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 w-full h-full p-3">
              <div className="lg:flex flex-col justify-center md:hidden">
                <h1 className="w-80 font-semibold text-3xl leading-10 ">
                  Transform Your Space with Elegant Furniture.
                </h1>
                <p className="text-[#2B2B2B] dark:text-[#bfbfbb] font-normal text-base mt-1">
                  Bawa kenyamanan ke rumah Anda dengan koleksi furnitur terbaru
                  kami.
                </p>
              </div>
              <div className="bg-[#DFE6E6] dark:bg-[#242322] p-5 space-y-5 overflow-auto touch-pan-y rounded-lg">
                <Auth />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default CartTotal;
