import Layout from "@/components/Layout";
import CartItemList from "@/components/CartItemList";
import CartTotal from "@/components/CartTotal";

const CartPage = () => {
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
