import React, { Component, useState, useEffect } from "react";
import Products from "../src/containers/products";
import fetch from "node-fetch";
import { useSelector } from "react-redux";
import Modal from "../src/components/Modal";
import { SELECTED_FILTER_UNIVERSITY } from "../src/constants";

function ProductsPage({ query }) {
  const user = useSelector((state) => state.auth_user.user);
  const [open, setopen] = useState(false);
  const [url, seturl] = useState('');
  const [m_uni, setm_uni] = useState('');

  useEffect(() => {
    setQuery(query)
    // setModalStatus(query)
  }, [query])

  // const setModalStatus = (query) => {
  //   const { m_uni } = query;
  //   console.log('testttt', !m_uni)
  //   console.log('testttt', !user, user)

  // }

  const setQuery = (query) => {

    let { s, m_city, m_cat, m_uni, type } = query;

    let url = s ? `?s=${s}&paginate=12` : "?paginate=12";

    let data = localStorage.getItem(SELECTED_FILTER_UNIVERSITY)
    data = JSON.parse(data) ? JSON.parse(data).response : ''

    if (!m_uni && data && data.length) {
      m_uni = data[0].name
    } else if (!m_uni && !user.id) {
      setopen(true)
    } else if (!m_uni && user.university && user.university.name) {
      m_uni = user.university.name
    }
    setm_uni(m_uni)




    if (m_city) {
      url = url + '&m_city=' + m_city
    }
    if (m_cat) {
      url = url + '&m_cat=' + m_cat
    }
    if (m_uni) {
      url = url + '&m_uni=' + m_uni
    }
    //  else if (user && user.university) {
    //   url = url + '&m_uni=' + user.university.name
    // }
    if (type) {
      url = url + '&type=' + type
    }
    seturl(url)
  }

  return (
    <div>
      {open && <Modal openStatus={open} />}
      <Products url={url} m_uni={m_uni} />
    </div>
  );
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
