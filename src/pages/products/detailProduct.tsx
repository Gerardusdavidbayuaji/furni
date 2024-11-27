import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getDetailProduct } from "@/utils/apis/products/api";
import { CartItem } from "@/utils/apis/products/types";
import { Product } from "@/utils/apis/products/types";
import { addItem } from "@/utils/store/cartSlice";
import { formatPrice } from "@/utils/formatter";

import {
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [productColor, setProductColor] = useState<string | null>(null);
  const [amount, setAmount] = useState<number>(1);

  const dispatch = useDispatch();

  const addToCart = () => {
    if (!product || !productColor) {
      toast({
        title: "Oops! Failed to add to cart",
        description: "Please select a product and color",
        variant: "destructive",
      });
      return;
    }

    const cartProduct: CartItem = {
      id: product.id,
      cartID: `${product.id}-${productColor}`,
      productID: product.id || 0,
      image: product.attributes.image || "",
      title: product.attributes.title || "Unknown Product",
      price: product.attributes.price || "0",
      amount,
      quantity: amount,
      productColor,
      company: product.attributes.company || "Unknown Company",
    };

    dispatch(addItem(cartProduct));

    toast({
      title: "Success! Happy shopping",
      description: "Your item has been added to the cart",
      variant: "default",
    });
  };

  useEffect(() => {
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
              <h4 className="text-[#2B2B2B] dark:text-[#bfbfbb]">Home</h4>
            </Link>
            <ChevronRight />
            <Link to="/products">
              <h4 className="text-[#2B2B2B] dark:text-[#bfbfbb]">Products</h4>
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
                <h1 className="font-medium text-lg text-[#2B2B2B] dark:text-[#FAFAFA]">
                  {product?.attributes.title}
                </h1>
                <p className="font-semibold text-2xl text-[#2B2B2B] dark:text-[#FAFAFA]">
                  {formatPrice(product?.attributes.price)}
                </p>
              </div>

              <div className="space-y-1">
                <h1 className="font-medium text-base text-[#2B2B2B] dark:text-[#FAFAFA]">
                  Choose Color
                </h1>
                <div className="flex items-center space-x-2 cursor-pointer ">
                  {product?.attributes.colors.map((color) => {
                    return (
                      <Button
                        key={color}
                        className={`rounded-full shadow-none ${
                          color === productColor
                            ? "h-8 w-8"
                            : "h-7 w-7 border p-0"
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setProductColor(color)}
                      />
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="font-medium text-base text-[#2B2B2B] dark:text-[#FAFAFA]">
                  Description Product
                </div>
                <p className="font-normal text-sm text-[#2B2B2B] dark:text-[#bfbfbb] leading-relaxed mt-1">
                  {product?.attributes.description}
                </p>
              </div>

              <div className="flex justify-end items-end space-x-2">
                <Select
                  onValueChange={(value) => setAmount(Number(value))}
                  defaultValue="1"
                >
                  <SelectTrigger className="w-14 outline outline-1 outline-[#778F86] focus:outline-2 focus:outline-[#778F86]">
                    <SelectValue placeholder="1" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <SelectItem key={num} value={String(num)}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  className="bg-[#FABD05] hover:bg-[#FABD05]/80 text-[#2B2B2B] shadow-none"
                  onClick={addToCart}
                >
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
