import ProductContainer from "@/components/ProductContainer";
import BannerProduct from "@/components/BannerProduct";
import Filter from "@/components/FilterProducts";
import Pagination from "@/components/Pagination";
import Layout from "@/components/Layout";
import { useState } from "react";

const ProductsPage = () => {
  const [filters, setFilters] = useState<any>({});
  const [page, setPage] = useState(1);

  const handleSearch = (newFilters: any) => {
    setFilters(newFilters);
    setPage(1); // Reset to first page after search
  };

  return (
    <Layout>
      <section className="flex flex-col flex-grow w-full">
        <div className="flex-grow px-24 my-7 lg:space-y-7 md:space-y-5">
          <BannerProduct />
          <Filter onSearch={handleSearch} />
          <ProductContainer filters={filters} page={page} />
          <Pagination
            currentPage={page}
            totalPages={10}
            onPageChange={setPage}
          />
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
