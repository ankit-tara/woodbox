import React, { useEffect, useState } from "react";
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
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  commonStyles,
  desktopStyles,
  mobileStyles,
  TabStyles,
} from "../src/styles";
import { getAllBuyRequests } from "../src/apis/global-api";

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
  const [expanded, setExpanded] = useState(false);
  const [requests, setrequests] = useState({});
  const [loadMore, setloadMore] = useState(false);
  const [lastPage, setlastPage] = useState(false);
  const [page, setpage] = useState(0);

  useEffect(() => {
    getProductRequest(page)
  }, [])

  const getProductRequest = (page) => {
     page = !page ? 1 : page + 1;
    setpage(page);
    let url = `&page=${page}`;
    getAllBuyRequests(url).then((data) => {
      if (requests && requests.data) {
        data.data = requests.data.concat(data.data);

      }
      if (data) {
        setrequests(data);
      }
      if (data && data.current_page == data.last_page) {
        setlastPage(true);
      }
      setloadMore(false);
      // setrequests(data)
      // if (data && data.current_page == data.last_page) {
      //   setlastPage(true);
      // } else {
      //   setlastPage(false);
      // }
    });
  }

  const handleButtonClick = () => {
    if (!loadMore) {
      setloadMore(true);
      getProductRequest(page);
      // timer.current = setTimeout(() => {
      //   setLoading(false);
      // }, 2000);
    }
  };

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
                <Typography variant="h3" style={{ textAlign: 'center', marginBottom: '1rem' }}>Buy Requests</Typography>
              </Box>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box>
                <div className={classes.root}>
                  {requests && requests.data &&
                    requests.data.length > 0 &&
                    requests.data.map((data) => (
                      <Accordian data={data} />
                    ))}
                  {/* <Accordian />
                  
                  <Accordian /> */}
                </div>
              </Box>

              {requests.data && requests.data.length > 0 && !lastPage && (
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
    </Layout>
  );
}
