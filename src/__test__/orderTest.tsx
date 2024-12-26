// import { Button } from "@/components/ui/button";
// import { useEffect, useState } from "react";
// import FormCheckbox from "./FormCheckbox";
// import FormSelect from "./FormSelect";
// import FormInput from "./FormInput";
// import FormRange from "./FormRange";
// import { getAllProducts } from "@/utils/apis/products/api";

// const Filter = ({ onSearch }: { onSearch: (filters: any) => void }) => {
//   const [categories, setCategories] = useState<
//     { value: string; label: string }[]
//   >([]);
//   const [companies, setCompanies] = useState<
//     { value: string; label: string }[]
//   >([]);
//   const [maxPrice, setMaxPrice] = useState<number>(0);
//   const [filters, setFilters] = useState({
//     search: "",
//     category: "",
//     company: "",
//     price: 0,
//     freeShipping: false,
//     sort: "name-asc", // Default sort: A-Z
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getAllProducts();
//         const { categories: fetchedCategories, companies: fetchedCompanies } =
//           response.meta;
//         const products = response.data;

//         setCategories(
//           fetchedCategories.map((category: string) => ({
//             value: category,
//             label: category,
//           }))
//         );
//         setCompanies(
//           fetchedCompanies.map((company: string) => ({
//             value: company,
//             label: company,
//           }))
//         );
//         setMaxPrice(
//           Math.max(
//             ...products.map((product: any) =>
//               parseInt(product.attributes.price)
//             )
//           )
//         );
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = () => {
//     onSearch(filters);
//   };

//   const handleReset = () => {
//     const resetFilters = {
//       search: "",
//       category: "",
//       company: "",
//       price: 0,
//       freeShipping: false,
//       sort: "name-asc", // Reset to default sort A-Z
//     };
//     setFilters(resetFilters);
//     onSearch(resetFilters);
//   };

//   const handleChange = (field: string, value: any) => {
//     const updatedFilters = { ...filters, [field]: value };
//     setFilters(updatedFilters);

//     // Apply filters immediately for real-time updates
//     if (field === "search" || field === "freeShipping" || field === "sort") {
//       onSearch(updatedFilters);
//     }
//   };

//   return (
//     <div className="grid grid-rows-2 grid-cols-4 gap-2 p-2 lg:h-60 md:h-40 w-full rounded-lg bg-[#DFE6E6] dark:bg-[#242322]">
//       <FormInput
//         id="search-product"
//         name="search"
//         label="Search Product"
//         value={filters.search}
//         onChange={(e) => handleChange("search", e.target.value)}
//         defaultValue="Search Product . . ."
//       />
//       <FormSelect
//         label="Select Category"
//         name="category"
//         value={filters.category}
//         onValueChange={(value) => handleChange("category", value)}
//         list={categories}
//         defaultValue="All"
//       />
//       <FormSelect
//         label="Select Company"
//         name="company"
//         value={filters.company}
//         onValueChange={(value) => handleChange("company", value)}
//         list={companies}
//         defaultValue="All"
//       />
//       <FormSelect
//         label="Sort Product"
//         name="sort"
//         value={filters.sort}
//         onValueChange={(value) => handleChange("sort", value)}
//         list={[
//           { value: "name-asc", label: "A-Z" },
//           { value: "name-desc", label: "Z-A" },
//         ]}
//         defaultValue="A-Z"
//       />
//       <FormRange
//         name="Price Range"
//         maxPrice={maxPrice}
//         value={filters.price}
//         step={1}
//         onChange={(value) => handleChange("price", value)}
//       />
//       <FormCheckbox
//         label="Free Shipping"
//         name="free-shipping"
//         checked={filters.freeShipping}
//         onChange={(e) =>
//           handleChange("freeShipping", (e.target as HTMLInputElement).checked)
//         }
//       />
//       <div className="rounded-md p-2 flex justify-center items-center text-center">
//         <Button
//           onClick={handleSearch}
//           className="rounded-lg bg-[#F5C02F] shadow-none hover:bg-[#F5C02F]/80 text-[#2B2B2B] w-40 mt-2 md:text-xs md:h-auto"
//         >
//           Search
//         </Button>
//       </div>
//       <div className="rounded-md p-2 flex justify-center items-center text-center">
//         <Button
//           onClick={handleReset}
//           className="rounded-lg bg-[#778F86] shadow-none hover:bg-[#778F86]/80 text-[#FAFAFA] w-40 mt-2 md:text-xs md:h-auto"
//         >
//           Reset
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Filter;

// ========================================= product ================================================================

// import ProductContainer from "@/components/ProductContainer";
// import BannerProduct from "@/components/BannerProduct";
// import Filter from "@/components/FilterProducts";
// import Pagination from "@/components/Pagination";
// import Layout from "@/components/Layout";
// import { useState } from "react";

// const ProductsPage = () => {
//   const [filters, setFilters] = useState<any>({ search: "" });
//   const [page, setPage] = useState(1);

//   const handleSearch = async (newFilters: any) => {
//     setFilters(newFilters);
//     setPage(1);
//   };

//   return (
//     <Layout>
//       <section className="flex flex-col flex-grow w-full">
//         <div className="flex-grow px-24 my-7 lg:space-y-7 md:space-y-5">
//           <BannerProduct />
//           <Filter onSearch={handleSearch} />
//           <ProductContainer filters={filters} page={page} />
//           <Pagination
//             currentPage={page}
//             totalPages={3}
//             onPageChange={setPage}
//           />
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default ProductsPage;

// =============== product container =======
// import { useEffect, useState } from "react";
// import { toast } from "@/hooks/use-toast";
// import { Link } from "react-router-dom";
// import { getAllProducts } from "@/utils/apis/products/api";
// import { IProducts } from "@/utils/apis/products";
// import { formatPrice } from "@/utils/formatter";
// import { Card } from "@/components/ui/card";
// import AreaText from "./AreaText";

// const ProductContainer = ({
//   filters,
//   page,
// }: {
//   filters: any;
//   page: number;
// }) => {
//   const [allProduct, setAllProduct] = useState<IProducts["data"]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   async function fetchAllProduct() {
//     try {
//       const params = { ...filters, page, limit: 10 }; // Add pagination and filters
//       const result = await getAllProducts(params);
//       const response = result.data;
//       setAllProduct(response);
//     } catch (error: any) {
//       toast({
//         title: "Oops! Something went wrong.",
//         description: error.toString(),
//         variant: "destructive",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchAllProduct(); // Re-fetch products when filters or page change
//   }, [filters, page]);

//   return (
//     <>
//       {isLoading ? (
//         <div className="text-center">Loading Products . . .</div>
//       ) : allProduct.length === 0 ? (
//         <div className="text-center text-xl font-medium">
//           No products found. Please check back later!
//         </div>
//       ) : (
//         <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7">
//           {allProduct.map((product) => (
//             <Link key={product.id} to={`/products/${product.id}`}>
//               <Card className="bg-[#DFE6E6] dark:bg-[#242322] h-full flex flex-col group relative">
//                 <div className="relative w-full h-64 md:h-48 lg:h-64 rounded-tr-xl rounded-tl-xl overflow-hidden">
//                   <img
//                     src={product.attributes.image}
//                     alt={product.attributes.title}
//                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="flex flex-col justify-center items-center h-auto my-2">
//                   <AreaText
//                     text={product.attributes.title}
//                     className="text-[#2B2B2B] dark:text-[#FAFAFA]"
//                   />
//                   <h3 className="font-medium lg:text-base md:text-sm">
//                     {formatPrice(product.attributes.price)}
//                   </h3>
//                 </div>
//               </Card>
//             </Link>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default ProductContainer;
