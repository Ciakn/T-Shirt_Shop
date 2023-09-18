import React from "react";
import { useReducer } from "react";
import { useContext, useState } from "react";
import { ProductData } from "../Comoponents/ProductData/ProductData";
import _ from "lodash";
const PrudoctContext = React.createContext();
const ProductContextDispatcher = React.createContext();
const initialState = ProductData;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const updatedProduct = [...state];
      updatedProduct[index] = product;
      return updatedProduct;
    }
    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      const updatedProducts = [...state];
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filteredProducts = state.filter((item) => item.id !== action.id);
        return filteredProducts;
      } else {
        product.quantity--;
        updatedProducts[index] = product;
        return updatedProducts;
      }
    }

    case "edit": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.title = action.event.target.value;
      const updatedProduct = [...state];
      updatedProduct[index] = product;
      return updatedProduct;
    }
    case "remove":
      const filteredProducts = state.filter((item) => item.id !== action.id);
      return filteredProducts;
    case "Filter": {
      const value = action.SelectedOption.value;
      if (value == "All") {
      
        return ProductData;
      } else {
        const updatedProducts = ProductData.filter(
          (p) => p.AvalibaleSizes.indexOf(value) >= 0
        );
        return updatedProducts;
      }
    }
    case "sort": {
      const value = action.SelectedOption.value;
      const product = [...state];
      if (value === "lowest") {
        const khiar = _.orderBy(product, ["price"], ["asc"]); // Use Lodash to sort array by 'name'
        return khiar;
      } else {
        const khiary = _.orderBy(product, ["price"], ["desc"]);
        return khiary;
      }
    }
    case "search": {
      const value = action.event.target.value;
      if (value === "") {
        return state;
      } else {
        const searchedItem = ProductData.filter((item) =>
          item.title.toLowerCase().includes(value.toLowerCase())
        );
        return searchedItem;
      }
    }
    default:
      return state;
  }
};
const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);

  return (
    <PrudoctContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </PrudoctContext.Provider>
  );
};

export default ProductProvider;
export const useProduct = () => useContext(PrudoctContext);
export const useSetProduct = () => useContext(ProductContextDispatcher);
