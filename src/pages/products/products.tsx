import ProductContainer from "@/components/ProductContainer";
import BannerProduct from "@/components/BannerProduct";
import Filter from "@/components/FilterProducts";
import Pagination from "@/components/Pagination";
import Layout from "@/components/Layout";

const ProductsPage = () => {
  return (
    <Layout>
      <section className="flex flex-col flex-grow w-full">
        <div className="flex-grow px-24 my-7 lg:space-y-7 md:space-y-5">
          <BannerProduct />
          <Filter />
          <ProductContainer />
          <Pagination />
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
