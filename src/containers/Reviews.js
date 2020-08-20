import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import Testimonial from "../components/Testimonial";

import {
  commonStyles,
  desktopStyles,
  mobileStyles,
  TabStyles,
} from "../styles";

const useStyles = makeStyles((theme) => ({
  ...commonStyles,
  [theme.breakpoints.up("md")]: desktopStyles,
  [theme.breakpoints.between("sm", "md")]: TabStyles,
  [theme.breakpoints.down("sm")]: mobileStyles,
}));

export default function Reviews() {
  const classes = useStyles();

  const [list_reviews, setlist_reviews] = useState(null);

  async function fetchReviews () {
    const API_URL = process.env.api_url;
    let feedback = await fetch(API_URL + "/all-feedback");
    const reviews = await feedback.json();
    console.log("reviews", reviews);
    setlist_reviews(reviews)
  }
 
  useEffect(() => {
    fetchReviews()
  }, []);

//   console.log("list_reviews", list_reviews);

  return (
    <section className={classes.section} style={{ background: "#FFF6EF" }}>
      <Container maxWidth="xl">
        <Box className={classes.sectionHeader}>
          <Typography variant="h2">REVIEW</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit
          </Typography>
        </Box>
        {list_reviews && <Testimonial data={list_reviews} />}
      </Container>
    </section>
  );
}
