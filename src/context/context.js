import React, { useContext, useState } from "react";

// import {
//   SIDEBAR_OPEN,
//   SIDEBAR_CLOSE,
//   GET_PRODUCTS_BEGIN,
//   GET_PRODUCTS_SUCCESS,
//   GET_PRODUCTS_ERROR,
//   GET_SINGLE_PRODUCT_BEGIN,
//   GET_SINGLE_PRODUCT_SUCCESS,
//   GET_SINGLE_PRODUCT_ERROR,
// } from "../actions";

// const initialState = {
//   isSidebarOpen: false,
// };

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <ProductsContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
