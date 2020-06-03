import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../Layout";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import Advertisement from "../components/Advertisement";
import CardHorizontal from "../components/CardHorizontal";
import Testimonial from "../components/Testimonial";
import TuneIcon from "@material-ui/icons/Tune";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ProductCardsData, OurConceptData, TestimonialData } from "../utils";
import {
  commonStyles,
  desktopStyles,
  mobileStyles,
  TabStyles,
} from "../styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const fetch = require("node-fetch");

const useStyles = makeStyles((theme) => ({
  ...commonStyles,
  [theme.breakpoints.up("md")]: desktopStyles,
  [theme.breakpoints.between("sm", "md")]: TabStyles,
  [theme.breakpoints.down("sm")]: mobileStyles,
}));
import { useRouter } from "next/router";
import { getProducts } from "../apis/global-api";

function Products({ data, url }) {
  const [products, setproducts] = useState([]);
  const [loadMore, setloadMore] = useState(false);
  const [lastPage, setlastPage] = useState(false);
  const [page, setpage] = useState(0);
  useEffect(() => {
    console.log("url", url);
    if (url) fetchTypeProducts(url);
    // setproducts(data);
  }, [data]);

  const handleButtonClick = () => {
    if (!loadMore) {
      setloadMore(true);
      fetchTypeProducts(url, page, products);
      // timer.current = setTimeout(() => {
      //   setLoading(false);
      // }, 2000);
    }
  };

  const fetchTypeProducts = async (url, page, products) => {
    page = !page ? 1 : page + 1;
    setpage(page);
    url = `${url}&page=${page}`;
    await getProducts(url).then((data) => {
      if (products && products.data) {
        data.data = products.data.concat(data.data);
      }
      if (data.current_page == data.last_page) {
        setlastPage(true);
      }
      // console.log(page, url, data);
      setproducts(data);
      setloadMore(false);
    });
  };
  // console.log(products)
  const router = useRouter();

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
                {products.data &&
                  products.data.length > 0 &&
                  products.data.slice(0, 6).map((data) => (
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
                {products.data &&
                  products.data.length > 0 &&
                  products.data.slice(6, products.data.length).map((data) => (
                    <div key={data.id}>
                      <ProductCard data={data} />
                    </div>
                  ))}
              </Box>

              {!lastPage && (
                <div className={classes.loadMorewrapper}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.loadMore}
                    disabled={loadMore}
                    onClick={handleButtonClick}
                  >
                    Load More
                  </Button>
                  {loadMore && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
              )}
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

      {/* Download App Section */}

      <section
        className={`${classes.section} ${classes.downloadApp}`}
        style={{ backgroundImage: "url(/static/images/download.jpg)" }}
      >
        <Container maxWidth="xl">
          <Grid container>
            <Grid item lg={8} md={8} sm={6} xs={12}>
              <Box className={classes.downloadTitle}>
                <Typography variant="h3">
                  TRY OUR APP ON YOUR MOBILE PHONE
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box className={classes.downloadContent}>
                <Typography variant="h5">GET YOUR APP TODAY</Typography>
                <div className={classes.downloadLinks}>
                  <a href="#">
                    <img src="/static/images/googleplay.png" />
                  </a>
                  <a href="#">
                    <img src="/static/images/appstore.png" />
                  </a>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Layout>
  );
}

// export async function getStaticProps(context) {
//   console.log("context", context);
//   const API_URL = process.env.api_url;

//   let res = await fetch(API_URL + "/products");
//   const products = await res.json();
//   console.log('products',products.data.length);
//   return {
//     props: {
//       products,
//     },
//   };
// }

export default Products;
