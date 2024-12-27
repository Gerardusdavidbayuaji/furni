import { Link } from "react-router-dom";

import FeaturedProducts from "./FeaturedProducts";
import heroImage from "/assets/hero-1.png";
import FirstTitle from "./FirstTitle";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="flex flex-col flex-grow w-full">
      <div className="bg-[#395C4E] flex-grow px-12 sm:px-12 lg:px-24 py-6">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 h-full">
          <div className="grid content-center">
            <FirstTitle
              text="Modern Interior, Design Studio"
              className="mb-2"
            />
            <p className="text-[#FAFAFA] font-normal md:font-light lg:text-base md:text-sm text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <p className="text-[#FAFAFA] font-normal md:font-light lg:text-base md:text-sm text-xs">
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-[#FAFAFA] font-normal md:font-light lg:text-base md:text-sm text-xs mb-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <Link
              to="/products"
              className="text-[#2B2B2B] text-xs md:text-sm lg:text-base font-normal"
            >
              <Button className="bg-[#F5C02F] hover:bg-[#F5C02F]/80 text-[#2B2B2B] rounded-full lg:w-24 md:w-20 md:mb-8 md:text-sm">
                Explore
              </Button>
            </Link>
          </div>
          <div className="hidden lg:flex items-center justify-end">
            <img
              src={heroImage}
              alt="hero image"
              className="lg:max-h-[400px] lg:max-w-[900px] object-contain"
            />
          </div>
        </div>
      </div>
      <div className="flex-grow px-12 sm:px-12 lg:px-24">
        <FeaturedProducts />
      </div>
    </section>
  );
};

export default Hero;
