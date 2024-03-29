import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../src/Layout";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import IconCard from "../src/components/IconCard";
import EventIconCard from "../src/components/EventIconCard";
import ProductCard from "../src/components/ProductCard";
import EventCard from "../src/components/EventCard";
import Banner from "../src/components/Banner";
import CardHorizontal from "../src/components/CardHorizontal";
import Testimonial from "../src/components/Testimonial";
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Swiper from "react-id-swiper";
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import {
  IconCardsData,
  EventIconCardsData,
  ProductCardsData,
  EventCardsData,
  OurConceptData,
  TestimonialData,
} from "../src/utils";
import {
  commonStyles,
  desktopStyles,
  mobileStyles,
  TabStyles,
} from "../src/styles";
import { getProducts } from "../src/apis/global-api";

const fetch = require("node-fetch");

const useStyles = makeStyles((theme) => ({
  ...commonStyles,
  [theme.breakpoints.up("md")]: desktopStyles,
  [theme.breakpoints.between("sm", "md")]: TabStyles,
  [theme.breakpoints.down("sm")]: mobileStyles,
}));

export async function getStaticProps() {
  const API_URL = process.env.api_url;

  let res = await fetch(API_URL + "/products?type=buy&paginate=10");
  const bproducts = await res.json();

  res = await fetch(API_URL + "/products?type=rental&paginate=10");
  const sproducts = await res.json();

  res = await fetch(API_URL + "/events?paginate=10");
  const events = await res.json();

  let feedback = await fetch(API_URL + "/all-feedback");
  const reviews = await feedback.json();


  return {
    props: {
      bproducts,
      sproducts,
      events,
      reviews
    },
  };
}

export default function Index({ bproducts, sproducts, events ,reviews }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [opensell, setOpensell] = React.useState(false);
  const anchorRef = React.useRef(null);
  const anchorRefSell = React.useRef(null);
  const [buyType, setbuyType] = useState('')
  const [sellType, setsellType] = useState('')
  const [list_bproducts, setlist_bproducts] = useState(bproducts)
  const [list_sproducts, setlist_sproducts] = useState(sproducts)
  const [list_reviews, setlist_reviews] = useState(reviews)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleToggleSell = () => {
    setOpensell((prevOpenSell) => !prevOpenSell);
  };

  const handleClose = async(event, data) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);

    if (data && data.title) {
      const API_URL = process.env.api_url;
      let res = await fetch(API_URL + "/products?type=buy&paginate=10&cat_title=" + data.title);
      let result = await res.json();
      setlist_bproducts(result)
      setbuyType(data.title)
    }
  };
  const handleCloseSell = async(event, data) => {
    if (anchorRefSell.current && anchorRefSell.current.contains(event.target)) {
      return;
    }

    setOpen(false);

    if (data && data.title) {
      const API_URL = process.env.api_url;
      let res = await fetch(API_URL + "/products?type=rental&paginate=10&cat_title=" + data.title);
      let result = await res.json();
      setlist_sproducts(result)
      setsellType(data.title)
    }
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  const prevOpenSell = React.useRef(opensell);

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    if (prevOpenSell.current === true && open === false) {
      anchorRefSell.current.focus();
    }

    prevOpen.current = open;
    prevOpenSell.current = opensell;
  }, [open]);

  const params = {
    loop: false,
    watchOverflow: false,
    slidesPerView: "4",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    breakpoints: {
      0: {
        slidesPerView: "1.2",
      },
      480: {
        slidesPerView: "2",
      },
      768: {
        slidesPerView: "2",
      },
      1100: {
        slidesPerView: "3",
      },
      1400: {
        slidesPerView: "4",
      },
    },
  };

  return (
    <Layout>
      {/* Banner Section */}
      <Banner />

      {/* Buy/Rent Products in your College  Section */}
      <section className={classes.section}>
        <Container maxWidth="xl">
          <Box className={classes.sectionHeader}>
            <Typography variant="h3">
              Buy / Rent Products in your College
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit
              Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit
            </Typography>
          </Box>
          <Box className={classes.IconCardWrapper}>
            {IconCardsData.map((data, index) => (
              <IconCard key={data.id} data={data} />
            ))}
          </Box>
        </Container>
      </section>

      {/* Events Section */}
      <section className={classes.section} style={{ background: "#F3F3F3" }}>
        <Container maxWidth="lg">
          <Box className={classes.sectionHeader}>
            <Typography variant="h2">Events</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit
              Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit
            </Typography>
          </Box>
          <Box className={classes.EventIconCardWrapper}>
            {EventIconCardsData.map((data) => (
              <EventIconCard key={data.id} data={data} />
            ))}
          </Box>
        </Container>
      </section>

      {/* Products Section */}
      <section className={classes.section}>
        <Container maxWidth="xl">
          <Box className={classes.productsHeader}>
            <div>
              <Typography variant="h5">Newly Added Products</Typography>
              <Typography variant="h3">Buy</Typography>
            </div>
            <div>
              <Button
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className={classes.catBtn}
              >
                {buyType ? buyType : "Category"} <ExpandMoreRoundedIcon />
              </Button>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          {IconCardsData.map((data, index) => (
                            <MenuItem onClick={(e) => handleClose(e, data)}>
                              {data.title}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </Box>

          <Box className={classes.EventIconCardWrapper}>
            <Swiper {...params}>
              {list_bproducts.data.map((data) => (
                <div key={data.id}>
                  <ProductCard data={data} />
                </div>
              ))}
            </Swiper>
          </Box>
        </Container>

        <Box className={classes.spacingBox} />

        <Container maxWidth="xl">
          <Box className={classes.productsHeader}>
            <Typography variant="h3">Rent</Typography>

            <div>
              <Button
                ref={anchorRefSell}
                aria-controls={opensell ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggleSell}
                className={classes.catBtn}
              >
                {sellType ? sellType : "Category"} <ExpandMoreRoundedIcon />
              </Button>
              <Popper
                open={opensell}
                anchorEl={anchorRefSell.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleCloseSell}>
                        <MenuList
                          autoFocusItem={open}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          {IconCardsData.map((data, index) => (
                            <MenuItem onClick={(e) => handleCloseSell(e, data)}>
                              {data.title}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </Box>
          <Box className={classes.EventIconCardWrapper}>
            {list_sproducts.data.length > 4 && (
              <Swiper {...params}>
                {list_sproducts.data.map((data) => (
                  <div key={data.id}>
                    <ProductCard data={data} />
                  </div>
                ))}
              </Swiper>
            )}
            {list_sproducts.data.length <= 4 &&
              list_sproducts.data.map((data) => (
                <div key={data.id}>
                  <ProductCard data={data} />
                </div>
              ))}
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
            {events.data.length > 4 && (
              <Swiper {...params}>
                {events.data.map((data) => (
                  <div key={data.id}>
                    <EventCard data={data} />
                  </div>
                ))}
              </Swiper>
            )}
            {events.data.length <= 4 &&
              events.data.map((data) => (
                <div key={data.id}>
                  <EventCard data={data} />
                </div>
              ))}
          </Box>
        </Container>
      </section>

      {/* Our concept Section */}
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

      {/* Review Section */}
      <section className={classes.section} style={{ background: "#FFF6EF" }}>
        <Container maxWidth="xl">
          <Box className={classes.sectionHeader}>
            <Typography variant="h2">REVIEW</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit
              Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit
            </Typography>
          </Box>
          <Testimonial data={list_reviews} />
        </Container>
      </section>
    </Layout>
  );
}

// Index.getInitialProps = ({ query: { id } }) => {
//   console.log("Response is ");
//   return { postId: id };
// };
