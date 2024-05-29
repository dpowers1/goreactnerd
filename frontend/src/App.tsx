import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductGrid from "./components/ProductGrid";
import router from "./router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <ProductGrid />
      <Footer />
    </>
  );
}

export default App;
