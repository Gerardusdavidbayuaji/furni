import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import getFeaturedProducts from "@/utils/apis/products";
import { IProducts } from "@/utils/apis/products";
import { formatPrice } from "@/utils/formatter";

import SecondTitle from "./SecondTitle";
import { Button } from "./ui/button";
import AreaText from "./AreaText";
import { Card } from "./ui/card";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<IProducts["data"]>(
    []
  );

  async function fetchFeaturedProducts() {
    try {
      const result = await getFeaturedProducts();
      const response = result.data;
      console.log(response);
      setFeaturedProducts(response);
    } catch (error) {
      console.log("upss error", error);
    }
  }

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 h-full">
        {featuredProducts.map((product) => (
          <Link to="/detail-product" key={product.id}>
            <article className="flex flex-col justify-start md:justify-center group relative py-5">
              <Card className="bg-[#DFE6E6] dark:bg-[#242322] transform duration-500 mx-5">
                <div className="relative h-60 md:h-48 w-full rounded-tr-xl rounded-tl-xl overflow-hidden">
                  <img
                    src={product.attributes.image}
                    alt={product.attributes.title}
                    sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                    className="rounded-xl w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center items-center h-auto my-2">
                  <h3 className="font-medium lg:text-base md:text-sm">
                    {product.attributes.title}
                  </h3>
                  <AreaText
                    text={formatPrice(product.attributes.price)}
                    className="text-[#2B2B2B] dark:text-[#FAFAFA]"
                  />
                </div>
              </Card>
            </article>
          </Link>
        ))}
        <div className="flex flex-col justify-center items-end py-5 md:px-5">
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
