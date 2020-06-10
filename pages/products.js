import React, { Component } from "react";
import Products from "../src/containers/products";
import fetch from "node-fetch";

function ProductsPage({ query }) {
  const { s } = query;
  const url = s ? `?s=${s}&paginate=18` : "?paginate=18";
  console.log(url)
  return <Products url={url} />;
}

// export async function getStaticProps(context) {
//   const API_URL = process.env.api_url;

//   let res = await fetch(API_URL + "/products");
//   const products = await res.json();

//   return {
//     props: {
//       products,
//     },
//   };
// }

ProductsPage.getInitialProps = ({ query }) => {
  return { query };
};
export default ProductsPage;
