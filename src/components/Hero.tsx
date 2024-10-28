import { Link } from "react-router-dom";

import FeaturedProducts from "./FeaturedProducts";
import heroImage from "/assets/hero-1.png";
import FirstTitle from "./FirstTitle";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="flex flex-col flex-grow w-full">
      <div className="flex-grow bg-[#395C4E] px-24">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 h-full">
          <div className="grid content-center">
            <FirstTitle
              text="Modern Interior, Design Studio"
              className="mb-2"
            />
            <p className="font-normal lg:text-base text-white md:font-light md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <p className="font-normal lg:text-base text-white md:font-light md:text-sm">
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="font-normal lg:text-base text-white md:font-light mb-4 md:text-sm">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <Button className="rounded-full bg-[#F5C02F] hover:bg-[#F5C02F]/80 text-[#2B2B2B] lg:w-24 md:w-20 md:mb-8 md:text-sm">
              <Link to="/products">
                <p>Explore</p>
              </Link>
            </Button>
          </div>
          <div className="lg:flex items-center justify-end md:hidden sm:hidden">
            <img
              src={heroImage}
              alt="hero image"
              className="max-h-[400px] max-w-[900px] object-contain"
            />
          </div>
        </div>
      </div>
      <div className="flex-grow px-24">
        <FeaturedProducts />
      </div>
    </section>
  );
};

export default Hero;
