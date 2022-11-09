import React, { useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Products from "../../components/products/Products";
import {
  Container,
  Filter,
  FilterWrapper,
  Select,
  Title,
  option,
} from "./productsList-styles";

const ProductsList = () => {
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");
  const { category } = useParams();

  const handleFilter = e => {
    const { name, value } = e.target;

    setFilter({
      ...filter,
      [name]: value,
    });
  };

  return (
    <Container>
      <Title>{category}</Title>
      <FilterWrapper>
        <Filter>
          <span>Filter Products:</span>
          <Select name="color" onChange={e => handleFilter(e)}>
            <option disabled defaultValue>
              Color
            </option>
            <option>white</option>
            <option>black</option>
            <option>red</option>
            <option>blue</option>
            <option>yellow</option>
            <option>green</option>
          </Select>
          <Select name="size" onChange={e => handleFilter(e)}>
            <option disabled defaultValue>
              Size
            </option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="s">XL</option>
            <option value="xl">XL</option>
            <option value="xxl">XLL</option>
          </Select>
        </Filter>
        <Filter>
          <span>Sort Products:</span>
          <Select onChange={e => setSort(e.target.value)}>
            <option value="newest" defaultValue>
              Newest
            </option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </Select>
        </Filter>
      </FilterWrapper>
      <Products filter={filter} sort={sort} category={category} />
    </Container>
  );
};

export default ProductsList;
