import advertisement from "/assets/advertisement-1.jpeg";
import { Button } from "./ui/button";

const BannerProduct = () => {
  return (
    <div className="grid min-h-[330px] w-full place-items-center overflow-hidden rounded-lg">
      <figure className="relative object-cover object-center w-full h-[330px]">
        <img
          src={advertisement}
          alt="advertisement-1"
          className="w-full h-full object-cover"
        />
      </figure>
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
          <Button className="rounded-full bg-[#2B2B2B] hover:bg-[#2B2B2B]/80 shadow-none w-auto mt-2 md:text-xs md:h-auto">
            Buy Now
          </Button>
        </div>
      </figcaption>
    </div>
  );
};

export default BannerProduct;
