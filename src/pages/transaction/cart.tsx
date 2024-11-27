// import { CartState } from "@/utils/apis/products";

import CartItemList from "@/components/CartItemList";
import CartTotal from "@/components/CartTotal";
import Layout from "@/components/Layout";
import { CartState } from "@/utils/apis/products";
import { useSelector } from "react-redux";

interface RootState {
  cartState: CartState;
}

const CartPage = () => {
  const cartState = useSelector((state: RootState) => state.cartState);
  const numItemsInCart = cartState?.numItemsInCart ?? 0;

  if (numItemsInCart === 0) {
    return (
      <Layout>
        <section className="flex flex-grow w-full justify-center items-center">
          <h2 className="font-light">Your cart is empty</h2>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="flex flex-col flex-grow w-full">
        <div className="flex-grow px-24 my-7 space-y-5">
          <div className="grid grid-cols-3 gap-4">
            <CartItemList />
            <CartTotal />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CartPage;
