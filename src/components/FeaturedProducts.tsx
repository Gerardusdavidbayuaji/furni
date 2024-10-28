import product1 from "/assets/product-1.jpeg";
import SecondTitle from "./SecondTitle";
import { Button } from "./ui/button";
import AreaText from "./AreaText";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 h-full">
        <Link to="/detail-product">
          <article className="flex flex-col justify-start md:justify-center group relative py-5">
            <Card className="transform duration-500 mx-5 bg-[#DFE6E6]">
              <div className="relative h-60 md:h-48 w-full rounded-tr-xl rounded-tl-xl overflow-hidden">
                <img
                  src={product1}
                  alt="product-1"
                  sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                  className="rounded-xl w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center items-center h-auto my-2">
                <h3 className="font-medium lg:text-base md:text-sm">
                  Lorem Ipsum
                </h3>
                <AreaText text="Rp 5.000.000" className="text-[#2B2B2B]" />
              </div>
            </Card>
          </article>
        </Link>

        <Link to="/detail-product">
          <article className="flex flex-col justify-start md:justify-center group relative py-5">
            <Card className="transform duration-500 mx-5 bg-[#DFE6E6]">
              <div className="relative h-60 md:h-48 w-full rounded-tr-xl rounded-tl-xl overflow-hidden">
                <img
                  src={product1}
                  alt="product-1"
                  sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                  className="rounded-xl w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center items-center h-auto my-2">
                <h3 className="font-medium lg:text-base md:text-sm">
                  Lorem Ipsum
                </h3>
                <AreaText text="Rp 5.000.000" className="text-[#2B2B2B]" />
              </div>
            </Card>
          </article>
        </Link>

        <Link to="/detail-product">
          <article className="flex flex-col justify-start md:justify-center group relative py-5">
            <Card className="transform duration-500 mx-5 bg-[#DFE6E6]">
              <div className="relative h-60 md:h-48 w-full rounded-tr-xl rounded-tl-xl overflow-hidden">
                <img
                  src={product1}
                  alt="product-1"
                  sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                  className="rounded-xl w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center items-center h-auto my-2">
                <h3 className="font-medium lg:text-base md:text-sm">
                  Lorem Ipsum
                </h3>
                <AreaText text="Rp 5.000.000" className="text-[#2B2B2B]" />
              </div>
            </Card>
          </article>
        </Link>

        <div className="flex flex-col justify-center items-end py-5 md:px-5">
          <SecondTitle text="Crafted with" className="text-[#2B2B2B]" />
          <SecondTitle text="excellent material." className="text-[#2B2B2B]" />
          <AreaText
            text="Sed ut perspiciatis unde omnis iste"
            className="text-[#2B2B2B]"
          />
          <AreaText
            text="natus error sit voluptatem accusan"
            className="text-[#2B2B2B]"
          />
          <AreaText
            text="doloremque laudantium, totam rem"
            className="text-[#2B2B2B] mb-4"
          />

          <Link to="/products">
            <Button className="rounded-full bg-[#2B2B2B] hover:bg-[#2B2B2B]/80 w-24">
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;