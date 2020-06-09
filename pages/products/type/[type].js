import React, { useState, useEffect } from "react";
import Products from "../../../src/containers/products";
import { getProducts } from "../../../src/apis/global-api";

const ItemProductsPage = ({ query }) => {
  const [loading, setloading] = useState(false);
  const [products, setproducts] = useState([]);
  const [url, seturl] = useState("");

  const { type } = query;

  // useEffect(() => {
  //   fetchTypeProducts();
  // }, []);

  // const fetchTypeProducts = async () => {
  //   await getProducts(`?type=${type}&paginate=18`).then((data) => {
  //     console.log(type, data);
  //     setproducts(data);
  //   });
  // };

  return <Products loading={loading} url={`?type=${type}&paginate=18`} />;
};
ItemProductsPage.getInitialProps = ({ query }) => {
  return { query };
};
export default ItemProductsPage;