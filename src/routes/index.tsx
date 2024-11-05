import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DetailProduct from "@/pages/products/detailProduct";
import ProductsPage from "@/pages/products/products";
import OrdersPage from "@/pages/transaction/orders";
import CartPage from "@/pages/transaction/cart";
import NotFound from "@/pages/not-found";
import Home from "@/pages";

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
      path: "/orders",
      element: <OrdersPage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}
