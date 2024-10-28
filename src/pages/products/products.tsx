import BannerProduct from "@/components/BannerProduct";
import CategoryBox from "@/components/CategoryBox";
import ProductCard from "@/components/ProductCard";
import Layout from "@/components/Layout";

const ProductsPage = () => {
  return (
    <Layout>
      <section className="flex flex-col flex-grow w-full">
        <div className="flex-grow px-24 my-7 lg:space-y-7 md:space-y-5">
          <BannerProduct />
          <CategoryBox />
          <ProductCard />
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
