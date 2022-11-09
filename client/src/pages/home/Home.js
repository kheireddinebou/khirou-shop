import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Categories from "../../components/categories/Categories";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import Products from "../../components/products/Products";
import Slider from "../../components/slider/Slider";
import SocielMediaLinks from "../../components/socielMediaLinks/SocielMediaLinks";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
