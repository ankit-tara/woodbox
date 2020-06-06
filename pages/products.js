import React, { Component } from "react";
import Products from "../src/containers/products";
import fetch from "node-fetch";

function ProductsPage({ products }) {
  return <Products data={products} url={"?paginate=18"} />;
}

export async function getStaticProps(context) {
  const API_URL = process.env.api_url;

  let res = await fetch(API_URL + "/products");
  const products = await res.json();
  
  return {
    props: {
      products,
    },
  };
}

export default ProductsPage;
