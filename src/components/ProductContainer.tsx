import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { getAllProducts } from "@/utils/apis/products/api";
import { IProducts } from "@/utils/apis/products";
import { formatPrice } from "@/utils/formatter";
import { Card } from "@/components/ui/card";
import AreaText from "./AreaText";

const ProductContainer = ({
  filters,
  page,
}: {
  filters: any;
  page: number;
}) => {
  const [allProduct, setAllProduct] = useState<IProducts["data"]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchAllProduct() {
    try {
      const params = { ...filters, page, limit: 10 }; // Add pagination and filters
      const result = await getAllProducts(params);
      const response = result.data;
      setAllProduct(response);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchAllProduct(); // Re-fetch products when filters or page change
  }, [filters, page]);

  return (
    <>
      {isLoading ? (
        <div className="text-center">Loading Products . . .</div>
      ) : allProduct.length === 0 ? (
        <div className="text-center text-xl font-medium">
          No products found. Please check back later!
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7">
          {allProduct.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <Card className="bg-[#DFE6E6] dark:bg-[#242322] h-full flex flex-col group relative">
                <div className="relative w-full h-64 md:h-48 lg:h-64 rounded-tr-xl rounded-tl-xl overflow-hidden">
                  <img
                    src={product.attributes.image}
                    alt={product.attributes.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center items-center h-auto my-2">
                  <AreaText
                    text={product.attributes.title}
                    className="text-[#2B2B2B] dark:text-[#FAFAFA]"
                  />
                  <h3 className="font-medium lg:text-base md:text-sm">
                    {formatPrice(product.attributes.price)}
                  </h3>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductContainer;
