import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getFeaturedProducts } from "@/utils/apis/products/api";
import { IProducts } from "@/utils/apis/products";
import { formatPrice } from "@/utils/formatter";

import { toast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

import SkeletonFeaturedProducts from "./SkeletonFeaturedProducts";
import SecondTitle from "./SecondTitle";
import AreaText from "./AreaText";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<IProducts["data"]>(
    []
  );
  const [isloading, setIsloading] = useState(false);

  async function fetchFeaturedProducts() {
    setIsloading(true);
    try {
      const result = await getFeaturedProducts();
      const response = result.data;
      setFeaturedProducts(response);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    } finally {
      setIsloading(false);
    }
  }

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 h-full">
        {isloading
          ? Array.from({ length: 3 }).map((_, index) => (
              <SkeletonFeaturedProducts key={index} />
            ))
          : featuredProducts.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id}>
                <article className="flex flex-col justify-start md:justify-center group relative py-5">
                  <Card className="bg-[#DFE6E6] dark:bg-[#242322] mx-5">
                    <div className="relative h-60 md:h-48 w-full rounded-tr-xl rounded-tl-xl overflow-hidden">
                      <img
                        src={product.attributes.image}
                        alt={product.attributes.title}
                        sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                        className="rounded-xl w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center h-auto my-2">
                      <AreaText
                        text={product.attributes.title}
                        className="text-[#2B2B2B] dark:text-[#FAFAFA]"
                      />
                      <h3 className="font-medium text-lg">
                        {formatPrice(product.attributes.price)}
                      </h3>
                    </div>
                  </Card>
                </article>
              </Link>
            ))}
        <div className="hidden lg:flex flex-col justify-center items-end py-5 md:px-5">
          <SecondTitle
            text="Crafted with"
            className="text-[#2B2B2B] dark:text-[#FAFAFA]"
          />
          <SecondTitle
            text="excellent material."
            className="text-[#2B2B2B] dark:text-[#FAFAFA]"
          />
          <AreaText
            text="Sed ut perspiciatis unde omnis iste"
            className="text-[#2B2B2B] dark:text-[#bfbfbb]"
          />
          <AreaText
            text="natus error sit voluptatem accusan"
            className="text-[#2B2B2B] dark:text-[#bfbfbb]"
          />
          <AreaText
            text="doloremque laudantium, totam rem"
            className="text-[#2B2B2B] dark:text-[#bfbfbb] mb-4"
          />
          <Link to="/products">
            <Button className="rounded-full bg-[#2B2B2B] hover:bg-[#2B2B2B]/80 w-24 dark:bg-[#FAFAFA] dark:hover:bg-[#FAFAFA]/80">
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
