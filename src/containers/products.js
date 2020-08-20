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
import StickyBox from "react-sticky-box";
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
import { getProducts, getAllFeedback } from "../apis/global-api";

function Products({ data, url }) {
  const [products, setproducts] = useState([]);
  const [loadMore, setloadMore] = useState(false);
  const [lastPage, setlastPage] = useState(false);
  const [page, setpage] = useState(0);
  const [list_reviews, setlist_reviews] = useState([])

  useEffect(() => {
    console.log("url", url);
    if (url) fetchTypeProducts(url, 0, []);
    getAllFeedback().then((data) => {
      setlist_reviews(data)
    });
    // setproducts(data);
  }, [data, url]);

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
    return <Sidebar />
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
              Buy/Rent Used Products in your College
            </Typography>
          </Box>
        </Container>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              {matches ? (
                <Sidebar showFilterBtn="true"/>
              ) : (
                <StickyBox offsetTop={100} offsetBottom={20}>
                  <Sidebar />
                </StickyBox>
              )}
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

              {products.data && products.data.length <= 0 && (
                <Typography variant="h4">
                  Oops!! we we could not find related to your search. Please
                  search something else
                </Typography>
              )}

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

              {products.data && products.data.length > 0 && !lastPage && (
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
          {list_reviews.length > 0 && <Testimonial data={list_reviews} />}
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
