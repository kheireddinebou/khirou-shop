import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsList from "./pages/productsList/ProductsList";
import Announcement from "./components/Announcement/Announcement";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SocielMediaLinks from "./components/socielMediaLinks/SocielMediaLinks";
import NewsLetter from "./components/newsLetter/NewsLetter";
import Product from "./pages/product/Product";
import Register from "./pages/register/Register";
import Cart from "./pages/cart/Cart";
import SuccessPayment from "./pages/successPayment/SuccessPayment";

function App() {
  return (
    <>
      <Router>
        <Announcement />
        <Navbar />
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route
            exact
            path={"/products/:category"}
            element={<ProductsList />}
          />
          <Route exact path={"/product/:id"} element={<Product />} />
          <Route exact path={"/cart"} element={<Cart />} />
          <Route exact path={"/success"} element={<SuccessPayment />} />
        </Routes>
        <NewsLetter />
        <Footer />
        <SocielMediaLinks />
      </Router>
    </>
  );
}

export default App;
