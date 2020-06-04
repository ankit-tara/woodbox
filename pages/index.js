import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../src/Layout";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import IconCard from "../src/components/IconCard";
import EventIconCard from "../src/components/EventIconCard";
import ProductCard from "../src/components/ProductCard";
import EventCard from "../src/components/EventCard";
import Banner from "../src/components/Banner";
import CardHorizontal from "../src/components/CardHorizontal";
import Testimonial from "../src/components/Testimonial";
import Swiper from "react-id-swiper";
import {
  IconCardsData,
  EventIconCardsData,
  ProductCardsData,
  EventCardsData,
  OurConceptData,
  TestimonialData,
} from "../src/utils";
import {
  commonStyles,
  desktopStyles,
  mobileStyles,
  TabStyles,
} from "../src/styles";
import { getProducts } from "../src/apis/global-api";

const fetch = require("node-fetch");

const useStyles = makeStyles((theme) => ({
  ...commonStyles,
  [theme.breakpoints.up("md")]: desktopStyles,
  [theme.breakpoints.between("sm", "md")]: TabStyles,
  [theme.breakpoints.down("sm")]: mobileStyles,
}));

export async function getStaticProps() {
  const API_URL = process.env.api_url;

  let res = await fetch(API_URL + "/products?type=buy&paginate=10");
  const bproducts = await res.json();

  res = await fetch(API_URL + "/products?type=rental&paginate=10");
  const sproducts = await res.json();

  return {
    props: {
      bproducts,
      sproducts,
    },
  };
}

export default function Index({ bproducts, sproducts }) {
  const classes = useStyles();

  const params = {
    loop: false,
    slidesPerView: "4",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    breakpoints: {
      0: {
        slidesPerView: "1.2",
      },
      480: {
        slidesPerView: "2",
      },
      768: {
        slidesPerView: "2",
      },
      1100: {
        slidesPerView: "3",
      },
      1400: {
        slidesPerView: "4",
      },
    },
  };

  return (
    <Layout>
      {/* Banner Section */}
      <Banner />

      {/* Buy/Rent Products in your College  Section */}
      <section className={classes.section}>
        <Container maxWidth="xl">
          <Box className={classes.sectionHeader}>
            <Typography variant="h3">
              Buy / Rent Products in your College
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit
              Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit
            </Typography>
          </Box>
          <Box className={classes.IconCardWrapper}>
            {IconCardsData.map((data, index) => (
              <IconCard key={data.id} data={data} />
            ))}
          </Box>
        </Container>
      </section>

      {/* Events Section */}
      <section className={classes.section} style={{ background: "#F3F3F3" }}>
        <Container maxWidth="lg">
          <Box className={classes.sectionHeader}>
            <Typography variant="h2">Events</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit
              Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit
            </Typography>
          </Box>
          <Box className={classes.EventIconCardWrapper}>
            {EventIconCardsData.map((data) => (
              <EventIconCard key={data.id} data={data} />
            ))}
          </Box>
        </Container>
      </section>

      {/* Products Section */}
      <section className={classes.section}>
        <Container maxWidth="xl">
          <Box className={classes.productsHeader}>
            <Typography variant="h5">Newly Added Products</Typography>
            <Typography variant="h3">Buy</Typography>
          </Box>
          <Box className={classes.EventIconCardWrapper}>
            <Swiper {...params}>
              {bproducts.data.map((data) => (
                <div key={data.id}>
                  <ProductCard data={data} />
                </div>
              ))}
            </Swiper>
          </Box>
        </Container>

        <Box style={{ margin: "3rem 0" }} />

        <Container maxWidth="xl">
          <Box className={classes.productsHeader}>
            <Typography variant="h3">Rent</Typography>
          </Box>
          <Box className={classes.EventIconCardWrapper}>
            <Swiper {...params}>
              {sproducts.data.map((data) => (
                <div key={data.id}>
                  <ProductCard data={data} />
                </div>
              ))}
            </Swiper>
          </Box>
        </Container>
      </section>

      {/* Events Section */}
      <section className={`${classes.section} ${classes.ptZero}`}>
        <Container maxWidth="xl">
          <Box className={classes.productsHeader}>
            <Typography variant="h5">Newly Added Events</Typography>
          </Box>
          <Box className={classes.EventIconCardWrapper}>
            <Swiper {...params}>
              {EventCardsData.map((data) => (
                <div key={data.id}>
                  <EventCard data={data} />
                </div>
              ))}
            </Swiper>
          </Box>
        </Container>
      </section>

      {/* Our concept Section */}
      <section className={classes.section} style={{ background: "#F3F3F3" }}>
        <Container maxWidth="lg">
          <Box className={classes.sectionHeader}>
            <Typography variant="h2"> OUR CONCEPT</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit
              Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit
            </Typography>
          </Box>
          <Box className={classes.EventIconCardWrapper}>
            {OurConceptData.map((data) => (
              <CardHorizontal key={data.id} data={data} />
            ))}
          </Box>
        </Container>
      </section>

      {/* Review Section */}
      <section className={classes.section} style={{ background: "#FFF6EF" }}>
        <Container maxWidth="xl">
          <Box className={classes.sectionHeader}>
            <Typography variant="h2">REVIEW</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit
              Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit
            </Typography>
          </Box>
          <Testimonial data={TestimonialData} />
        </Container>
      </section>
    </Layout>
  );
}

// Index.getInitialProps = ({ query: { id } }) => {
//   console.log("Response is ");
//   return { postId: id };
// };
