import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getDetailProduct } from "@/utils/apis/products/api";
import { ICartItem } from "@/utils/apis/products/types";
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
import { RootState } from "@/utils/store/store";
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

    const cartProduct: ICartItem = {
      id: product.id,
      cartID: `${product.id}-${productColor}`,
      productID: product.id,
      image: product.attributes.image || "",
      title: product.attributes.title || "Unknown Product",
      price: product.attributes.price || "0",
      amount,
      quantity: amount,
      productColor,
      company: product.attributes.company || "Unknown Company",
      checked: false,
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

  const cartItems = useSelector(
    (state: RootState) => state.cartState.cartItems
  );
  useEffect(() => {
    console.log("cart item:", cartItems);
  }, [cartItems]);

  return (
    <Layout>
      <section className="flex flex-col flex-grow w-full mb-7">
        <div className="flex my-7 px-12 sm:px-12 lg:px-24 justify-start items-center">
          <Link to="/">
            <h4 className="text-[#2B2B2B] dark:text-[#bfbfbb] font-medium md:font-light lg:text-base md:text-sm text-xs">
              Home
            </h4>
          </Link>
          <ChevronRight />
          <Link to="/products">
            <h4 className="text-[#2B2B2B] dark:text-[#bfbfbb] font-medium md:font-light lg:text-base md:text-sm text-xs">
              Products
            </h4>
          </Link>
        </div>
        <div className="flex flex-grow px-12 sm:px-12 lg:px-24 justify-center items-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
            <div className="flex justify-center items-center">
              <img
                src={product?.attributes.image}
                alt={product?.attributes.title}
                className="lg:w-96 lg:h-96 md:w-72 md:h-72 sm:w-56 sm:h-56 sm object-cover rounded-lg"
              />
            </div>

            <div className="space-y-4 flex flex-col justify-center items-start">
              <div className="space-y-1">
                <h1 className="font-normal md:text-sm text-xs text-[#2B2B2B] dark:text-[#FAFAFA]">
                  {product?.attributes.title}
                </h1>
                <p className="lg:font-semibold lg:text-2xl md:font-medium md:text-xl font-medium text-lg text-[#2B2B2B] dark:text-[#FAFAFA]">
                  {formatPrice(product?.attributes.price)}
                </p>
              </div>

              <div className="space-y-1">
                <h1 className="text-[#2B2B2B] dark:text-[#FAFAFA]font-normal md:text-sm text-xs">
                  Choose Color
                </h1>
                <div className="flex items-center space-x-2 cursor-pointer ">
                  {product?.attributes.colors.map((color) => (
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
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[#2B2B2B] dark:text-[#FAFAFA] font-normal md:text-sm text-xs">
                  Description Product
                </div>
                <p className="text-[#2B2B2B] dark:text-[#bfbfbb] leading-relaxed mt-1 font-light lg:text-sm md:text-sm text-xs">
                  {product?.attributes.description}
                </p>
              </div>

              <div className="flex justify-end w-full space-x-2">
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
                  className="bg-[#FABD05] hover:bg-[#FABD05]/80 text-[#2B2B2B] shadow-none font-normal md:text-sm text-xs"
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
