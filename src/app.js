import react, { Component, useState } from "react";
import PrudoctList from "./Comoponents/PrudoctList/PrudcotList";
import NavBar from "./Comoponents/NavBar/NavBar";
import "./App.css";


import Wrapper from "./Comoponents/Hoc/Wrapper";

import ProductProvider from "./Providers/ProductsProvider";
import Filter from "./Comoponents/Filter/Filter";


const App = () => {
  return (
    <>
      <ProductProvider>
        <NavBar />
      
        <Filter/>
        <PrudoctList />
      </ProductProvider>
    </>
  );
};

export default Wrapper(App, "container");
export const khiar = "mowz";
export const mowz = "mowz";
