import React from "react";
import { Category, Container, Desc, Img } from "./categories-styles";
import { categoriesData } from "../../data.js";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <Container>
      {categoriesData.map(c => (
        <Category key={c.id}>
          <Link to={`/products/${c.cat}`}>
            <Img src={c.img} alt={c.title} />
            <Desc>
              <span>{c.title}</span>
              <button>shop now</button>
            </Desc>
          </Link>
        </Category>
      ))}
    </Container>
  );
};

export default Categories;
