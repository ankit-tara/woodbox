import React, { Component } from "react";
import Events from "../src/containers/events";
import fetch from "node-fetch";

function EventsPage({ query }) {
  const { s } = query;
  const url = s ? `?s=${s}&paginate=12` : "?paginate=12";
  console.log(url)
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
