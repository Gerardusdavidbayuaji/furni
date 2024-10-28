import { Link } from "react-router-dom";

import product1 from "/assets/product-1.jpeg";
import AreaText from "@/components/AreaText";
import { Card } from "@/components/ui/card";

const ProductCard = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 h-full justify-center items-center">
        <div className="flex justify-center items-center h-full py-5">
          <Link to="/detail-product">
            <article className="flex flex-col justify-start md:justify-center group relative h-full">
              <Card className="transform duration-500 mx-5 bg-[#DFE6E6]">
                <div className="relative lg:h-64 md:h-48 lg:w-60 rounded-tr-xl rounded-tl-xl overflow-hidden">
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
        </div>
        <div className="flex justify-center items-center h-full py-5">
          <Link to="/detail-product">
            <article className="flex flex-col justify-start md:justify-center group relative h-full">
              <Card className="transform duration-500 mx-5 bg-[#DFE6E6]">
                <div className="relative lg:h-64 md:h-48 lg:w-60 rounded-tr-xl rounded-tl-xl overflow-hidden">
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
        </div>
        <div className="flex justify-center items-center h-full py-5">
          <Link to="/detail-product">
            <article className="flex flex-col justify-start md:justify-center group relative h-full">
              <Card className="transform duration-500 mx-5 bg-[#DFE6E6]">
                <div className="relative lg:h-64 md:h-48 lg:w-60 rounded-tr-xl rounded-tl-xl overflow-hidden">
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
        </div>
        <div className="flex justify-center items-center h-full py-5">
          <Link to="/detail-product">
            <article className="flex flex-col justify-start md:justify-center group relative h-full">
              <Card className="transform duration-500 mx-5 bg-[#DFE6E6]">
                <div className="relative lg:h-64 md:h-48 lg:w-60 rounded-tr-xl rounded-tl-xl overflow-hidden">
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
        </div>
        <div className="flex justify-center items-center h-full py-5">
          <Link to="/detail-product">
            <article className="flex flex-col justify-start md:justify-center group relative h-full">
              <Card className="transform duration-500 mx-5 bg-[#DFE6E6]">
                <div className="relative lg:h-64 md:h-48 lg:w-60 rounded-tr-xl rounded-tl-xl overflow-hidden">
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
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
