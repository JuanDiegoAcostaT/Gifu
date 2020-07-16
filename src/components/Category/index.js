import React from "react";
import {
  CategoryTitle,
  CategoryList,
  CategoryLink,
  CategoryListItem,
} from "./styles";

export default function Category({ name, options = [] }) {
  return (
    <section>
      <CategoryTitle>{name}</CategoryTitle>
      <CategoryList>
        {options.map((singleOption, index) => (
          <CategoryListItem key={singleOption} index={index} >
            <CategoryLink to={`/search/${singleOption}/g/es`}>
              {singleOption}
            </CategoryLink>
          </CategoryListItem>
        ))}
      </CategoryList>
    </section>
  );
}
