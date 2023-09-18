import React, { Component } from "react";
import Prudcot from "../Prudoct/Prudoct";
// import { useProduct } from "../../Providers/ProductsProvider"
import { useProduct, useSetProduct } from "../../Providers/ProductsProvider";

import { ProductData } from "../ProductData/ProductData";
const PrudoctList = (props) => {
  const products = useProduct();
  const dispatch = useSetProduct();

  const {} = props;
  const renderPrudoct = () => {
    if (products.length === 0)
      return <div>There is no prudoct in your Card </div>;

    return products.map((prudoct, index) => {
      
      return (
        <Prudcot
          prudoct={prudoct}
          key={prudoct.id}
          OnIncrement={() => dispatch({ type: "increment", id: prudoct.id })}
          OnDelete={() => dispatch({ type: "remove", id: prudoct.id })}
          OnChange={(e) => dispatch({ type: "edit", id: prudoct.id, event: e })}
          OnDecrement={() => dispatch({ type: "decrement", id: prudoct.id })}
        />
      );
    });
  };
  return (
    <div>
      {!products.length && <div>go Shopping</div>}
      {renderPrudoct()}
    </div>
  );
};

export default PrudoctList;
