import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../src/Layout";
import { Box, Button, Container, Grid, Card, CardContent, Typography } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Advertisement from '../src/components/Advertisement';
import ProductDetail from '../src/components/ProductDetail'
import Testimonial from '../src/components/Testimonial';
import { ProductCardsData, OurConceptData, TestimonialData } from '../src/utils';
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from '../src/styles';

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

  const classes = useStyles()

  const matches = useMediaQuery(theme => theme.breakpoints.down('sm'))

  return (
    <Layout>

      <Advertisement />

      <Container maxWidth="xl">
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" className={classes.Breadcrumbs}>
          <Link color="inherit" href="/" onClick={handleClick}>
            Homepage
          </Link>
          <Link color="inherit" onClick={handleClick}>
            Buy
          </Link>
          <Typography color="primary">Product</Typography>
        </Breadcrumbs>
      </Container>

      
      <ProductDetail/>


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

    </Layout>
  );
}

