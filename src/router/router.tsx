import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/page/Home";
import { ErrorPage } from "@/page/ErrorPage";
import ProductDetails from "@/page/ProductDetails";
import AboutPage from "@/page/AboutPage";
import ContactPage from "@/page/ContactPage";
import Products from "@/page/Products";
import { CartPage } from "@/page/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
