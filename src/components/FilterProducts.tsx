import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";

import { getAllProducts } from "@/utils/apis/products/api";

import { Button } from "@/components/ui/button";
import FormCheckbox from "./FormCheckbox";
import FormSelect from "./FormSelect";
import FormInput from "./FormInput";
import FormRange from "./FormRange";
import SkeletonFilteredProduct from "./SkeletonFilteredProduct";

const Filter = ({ onSearch }: { onSearch: (filters: any) => void }) => {
  const [loading, setLoading] = useState(true);
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
    sort: "name-asc",
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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
      } catch (error: any) {
        toast({
          title: "Oops! Something went wrong.",
          description: error.toString(),
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    onSearch(filters);
  };

  // const handleSearch = () => {
  //   const updatedFilters = {
  //     ...filters,
  //     search: filters.search,
  //     categories: filters.category,
  //     companies: filters.company,
  //     shipping: filters.freeShipping ? "true" : "false",
  //     price: filters.price,
  //     sort: filters.sort,
  //   };
  //   onSearch(updatedFilters);
  // };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      search: e.target.value,
    });
  };

  const handleReset = () => {
    const resetFilters = {
      search: "",
      category: "",
      company: "",
      price: 0,
      freeShipping: false,
      sort: "name-asc",
    };
    setFilters(resetFilters);
    onSearch(resetFilters);
  };

  const handleChange = (field: string, value: any) => {
    const updatedFilters = { ...filters, [field]: value };
    setFilters(updatedFilters);

    if (field === "search" || field === "freeShipping" || field === "sort") {
      onSearch(updatedFilters);
    }
  };

  return (
    <>
      {loading ? (
        <SkeletonFilteredProduct />
      ) : (
        <div className="grid md:grid-rows-4 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 lg:gap-2 md:gap-4 p-2 lg:h-60 md:h-96 w-full rounded-lg bg-[#DFE6E6] dark:bg-[#242322]">
          <FormInput
            id="search-product"
            name="search"
            label="Search Product"
            value={filters.search}
            onChange={handleSearchChange}
            defaultValue="Search Product . . ."
          />
          <FormSelect
            label="Select Category"
            name="category"
            value={filters.category}
            onValueChange={(value) => handleChange("category", value)}
            list={categories}
            defaultValue="All"
          />
          <FormSelect
            label="Select Company"
            name="company"
            value={filters.company}
            onValueChange={(value) => handleChange("company", value)}
            list={companies}
            defaultValue="All"
          />
          <FormSelect
            label="Sort Product"
            name="sort"
            value={filters.sort}
            onValueChange={(value) => handleChange("sort", value)}
            list={[
              { value: "name-asc", label: "A-Z" },
              { value: "name-desc", label: "Z-A" },
            ]}
            defaultValue="A-Z"
          />
          <FormRange
            name="Price Range"
            maxPrice={maxPrice}
            value={filters.price}
            step={1}
            onChange={(value) => handleChange("price", value)}
          />
          <FormCheckbox
            label="Free Shipping"
            name="free-shipping"
            checked={filters.freeShipping}
            onChange={(checked) => handleChange("freeShipping", checked)}
          />
          <div className="rounded-md p-2 flex justify-center items-center text-center">
            <Button
              onClick={handleSearch}
              className="rounded-lg bg-[#F5C02F] shadow-none hover:bg-[#F5C02F]/80 text-[#2B2B2B] w-full md:w-40 lg:w-40 mt-2 lg:text-sm md:text-sm text-xs md:h-auto"
            >
              Search
            </Button>
          </div>
          <div className="rounded-md p-2 flex justify-center items-center text-center">
            <Button
              onClick={handleReset}
              className="rounded-lg bg-[#778F86] shadow-none hover:bg-[#778F86]/80 text-[#FAFAFA] w-full md:w-40 lg:w-40 mt-2 lg:text-sm md:text-sm text-xs md:h-auto"
            >
              Reset
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
