import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { getAllProducts } from "@/utils/apis/products/api";
import { IProducts } from "@/utils/apis/products";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Button } from "./ui/button";

const BannerProduct = () => {
  const [discountProduct, setDiscountProduct] = useState<IProducts["data"]>([]);
  const [isManualSlide, setIsManualSlide] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [slide, setSlide] = useState(false);
  const navigate = useNavigate();

  async function fetchImageProduct() {
    try {
      const result = await getAllProducts();
      const response = result.data;
      setDiscountProduct(response);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  const nextSlide = () => {
    setDirection("right");
    setSlide(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === discountProduct.length - 1 ? 0 : prevIndex + 1
      );
      setSlide(false);
    }, 400);
  };

  const prevSlide = () => {
    setDirection("left");
    setSlide(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? discountProduct.length - 1 : prevIndex - 1
      );
      setSlide(false);
    }, 400);
  };

  const handleManualSlide = (direction: "left" | "right") => {
    setIsManualSlide(true);
    direction === "left" ? prevSlide() : nextSlide();
    setTimeout(() => setIsManualSlide(false), 9000);
  };

  useEffect(() => {
    fetchImageProduct();
    const interval = setInterval(() => {
      if (!isManualSlide) nextSlide();
    }, 9000);

    return () => clearInterval(interval);
  }, [discountProduct.length, isManualSlide]);

  const handleImageClick = () => {
    const currentProduct = discountProduct[currentIndex];
    if (currentProduct) {
      navigate(`/detail-product`);
    }
  };

  return (
    <div className="grid min-h-[330px] w-full place-items-center overflow-hidden rounded-lg">
      {discountProduct.length > 0 && (
        <div className="relative w-full h-[330px] overflow-hidden flex justify-center items-center">
          <div
            className={`flex transition-transform duration-1000 ease-in-out ${
              slide
                ? direction === "right"
                  ? "-translate-x-full"
                  : "translate-x-full"
                : "translate-x-0"
            }`}
          >
            <img
              src={discountProduct[currentIndex].attributes.image}
              alt={discountProduct[currentIndex].attributes.title}
              className="flex min-w-full min-h-full object-contain object-center"
            />
            <img
              src={
                discountProduct[
                  direction === "right"
                    ? (currentIndex + 1) % discountProduct.length
                    : (currentIndex - 1 + discountProduct.length) %
                      discountProduct.length
                ].attributes.image
              }
              alt={
                discountProduct[
                  direction === "right"
                    ? (currentIndex + 1) % discountProduct.length
                    : (currentIndex - 1 + discountProduct.length) %
                      discountProduct.length
                ].attributes.title
              }
              className="flex min-w-full min-h-full object-contain object-center"
            />
          </div>
        </div>
      )}
      <figcaption className="absolute bg-[#FAFAFA]/75 dark:bg-[#242322]/75 rounded-tl-lg rounded-bl-lg lg:h-56 lg:w-80 md:h-52 md:w-60 flex flex-col justify-center items-center right-0 mr-24">
        <div className="space-y-1 text-[#2B2B2B] dark:text-[#FAFAFA]">
          <h2 className="font-semibold lg:text-4xl md:text-xl">Get Discount</h2>
          <p className="font-medium lg:text-2xl md:text-base flex items-center">
            Up to
            <span className="text-[#F95454] font-semibold lg:text-4xl md:text-xl mx-2">
              50%
            </span>
            off
          </p>
          <p className="font-medium lg:text-2xl md:text-base">Today !</p>
          <Link to={`/products/${discountProduct[currentIndex]?.id}`}>
            <Button
              className="bg-[#2B2B2B] hover:bg-[#2B2B2B]/80 text-[#FAFAFA] dark:bg-[#F5C02F] dark:hover:bg-[#F5C02F]/80 dark:text-[#2B2B2B] rounded-full shadow-none w-auto mt-2 md:text-xs md:h-auto"
              onClick={handleImageClick}
            >
              Buy Now
            </Button>
          </Link>
        </div>
      </figcaption>
      <div className="absolute flex justify-center items-center bottom-0 lg:mb-[300px] md:mb-[205px] space-x-4">
        <div
          className="bg-[#778F86] hover:bg-[#778F86]/80 text-[#FAFAFA] flex justify-center items-center p-2 rounded-full w-9 h-9 cursor-pointer"
          onClick={() => handleManualSlide("left")}
        >
          <ChevronLeft />
        </div>
        <div
          className="bg-[#778F86] hover:bg-[#778F86]/80 text-[#FAFAFA] flex justify-center items-center p-2 rounded-full w-9 h-9 cursor-pointer"
          onClick={() => handleManualSlide("right")}
        >
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
