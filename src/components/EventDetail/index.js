import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  CardContent,
  Typography,
} from "@material-ui/core";
import ImageGallery from "react-image-gallery";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import { commonStyles, desktopStyles, mobileStyles } from "./styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  ...commonStyles,
  [theme.breakpoints.up("md")]: desktopStyles,
  [theme.breakpoints.down("sm")]: mobileStyles,
}));

const EventDetail = ({ data }) => {
  const [event, setevent] = useState({});
  const [images, setimages] = useState([]);
  const [showVideo, setshowVideo] = useState(false);

  function _renderVideo(item) {
    return (
      <div className="video-wrapper">
        <video width="560" height="315" controls>
          <source src={item.embedUrl} type="video/mp4" />
        </video>
        {/* {showVideo ? (
          <div className="video-wrapper">
            <a
              className="close-video"
              onClick={_toggleShowVideo.bind(this, item.embedUrl)}
            ></a>
            <iframe
              width="560"
              height="315"
              src={item.embedUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <a onClick={_toggleShowVideo.bind(this, item.embedUrl)}>
            <div className="play-button"></div>
            <img className="image-gallery-image" src={item.original} />
          </a>
        )} */}
      </div>
    );
  }

  const _toggleShowVideo = (url) => {
    console.log("called");
    console.log(showVideo);
    setshowVideo(!showVideo);
  };

  // function _resetVideo(index) {
  //   setshowVideo(false)
  //   console.debug('slid to index', index);
  // }

  // function _onSlide() {
  //   _resetVideo();
  // }

  useEffect(() => {
    setevent(data);
    if (data.images) {
      let imgArr = [];
      let self = this;
      data.images.map((item) => {
        if (item.type == "video") {
          imgArr.push({
            original: item.thumbnail_link,
            thumbnail: item.thumbnail_link,
            embedUrl: item.link,
            renderItem: _renderVideo.bind(self),
          });
        } else {
          imgArr.push({
            original: item.link,
            thumbnail: item.thumbnail_link,
          });
        }
      });
      console.log(imgArr);
      setimages(imgArr);
    }
    // setevents(data);
  }, [data]);

  function renderLeftNav(onClick, disabled) {
    return (
      <button
        type="button"
        className="image-gallery-left-nav"
        aria-label="Prev Slide"
        disabled={disabled}
        onClick={onClick}
      >
        <FaArrowLeft size={30} color="#000" />
      </button>
    );
  }

  function renderRightNav(onClick, disabled) {
    return (
      <button
        type="button"
        className="image-gallery-right-nav"
        aria-label="Next Slide"
        disabled={disabled}
        onClick={onClick}
      >
        <FaArrowRight size={30} color="#000" />
      </button>
    );
  }

  const classes = useStyles();

  console.log("data", data);
  if (!data )
    return (
      <Container maxWidth="xl">
        <Box className={classes.sectionHeader}>
          <Typography variant="h4">Event not found!!</Typography>
        </Box>{" "}
      </Container>
    );

  return (
    <section className={classes.section}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12} className={classes.grid}>
            <Card
              className={`${classes.card} ${classes.spanCol4} ${classes.spanRow2}`}
            >
              <CardContent className={classes.cardBody}>
                <div className={classes.Gallery}>
                  <ImageGallery
                    items={images}
                    // onSlide={_onSlide.bind(this)}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showGalleryPlayButton={true}
                  />
                </div>
              </CardContent>
            </Card>
            <Card className={`${classes.card} ${classes.spanCol2}`}>
              <CardContent className={classes.cardInnerBody}>
                <div className={classes.Left}>
                  <Box className={classes.box}>
                    <Typography className={classes.heading}>Date</Typography>
                    <Typography variant="h6">{data.event_date}</Typography>
                  </Box>
                  <Box className={classes.box}>
                    <Typography className={classes.heading}>
                      Category Type
                    </Typography>
                    <Typography variant="h6">
                      {data.category ? data.category.name : ""}
                    </Typography>
                  </Box>
                  <Box className={classes.box}>
                    <Typography className={classes.heading}>
                      Contact Number
                    </Typography>
                    <Typography variant="h4" color="primary">
                      {data.contact_number}
                    </Typography>
                  </Box>
                </div>
                <div className={classes.Right}>
                  <FavoriteBorderIcon />
                  <ShareOutlinedIcon />
                </div>
              </CardContent>
            </Card>

            <Card
              className={`${classes.card} ${classes.SellerCard} ${classes.spanCol2}`}
            >
              <CardContent className={classes.cardInner}>
                <div className={classes.cardHead}>
                  <Box className={classes.box}>
                    <Typography className={classes.heading}>
                      Event Organiser
                    </Typography>
                    <Typography variant="h6">
                      {data.university ? data.university.name : ""}
                    </Typography>
                  </Box>
                  <div className="d-flex">
                    <Box className={classes.Pricebox}>
                      <Typography className={classes.heading}>Price</Typography>
                      <Typography variant="h4" color="primary">
                        &#8377;{data.price}
                      </Typography>
                    </Box>
                    <Box className={`${classes.box} social-links`}>
                      {data.social_profiles.length && 
                      <Typography className={classes.heading}>
                        Social Links
                      </Typography>}
                      <Typography className={classes.heading}>
                        {data.social_profiles.map((sp) => [
                          sp.text &&
                          sp.text.toString().toLowerCase() == "facebook" ? (
                            <a target="_blank" href={`${sp.link}`}>
                              {" "}
                              <FacebookIcon />
                            </a>
                          ) : (
                            [
                              sp.text &&
                              sp.text.toString().toLowerCase() == "twitter" ? (
                                <a target="_blank" href={`${sp.link}`}>
                                  {" "}
                                  <TwitterIcon />{" "}
                                </a>
                              ) : (
                                [
                                  sp.text &&
                                  sp.text.toString().toLowerCase() ==
                                    "instagram" ? (
                                    <a target="_blank" href={`${sp.link}`}>
                                      {" "}
                                      <InstagramIcon />{" "}
                                    </a>
                                  ) : (
                                    [
                                      sp.text &&
                                      sp.text.toString().toLowerCase() ==
                                        "youtube" ? (
                                        <a target="_blank" href={`${sp.link}`}>
                                          {" "}
                                          <YouTubeIcon />{" "}
                                        </a>
                                      ) : (
                                        [
                                          sp.text &&
                                          sp.text.toString().toLowerCase() ==
                                            "linkedin" ? (
                                            <a
                                              target="_blank"
                                              href={`${sp.link}`}
                                            >
                                              <LinkedInIcon />
                                            </a>
                                          ) : (
                                            ""
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ])}
                      </Typography>
                    </Box>
                  </div>
                </div>
                <div className={classes.cardAction}>
                  <a target="_blank" href={`${data.book_event_link}`}>
                    <Button className={classes.primaryBtn}>Book Event</Button>
                  </a>
                  <a
                    target="_blank"
                    href={`${data.visit_website_link}`}
                    // as={`/profile/${data.seller.id}`}
                  >
                    <Button className={classes.secondaryBtn}>
                      Visit Website
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className={`${classes.card} ${classes.spanCol6}`}>
              <CardContent className={classes.cardBody}>
                <Typography className={classes.heading}>Discription</Typography>
                <Typography className={classes.paragraph}>
                  {data.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default EventDetail;
