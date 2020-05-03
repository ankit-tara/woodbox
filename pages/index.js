import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../src/Layout";
import { Box, Container, Typography } from '@material-ui/core';
import IconCard from '../src/components/IconCard';
import EventIconCard from '../src/components/EventIconCard';
import ProductCard from '../src/components/ProductCard';
import EventCard from '../src/components/EventCard';
import Banner from '../src/components/Banner';
import CardHorizontal from '../src/components/CardHorizontal';
import Testimonial from '../src/components/Testimonial';
import { IconCardsData, EventIconCardsData, ProductCardsData, EventCardsData, OurConceptData, TestimonialData } from '../src/utils';
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from './styles';

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('sm')]: desktopStyles,
  [theme.breakpoints.between('xs', 'sm')]: TabStyles,
  [theme.breakpoints.down('xs')]: mobileStyles
}))

export default function Index() {

  const classes = useStyles()

  return (
    <Layout>
      {/* Banner Section */}
      <Banner />

      {/* Buy/Rent Products in your College  Section */}
      <section className={classes.section}>
        <Container maxWidth="xl">
          <Box className={classes.sectionHeader}>
            <Typography variant="h3"> Buy / Rent Products in your College</Typography>
            <Typography>Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit Lorem ipsum dolor sit amet, aretent  consectetuer adipiscing elit</Typography>
          </Box>
          <Box className={classes.IconCardWrapper}>
            {IconCardsData.map((data, index) =>
              <IconCard key={index} data={data} />
            )}
          </Box>
        </Container>
      </section>

      {/* Events Section */}
      <section className={classes.section} style={{ background: '#F3F3F3' }}>
        <Container maxWidth="lg">
          <Box className={classes.sectionHeader}>
            <Typography variant="h2">Events</Typography>
            <Typography>Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit Lorem ipsum dolor sit amet, aretent  consectetuer adipiscing elit</Typography>
          </Box>
          <Box className={classes.EventIconCardWrapper}>
            {EventIconCardsData.map((data) =>
              <EventIconCard key={data.id} data={data} />
            )}
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
            {ProductCardsData.map((data) =>
              <ProductCard key={data.id} data={data} />
            )}
          </Box>
        </Container>

        <Container maxWidth="xl">
          <Box className={classes.productsHeader}>
            <Typography variant="h3">Rent</Typography>
          </Box>
          <Box className={classes.EventIconCardWrapper}>
            {ProductCardsData.map((data) =>
              <ProductCard key={data.id} data={data} />
            )}
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
            {EventCardsData.map((data) =>
              <EventCard key={data.id} data={data} />
            )}
          </Box>
        </Container>
      </section>

      <section className={classes.section} style={{ background: '#F3F3F3' }}>
        <Container maxWidth="lg">
          <Box className={classes.sectionHeader}>
            <Typography variant="h2"> OUR CONCEPT</Typography>
            <Typography>Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit Lorem ipsum dolor sit amet, aretent  consectetuer adipiscing elit</Typography>
          </Box>
          <Box className={classes.EventIconCardWrapper}>
            {OurConceptData.map((data) =>
              <CardHorizontal key={data.id} data={data} />
            )}
          </Box>
        </Container>
      </section>

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

