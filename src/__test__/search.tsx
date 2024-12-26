import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import FormCheckbox from "./FormCheckbox";
import FormSelect from "./FormSelect";
import FormInput from "./FormInput";
import FormRange from "./FormRange";
import { getAllProducts } from "@/utils/apis/products/api";

const Filter = ({
  onFilterChange,
  onReset,
}: {
  onFilterChange: (filters: any) => void;
  onReset: () => void;
}) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [company, setCompany] = useState("all");
  const [price, setPrice] = useState(0);
  const [freeShipping, setFreeShipping] = useState(false);
  const [sort, setSort] = useState("name-ascending");

  const [categoryOptions, setCategoryOptions] = useState([]);
  const [companyOptions, setCompanyOptions] = useState([]);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  useEffect(() => {
    const fetchProductOptions = async () => {
      try {
        const response = await getAllProducts();
        console.log("response filter", response);
        const data = await response.json();

        setCategoryOptions(data.meta.categories);
        setCompanyOptions(data.meta.companies);
        setMaxPrice(Math.max(data.attributes.price));
      } catch (error) {
        console.error("Error fetching product options:", error);
      }
    };

    fetchProductOptions();
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);
  const handleCategoryChange = (value: string) => setCategory(value);
  const handleCompanyChange = (value: string) => setCompany(value);
  const handlePriceChange = (value: number) => setPrice(value);
  const handleFreeShippingChange = () => setFreeShipping(!freeShipping);
  const handleSortChange = (value: string) => setSort(value);

  const handleSearchClick = () => {
    onFilterChange({
      search,
      category,
      company,
      price,
      freeShipping,
      sort,
    });
  };

  return (
    <div className="grid grid-rows-2 grid-cols-4 gap-2 p-2 lg:h-60 md:h-40 w-full rounded-lg bg-[#DFE6E6] dark:bg-[#242322]">
      <FormInput
        id="search"
        name="search"
        label="Search Product"
        value={search}
        onChange={handleSearchChange}
        defaultValue="Search Product . . ."
      />
      <FormSelect
        label="Category"
        name="category"
        list={categoryOptions}
        value={category}
        onValueChange={handleCategoryChange}
      />
      <FormSelect
        label="Company"
        name="company"
        list={companyOptions}
        value={company}
        onValueChange={handleCompanyChange}
      />
      <FormSelect
        label="Sort"
        name="sort"
        list={[
          { value: "name-ascending", label: "A-Z" },
          { value: "name-descending", label: "Z-A" },
        ]}
        value={sort}
        onValueChange={handleSortChange}
      />
      <FormRange
        name="Price Range"
        maxPrice={maxPrice}
        step={10000}
        value={price}
        onChange={handlePriceChange}
      />
      <FormCheckbox
        label="Free Shipping"
        name="freeShipping"
        checked={freeShipping}
        onChange={handleFreeShippingChange}
      />
      <div className="rounded-md p-2 flex justify-center items-center text-center">
        <Button
          onClick={handleSearchClick}
          className="rounded-lg bg-[#F5C02F] shadow-none hover:bg-[#F5C02F]/80 text-[#2B2B2B] w-40 mt-2 md:text-xs md:h-auto"
        >
          Search
        </Button>
      </div>
      <div className="rounded-md p-2 flex justify-center items-center text-center">
        <Button
          onClick={onReset}
          className="rounded-lg bg-[#778F86] shadow-none hover:bg-[#778F86]/80 text-[#FAFAFA] w-40 mt-2 md:text-xs md:h-auto"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Filter;

// product page
import { useQuery } from "react-query";
import { useState } from "react";

import ProductContainer from "@/components/ProductContainer";
import { getAllProducts } from "@/utils/apis/products/api";
import BannerProduct from "@/components/BannerProduct";
import Filter from "@/components/FilterProducts";
import Pagination from "@/components/Pagination";
import Layout from "@/components/Layout";

const ProductsPage = () => {
  const defaultFilters = {
    search: "",
    category: "all",
    company: "all",
    price: 0,
    freeShipping: false,
    sort: "name-asc",
  };

  const [filters, setFilters] = useState(defaultFilters);
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery(
    ["products", filters, page],
    () => getAllProducts({ ...filters, page }),
    { keepPreviousData: true }
  );

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    setPage(1);
  };

  const handleReset = () => {
    setFilters(defaultFilters);
    setPage(1); // Reset to the first page
  };

  return (
    <Layout>
      <section className="flex flex-col flex-grow w-full">
        <div className="flex-grow px-24 my-7 lg:space-y-7 md:space-y-5">
          <BannerProduct />
          <Filter onFilterChange={handleFilterChange} onReset={handleReset} />
          <ProductContainer
            products={data?.data || []}
            isLoading={isLoading}
            isError={isError}
          />
          <Pagination
            currentPage={page}
            totalPages={data?.meta?.pagination?.pageCount || 1}
            onPageChange={setPage}
          />
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
