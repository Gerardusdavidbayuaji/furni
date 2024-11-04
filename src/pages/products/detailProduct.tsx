import { Link } from "react-router-dom";

import { Separator } from "@/components/ui/separator";
import product1 from "/assets/product-1.jpeg";
import { ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";

import {
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const DetailProduct = () => {
  return (
    <Layout>
      <section className="flex flex-col flex-grow w-full">
        <div className="flex-grow px-24 my-7 space-y-5">
          <div className="flex font-light space-x-1">
            <Link to="/">
              <h4>Home</h4>
            </Link>
            <ChevronRight />
            <Link to="/products">
              <h4>Products</h4>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-1 md:space-y-5">
            <div className="flex justify-center items-center">
              <img
                src={product1}
                alt="product-test"
                className="lg:w-96 lg:h-full md:w-full md:h-96 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-5">
              <div className="space-y-1">
                <h1 className="font-semibold text-lg">Comfy Bed</h1>
                <p className="font-medium text-2xl text-[#2B2B2B]">
                  Rp 5.000.000
                </p>
              </div>

              <div className="space-y-1">
                <h1 className="font-medium text-base">Choose Color</h1>
                <div className="flex space-x-2 cursor-pointer">
                  <div className="w-5 h-5 rounded-full bg-[#5DAE8B]" />
                  <div className="w-5 h-5 rounded-full bg-[#D9D9D9]" />
                  <div className="w-5 h-5 rounded-full bg-[#778F86]" />
                </div>
              </div>

              <div>
                <div className="flex font-medium text-base space-x-4">
                  <Button className="h-auto bg-[#F0F2F1] hover:bg-[#F0F2F1] un-detail text-[#2B2B2B] shadow-none">
                    Materials
                  </Button>
                  <Button className="h-auto bg-[#F0F2F1] hover:bg-[#F0F2F1] un-detail text-[#2B2B2B] shadow-none">
                    Shipping
                  </Button>
                  <Button className="h-auto bg-[#F0F2F1] hover:bg-[#F0F2F1] un-detail text-[#2B2B2B] shadow-none">
                    Return Polycy
                  </Button>
                </div>
                <Separator className="bg-[#778F86] h-[1px] w-[350px]" />
                <p className="font-normal text-sm text-[#2B2B2B] leading-relaxed mt-2">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source.
                </p>
              </div>

              <div className="flex justify-end items-end space-x-2">
                <Select>
                  <SelectTrigger className="w-14 outline outline-1 outline-[#778F86] focus:outline-2 focus:outline-[#778F86]">
                    <SelectValue placeholder="1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-[#FABD05] hover:bg-[#FABD05]/80 text-[#2B2B2B] shadow-none">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DetailProduct;
