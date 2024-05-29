import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

import Root from "./Root";
import ProductGrid from "./components/ProductGrid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/products",
        element: <ProductGrid />,
      },
    ],
  },
]);

export default router;
