import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/utils/apis/products/api";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/utils/apis/products/types";

const BannerProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getAllProducts();
      const { data } = response;
      const filteredProducts = data.filter(
        (_: any, index: number) => index % 2 !== 0
      );
      setProducts(filteredProducts);
    };

    fetchProducts();
  }, []);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id} className="relative">
            <div className="grid min-h-[330px] w-full place-items-center overflow-hidden rounded-lg">
              <figure className="relative w-full h-[330px] overflow-hidden flex justify-center items-center">
                <img
                  src={product.attributes.image}
                  alt={product.attributes.title}
                  className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                />
              </figure>
            </div>

            <figcaption className="absolute bg-[#FAFAFA]/75 dark:bg-[#242322]/75 rounded-tl-lg rounded-bl-lg lg:h-56 lg:w-80 md:h-52 md:w-60 w-52 h-52 flex flex-col justify-center items-center right-0 top-1/2 transform -translate-y-1/2">
              <div className="space-y-1 text-[#2B2B2B] dark:text-[#FAFAFA]">
                <h2 className="font-semibold lg:text-4xl md:text-xl">
                  Get Discount
                </h2>
                <p className="font-medium lg:text-2xl md:text-base flex items-center">
                  Up to
                  <span className="text-[#F95454] font-semibold lg:text-4xl md:text-xl mx-2">
                    30%
                  </span>
                  off
                </p>
                <p className="font-medium lg:text-2xl md:text-base">Today !</p>
                <Link to={`/products/${product.id}`}>
                  <Button className="text-[#FAFAFA] rounded-full bg-[#2B2B2B] hover:bg-[#2B2B2B]/80 shadow-none w-auto mt-2 md:text-xs md:h-auto">
                    Buy Now
                  </Button>
                </Link>
              </div>
            </figcaption>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default BannerProduct;
