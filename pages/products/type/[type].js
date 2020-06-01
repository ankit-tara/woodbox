import React, { useState, useEffect } from "react";
import Products from "../../../src/containers/products";
import fetch from "node-fetch";
import { useRouter } from "next/router";
import { getProducts } from "../../../src/apis/global-api";

const CategoryProductsPage = () => {
  const [loading, setloading] = useState(false);
  const [products, setproducts] = useState([]);

  const router = useRouter();
  const { type } = router.query;
  console.log(type);


  useEffect(() => {
    fetchTypeProducts();
  }, []);

  const fetchTypeProducts = async () => {
    await getProducts(`?type=${type}`).then((data) => {
      console.log(type,data);
      setproducts(data);
    });
  };

  return <Products data={products} loading={loading} />;
};

export default CategoryProductsPage;
