import { Button } from "@/components/ui/button";
import FormCheckbox from "./FormCheckbox";
import FormSelect from "./FormSelect";
import FormInput from "./FormInput";
import FormRange from "./FormRange";
import { Link } from "react-router-dom";

import { getAllProducts } from "@/utils/apis/products/api";
import { useEffect, useState } from "react";

const Filter = ({ onSearch }: { onSearch: (filters: any) => void }) => {
  const [categories, setCategories] = useState<
    { value: string; label: string }[]
  >([]);
  const [companies, setCompanies] = useState<
    { value: string; label: string }[]
  >([]);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    company: "",
    price: 0,
    freeShipping: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProducts();
        const { categories: fetchedCategories, companies: fetchedCompanies } =
          response.meta;
        const products = response.data;

        setCategories(
          fetchedCategories.map((category: string) => ({
            value: category,
            label: category,
          }))
        );
        setCompanies(
          fetchedCompanies.map((company: string) => ({
            value: company,
            label: company,
          }))
        );
        setMaxPrice(
          Math.max(
            ...products.map((product: any) =>
              parseInt(product.attributes.price)
            )
          )
        );
      } catch (error) {
        console.log("error fetch products:", error);
      }
    };

    fetchData();
  });

  const handleSearch = () => {
    onSearch(filters);
  };

  const handleReset = () => {
    setFilters({
      search: "",
      category: "",
      company: "",
      price: 0,
      freeShipping: false,
    });
    onSearch({});
  };

  return (
    <div className="grid grid-rows-2 grid-cols-4 gap-2 p-2 lg:h-60 md:h-40 w-full rounded-lg bg-[#DFE6E6] dark:bg-[#242322]">
      <FormInput
        id="search-product"
        name="search"
        label="Search Product"
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />
      <FormSelect
        label="Select Category"
        name="category"
        value={filters.category}
        onValueChange={(value) => setFilters({ ...filters, category: value })}
        list={categories}
      />
      <FormSelect
        label="Select Company"
        name="company"
        value={filters.company}
        onValueChange={(value) => setFilters({ ...filters, company: value })}
        list={companies}
      />
      <FormSelect
        label="Sort Product"
        name="sort-product"
        list={[
          { value: "a-z", label: "A-Z" },
          { value: "z-a", label: "Z-A" },
          { value: "price-low", label: "Price: Low to High" },
          { value: "price-high", label: "Price: High to Low" },
        ]}
      />

      <FormRange
        name="Price Range"
        maxPrice={maxPrice}
        value={filters.price}
        step={1}
        onChange={(price) => setFilters({ ...filters, price })}
      />

      <FormCheckbox
        label="Free Shipping"
        name="free-shipping"
        checked={filters.freeShipping}
        onChange={(e) =>
          setFilters({
            ...filters,
            freeShipping: (e.target as HTMLInputElement).checked,
          })
        }
      />

      <div className="rounded-md p-2 flex justify-center items-center text-center">
        <Button
          onClick={handleSearch}
          className="rounded-lg bg-[#F5C02F] shadow-none hover:bg-[#F5C02F]/80 text-[#2B2B2B] w-40 mt-2 md:text-xs md:h-auto"
        >
          Search
        </Button>
      </div>
      <div className="rounded-md p-2 flex justify-center items-center text-center">
        <Link to="/products">
          <Button
            onClick={handleReset}
            className="rounded-lg bg-[#778F86] shadow-none hover:bg-[#778F86]/80 text-[#FAFAFA] w-40 mt-2 md:text-xs md:h-auto"
          >
            Reset
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Filter;
