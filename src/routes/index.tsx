import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CheckoutPage from "@/pages/transaction/checkout";
import ProductsPage from "@/pages/products/products";
import OrdersPage from "@/pages/transaction/orders";
import CartPage from "@/pages/transaction/cart";
import LoginPage from "@/pages/auth/login";
import Home from "@/pages";
import NotFound from "@/pages/not-found";
import DetailProduct from "@/components/DetailProduct";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <ProductsPage />,
    },
    {
      path: "/detail-product",
      element: <DetailProduct />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/checkout",
      element: <CheckoutPage />,
    },
    {
      path: "/orders",
      element: <OrdersPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}
