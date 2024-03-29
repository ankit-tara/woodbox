import React, { Component } from "react";
import Events from "../src/containers/events";
import fetch from "node-fetch";

function EventsPage({ query }) {
  const { s, m_city, m_cat, m_uni, type } = query;
  let url = s ? `?s=${s}&paginate=12` : "?paginate=12";
  if (m_city) {
    url = url + '&m_city=' + m_city
  }
  if (m_cat) {
    url = url + '&m_cat=' + m_cat
  }
  if (m_uni) {
    url = url + '&m_uni=' + m_uni
  }
  if (type) {
    url = url + '&type=' + type
  }
  return <Events url={url}  />;
}

// export async function getStaticProps(context) {
//   const API_URL = process.env.api_url;

//   let res = await fetch(API_URL + "/events");
//   const events = await res.json();

//   return {
//     props: {
//       events,
//     },
//   };
// }

EventsPage.getInitialProps = ({ query }) => {
  return { query };
};
export default EventsPage;
