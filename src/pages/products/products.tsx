// import BannerProduct from "@/components/BannerProduct";
import CategoryBox from "@/components/CategoryBox";
import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/Pagination";
import Layout from "@/components/Layout";

import BannerProduct from "@/__test__/BannerProductTest";

const ProductsPage = () => {
  return (
    <Layout>
      <section className="flex flex-col flex-grow w-full">
        <div className="flex-grow px-24 my-7 lg:space-y-7 md:space-y-5">
          <BannerProduct />
          <CategoryBox />
          <ProductCard />
          <Pagination />
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
