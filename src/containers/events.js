import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../Layout";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import EventCard from "../components/EventCard";
import Sidebar from "../components/Sidebar";
import Advertisement from "../components/Advertisement";
import CardHorizontal from "../components/CardHorizontal";
import Testimonial from "../components/Testimonial";
import TuneIcon from "@material-ui/icons/Tune";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { OurConceptData, TestimonialData } from "../utils";
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
import { getEvents } from "../apis/global-api";

function Events({ data, url, showState=false }) {
  const [events, setevents] = useState([]);
  const [loadMore, setloadMore] = useState(false);
  const [lastPage, setlastPage] = useState(false);
  const [page, setpage] = useState(0);
  useEffect(() => {
    console.log("url", url);
    if (url) fetchTypeEvents(url, 0, []);
    // setevents(data);
  }, [data, url]);

  const handleButtonClick = () => {
    if (!loadMore) {
      setloadMore(true);
      fetchTypeEvents(url, page, events);
      // timer.current = setTimeout(() => {
      //   setLoading(false);
      // }, 2000);
    }
  };

  const fetchTypeEvents = async (url, page, events) => {
    page = !page ? 1 : page + 1;
    setpage(page);
    url = `${url}&page=${page}`;
    await getEvents(url).then((data) => {
      if (events && events.data) {
        data.data = events.data.concat(data.data);
      }
      if (data.current_page == data.last_page) {
        setlastPage(true);
      }
      // console.log(page, url, data);
      setevents(data);
      setloadMore(false);
    });
  };
  // console.log(events)
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
        {showsidebar && (
          <Sidebar type="events" />
        )}
      </>
    );
  };

  return (
    <Layout>
      <Advertisement />

      {/* events Section */}
      <section className={classes.section}>
        <Container maxWidth="xl">
          <Box className={classes.productsHeader}>
            <Typography variant="h5">Events in your College</Typography>
          </Box>
        </Container>
        <Container maxWidth="xl">
          <Grid container>
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}
              className="scrollarea"
              // style={{ height: "200px", overflow: "scroll" }}
            >
              {matches ? (
                <Sidebar showFilterBtn="true" />
              ) : (
                <StickyBox offsetTop={100} offsetBottom={20}>
                    <Sidebar type="events" />
                </StickyBox>
              )}
            </Grid>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Box className={classes.ProductsGridWrapper}>
                {events.data &&
                  events.data.length > 0 &&
                  events.data.slice(0, 6).map((data) => (
                    <div key={data.id}>
                      <EventCard data={data} showState={showState} />
                    </div>
                  ))}
              </Box>

              {events.data && events.data.length <= 0 && (
                <Typography variant="h4">
                  Oops!! we we could not find related to your search. Please
                  search something else
                </Typography>
              )}

              <Box className={classes.ProductsGridWrapper}>
                {events.data &&
                  events.data.length > 0 &&
                  events.data.slice(6, events.data.length).map((data) => (
                    <div key={data.id}>
                      <EventCard data={data} />
                    </div>
                  ))}
              </Box>

              {events.data && events.data.length > 0 && !lastPage && (
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
    </Layout>
  );
}

// export async function getStaticProps(context) {
//   console.log("context", context);
//   const API_URL = process.env.api_url;

//   let res = await fetch(API_URL + "/events");
//   const events = await res.json();
//   console.log('events',events.data.length);
//   return {
//     props: {
//       events,
//     },
//   };
// }

export default Events;
