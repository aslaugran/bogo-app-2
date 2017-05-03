import React from "react";
import Category from "./Category";

const CategoryList = props => {
  const results = props.data;
  let categories = results.map(category => (
    <Category
      name={category.name}
      img={category.img}
      key={category.id}
      url={category.slug}
      color={category.color}
    />
  ));

  return (
    <div className="container-fluid">
      <div className="categories_title">
        <h1>Our Day Tour Categories</h1>
        <h2>Experience Iceland with our trusted guidance</h2>
      </div>
      <div className="row category-holder">
        {categories}
      </div>
    </div>
  );
};

export default CategoryList;
