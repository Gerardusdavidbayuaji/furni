import { RootState } from "@/utils/store/store";
import { useSelector } from "react-redux";

import CartItemList from "@/components/CartItemList";
import CartTotal from "@/components/CartTotal";
import Layout from "@/components/Layout";

const CartPage = () => {
  const cartState = useSelector(
    (state: RootState) => state.cartState.cartItems
  );

  if (cartState.length === 0) {
    return (
      <Layout>
        <section className="flex flex-grow w-full justify-center items-center">
          <h2 className="font-light">Wow, your cart is empty</h2>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="flex flex-col flex-grow w-full">
        <div className="flex-grow px-12 sm:px-12 lg:px-24 my-7 space-y-5">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1  gap-4">
            <CartItemList />
            <CartTotal />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CartPage;
