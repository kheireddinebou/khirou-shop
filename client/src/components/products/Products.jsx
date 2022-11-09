import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import { Container } from "./products-styles";
import axios from "axios";

const Products = ({ filter, category, sort }) => {
  const [products, setProducts] = useState([]);
  const [filtredProducts, setFiltredProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        category
          ? `http://localhost:3005/api/product?category=${category}`
          : "http://localhost:3005/api/product"
      );
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFiltredProducts = () => {
    category &&
      setFiltredProducts(
        products.filter(item =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  };

  // get products

  useEffect(() => {
    getProducts();
  }, [category]);

  // get filtred products

  useEffect(() => {
    getFiltredProducts();
  }, [category, products, filter]);

  // sort products

  useEffect(() => {
    if (sort === "newest") {
      setFiltredProducts(prev =>
        [...prev].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      );
    } else if (sort === "asc") {
      setFiltredProducts(prev => [...prev].sort((a, b) => a.price - b.price));
    } else if (sort === "desc") {
      setFiltredProducts(prev => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort, products]);

  return (
    <Container>
      {category
        ? filtredProducts?.map(item => <Product item={item} key={item._id} />)
        : products
            ?.slice(0, 8)
            .map(item => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
