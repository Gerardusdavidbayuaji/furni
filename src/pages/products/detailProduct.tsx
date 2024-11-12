import { Link, useParams } from "react-router-dom";

import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import { getDetailProduct } from "@/utils/apis/products/api";
import { Product } from "@/utils/apis/products/types";

import {
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [productColor, setProductColor] = useState<string | null>(null);

  async function fetchData() {
    try {
      const response = await getDetailProduct(Number(id));
      setProduct(response);

      if (response.attributes.colors.length > 0) {
        setProductColor(response.attributes.colors[0]);
      }
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

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
                src={product?.attributes.image}
                alt={product?.attributes.title}
                className="lg:w-96 lg:h-full md:w-full md:h-96 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-5">
              <div className="space-y-1">
                <h1 className="font-semibold text-lg">
                  {product?.attributes.title}
                </h1>
                <p className="font-medium text-2xl text-[#2B2B2B]">
                  {product?.attributes.price}
                </p>
              </div>

              <div className="space-y-1">
                <h1 className="font-medium text-base">Choose Color</h1>
                <div className="flex space-x-2 cursor-pointer">
                  {product?.attributes.colors.map((color) => {
                    return (
                      <Button
                        key={color}
                        type="button"
                        className={`rounded-full h-8 ${
                          color === productColor
                            ? "border-1 border-secondary"
                            : "h-8"
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setProductColor(color)}
                      />
                    );
                  })}
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
                  {product?.attributes.description}
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
