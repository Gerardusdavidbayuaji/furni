import Layout from "@/components/Layout";
import OrderItem from "@/components/OrderItem";

const OrdersPage = () => {
  return (
    <Layout>
      <div className="flex-grow px-12 sm:px-12 lg:px-24 my-7 space-y-5">
        <OrderItem />
      </div>
    </Layout>
  );
};

export default OrdersPage;
