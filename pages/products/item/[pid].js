import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../../../src/Layout";
import { Box, Button, Container, Grid, Card, CardContent, Typography } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Advertisement from '../../../src/components/Advertisement';
import ProductDetail from '../../../src/components/ProductDetail'
import Testimonial from '../../../src/components/Testimonial';
import { ProductCardsData, OurConceptData, TestimonialData } from '../../../src/utils';
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from '../../../src/styles';
import { useRouter } from 'next/router'


const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('md')]: desktopStyles,
  [theme.breakpoints.between('sm', 'md')]: TabStyles,
  [theme.breakpoints.down('sm')]: mobileStyles
}))

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function singlePage() {

  const router = useRouter()
  const { pid } = router.query
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://arbites.in/api/product/${pid}`)
      const product = await res.json()
      setData(product);
    };

    fetchData();
  }, []);


  const classes = useStyles()
  console.log(data)


  const matches = useMediaQuery(theme => theme.breakpoints.down('sm'))

  return (
    <Layout>

      <Advertisement />

      <Container maxWidth="xl">
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" className={classes.Breadcrumbs}>
          <Link color="inherit" href="/" onClick={handleClick}>
            Homepage
          </Link>
          <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
            Buy
          </Link>
          <Typography color="primary">Product</Typography>
        </Breadcrumbs>
      </Container>


      <ProductDetail data={data} />


      {/* Review Section */}
      <section className={classes.section} style={{ background: '#FFF6EF' }}>
        <Container maxWidth="xl">
          <Box className={classes.sectionHeader}>
            <Typography variant="h2">REVIEW</Typography>
            <Typography>Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit Lorem ipsum dolor sit amet, aretent  consectetuer adipiscing elit</Typography>
          </Box>
          <Testimonial data={TestimonialData} />
        </Container>
      </section>

      {/* Download App Section */}

      <section className={`${classes.section} ${classes.downloadApp}`} style={{ backgroundImage: 'url(/static/images/download.jpg)' }}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item lg={8} md={8} sm={6} xs={12}>
              <Box className={classes.downloadTitle}>
                <Typography variant="h3">TRY OUR APP ON YOUR MOBILE PHONE</Typography>
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
