import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../src/Layout";
import Accordian from "../src/components/Accordian";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
 } from "@material-ui/core";

import {
  commonStyles,
  desktopStyles,
  mobileStyles,
  TabStyles,
} from "../src/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  ...commonStyles,
  [theme.breakpoints.up("md")]: desktopStyles,
  [theme.breakpoints.between("sm", "md")]: TabStyles,
  [theme.breakpoints.down("sm")]: mobileStyles,
}));

export default function BuyRequest() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Layout>
      <section className={classes.section}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box className="mb-3">
                <Typography variant="h3" style={{textAlign: 'center', marginBottom: '1rem'}}>Buy Requests</Typography>
              </Box>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box>
                <div className={classes.root}>
                  <Accordian/>
                  <Accordian/>
                  <Accordian/>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Layout>
  );
}
