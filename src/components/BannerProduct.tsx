import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { IProducts } from "@/utils/apis/products";
import { getAllProducts } from "@/utils/apis/products/api";
import { toast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";

const BannerProduct = () => {
  const [discountProduct, setDiscountProduct] = useState<IProducts["data"]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
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
    setFade(false); // Start fade-out
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === discountProduct.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true); // Start fade-in
    }, 300); // Match transition duration
  };

  useEffect(() => {
    fetchImageProduct();
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [discountProduct.length]);

  const handleImageClick = () => {
    const currentProduct = discountProduct[currentIndex];
    if (currentProduct) {
      navigate(`/detail-product`);
    }
  };

  return (
    <div className="grid min-h-[330px] w-full place-items-center overflow-hidden rounded-lg">
      {discountProduct.length > 0 && (
        <figure className="relative object-cover object-center w-full h-[330px]">
          <img
            src={discountProduct[currentIndex].attributes.image}
            alt={discountProduct[currentIndex].attributes.title}
            className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
        </figure>
      )}
      <figcaption className="absolute bg-white/75 rounded-tl-lg rounded-bl-lg lg:h-56 lg:w-80 md:h-52 md:w-60 flex flex-col justify-center items-center right-0 mr-24">
        <div className="space-y-1 text-[#2B2B2B]">
          <h2 className="font-semibold lg:text-4xl md:text-xl">Get Discount</h2>
          <p className="font-medium lg:text-2xl md:text-base flex items-center">
            Up to
            <span className="text-[#F95454] font-semibold lg:text-4xl md:text-xl mx-2">
              50%
            </span>
            off
          </p>
          <p className="font-medium lg:text-2xl md:text-base">Today !</p>
          <Link to={`/detail-product/${discountProduct[currentIndex]?.id}`}>
            <Button
              className="text-[#FAFAFA] rounded-full bg-[#2B2B2B] hover:bg-[#2B2B2B]/80 shadow-none w-auto mt-2 md:text-xs md:h-auto"
              onClick={handleImageClick}
            >
              Buy Now
            </Button>
          </Link>
        </div>
      </figcaption>
    </div>
  );
};

export default BannerProduct;
