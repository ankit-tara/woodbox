import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../src/Layout";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import ProductCard from "../src/components/ProductCard";
import Sidebar from "../src/components/Sidebar";
import Advertisement from "../src/components/Advertisement";
import CardHorizontal from "../src/components/CardHorizontal";
import Testimonial from "../src/components/Testimonial";
import TuneIcon from "@material-ui/icons/Tune";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  ProductCardsData,
  OurConceptData,
  TestimonialData,
} from "../src/utils";
import {
  commonStyles,
  desktopStyles,
  mobileStyles,
  TabStyles,
} from "../src/styles";

const fetch = require("node-fetch");

const useStyles = makeStyles((theme) => ({
  ...commonStyles,
  [theme.breakpoints.up("md")]: desktopStyles,
  [theme.breakpoints.between("sm", "md")]: TabStyles,
  [theme.breakpoints.down("sm")]: mobileStyles,
}));
import { useRouter } from "next/router";

function Products({ products }) {
  // console.log(products)
  const router = useRouter();
  console.log("route", router.query);
  const classes = useStyles();

  const matches = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const MobileSidebar = () => {
    const toggle = () => {
      setshowsidebar(!showsidebar);
    };

    const [showsidebar, setshowsidebar] = React.useState(false);
    return (
      <>
        <Button className={classes.fliterBtn} onClick={toggle}>
          <TuneIcon />
          Filter
        </Button>
        {showsidebar && <Sidebar />}
      </>
    );
  };

  return (
    <Layout>
      <Advertisement />

      {/* Products Section */}
      <section className={classes.section}>
        <Container maxWidth="xl">
          <Box className={classes.productsHeader}>
            <Typography variant="h5">
              Buy Used Products in your College
            </Typography>
          </Box>
        </Container>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              {matches ? <MobileSidebar /> : <Sidebar />}
            </Grid>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Box className={classes.ProductsGridWrapper}>
                {products.data.map((data) => (
                  <div key={data.id}>
                    <ProductCard data={data} />
                  </div>
                ))}
              </Box>
              <Box
                style={{ backgroundImage: "url(/static/images/boxbg.png)" }}
                className={classes.productContentSection}
              >
                <Typography variant="h4">
                  Want to see Your Stuffs Here ?
                </Typography>
                <Typography>
                  Make Some extra caMake Some extra cash by selling things sh by
                  selling things
                </Typography>
                <button>Selling Product</button>
              </Box>
              <Box className={classes.ProductsGridWrapper}>
                {products.data.map((data) => (
                  <div key={data.id}>
                    <ProductCard data={data} />
                  </div>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

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

export async function getStaticProps(context) {
  console.log("context", context);
  const API_URL = process.env.api_url;

  let res = await fetch(API_URL + "/products");
  const products = await res.json();
  console.log('products',products.data.length);
  return {
    props: {
      products,
    },
  };
}

export default Products;