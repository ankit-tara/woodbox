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

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

import { commonStyles, desktopStyles, mobileStyles } from "./styles";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import store from "../../redux/store";
import Router from "next/router";
import { useRouter } from "next/router";
// import { chatDialog } from "../../redux/actions/dialog";
import ConnectyCube from "connectycube";

import { DeleteEvent , Favourite} from "../../apis/auth-api"

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { authenticated } from "../../redux/actions/auth";
import ShareIcon from "../ShareIcon"

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



const useStyles = makeStyles((theme) => ({
  ...commonStyles,
  [theme.breakpoints.up("md")]: desktopStyles,
  [theme.breakpoints.down("sm")]: mobileStyles,
}));

const ProductDetail = ({ data }) => {

  const dispatch = useDispatch();
   const [isSaved, setisSaved] = React.useState(0)
  const [product, setproduct] = useState({});
  const [images, setimages] = useState([]);
  const [showVideo, setshowVideo] = useState(false);

  const userFavProducts = useSelector((state) => state.auth_user.userFavProducts);
  const accessToken = useSelector((state) => state.auth_user.accessToken);
  const user = useSelector((state) => state.auth_user.user.id);
  const userdetail = useSelector((state) => state.auth_user.user);
  const [snackbar, setsnackbar] = React.useState(false);
  const [snackbarMsg, setsnackbarMsg] = React.useState("");
  const [snackbarType, setsnackbarType] = React.useState("success");

  const router = useRouter()


  const staticImages = [
    {
      original: "/static/images/bike1.jpg",
      thumbnail: "/static/images/bike1.jpg",
      embedUrl:
        "https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0",
      renderItem: _renderVideo.bind(this),
    },
    {
      original: "/static/images/bike2.jpg",
      thumbnail: "/static/images/bike2.jpg",
    },
    {
      original: "/static/images/bike3.jpg",
      thumbnail: "/static/images/bike3.jpg",
    },
    {
      original: "/static/images/bike4.jpg",
      thumbnail: "/static/images/bike4.jpg",
    },
  ];

  useEffect(() => {
       isFavourite();
    }, [userFavProducts])

  const isFavourite = () => {
      if (userFavProducts && userFavProducts.includes(data.id)) {
          console.log(userFavProducts,userFavProducts.includes(data.id))
          setisSaved(1);
         
      }
    };
   const changeRating = () => {
    console.log('clk');
    if (!accessToken || accessToken==''){
      window.location.replace("/?signup=open");
    }
   
    if (!isSaved ) {

       Favourite({'type_id':data.id,type:'product','user_id':user,'action':'add'}).then((response) => {
        if (response.error) {
          setsnackbar(true);
          setsnackbarMsg("There is some error.Please try again later");
          setsnackbarType("error");          
          dispatch(authenticated(userdetail, accessToken, response.body.favEvents,response.body.favProducts));

        } else {
          setsnackbar(true);
          setsnackbarMsg("Added to favourites");
          setsnackbarType("success");
          dispatch(authenticated(userdetail, accessToken, response.body.favEvents,response.body.favProducts));

         
        }
      });

      setisSaved(!isSaved);
    } else {

       Favourite({'type_id':data.id,type:'product','user_id':user,'action':'remove'}).then((response) => {
       
        if (response.error) {
          setsnackbar(true);
          setsnackbarMsg("There is some error.Please try again later");
          setsnackbarType("error");       
          dispatch(authenticated(userdetail, accessToken, response.body.favEvents,response.body.favProducts));
        } else {
          setsnackbar(true);
          setsnackbarMsg("Removed from favourites");
          setsnackbarType("success");
          dispatch(authenticated(userdetail, accessToken, response.body.favEvents,response.body.favProducts));
         
        }
      });

      setisSaved(!isSaved);
    }
  };

   const handlesnackbar = () => {
    setsnackbar(!snackbar);
  };
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

  const _toggleShowVideo=(url)=> {
  
    setshowVideo(!showVideo);
  }

  // function _resetVideo(index) {
  //   setshowVideo(false)
  //   console.debug('slid to index', index);
  // }

  // function _onSlide() {
  //   _resetVideo();
  // }

  useEffect(() => {
    setproduct(data);
    if (data.images) {
      let imgArr = [];
      let self = this
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
      setimages(imgArr);
    }
    // setproducts(data);
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
  
const authUser = useSelector((state) => state.auth_user);


  function handleChatBtn(){
    if (!authUser.user.connectycube_user) {
      alert("please Login First");
      return;
    }
      const params = {
        type: 3,
        occupants_ids: [
          authUser.user.connectycube_user.connectycube_id,
          data.seller.connectycube_user.connectycube_id,
        ],
      };

    // JS SDK v1
    ConnectyCube.chat.dialog.create(params, (error, dialog) => {});

    // JS SDK v2
    ConnectyCube.chat.dialog
      .create(params)
      .then((dialog) => {
        // store.dispatch(chatDialog(dialog));
        Router.push("/chat");
      })
      .catch((error) => {});
  }

  const classes = useStyles();

  if (!data || !data.seller) return null;
  console.log("data", data);


  return (
    <section className={classes.section}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12} className={classes.grid}>

            <Snackbar
            open={snackbar}
            autoHideDuration={6000}
            onClose={handlesnackbar}
          >
            <Alert onClose={handlesnackbar} severity={snackbarType}>
              {snackbarMsg}
            </Alert>
          </Snackbar>
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
                    <Typography className={classes.heading}>Title</Typography>
                    <Typography variant="h6">{data.title}</Typography>
                  </Box>
                  <Box className={classes.box}>
                    <Typography className={classes.heading}>
                      College Name
                    </Typography>
                    <Typography variant="h6">
                      {data.university ? data.university.name : ""}
                    </Typography>
                  </Box>
                  <Box className={classes.Pricebox}>
                    <Typography className={classes.heading}>Price</Typography>
                    <Typography variant="h4" color="primary">
                      &#8377;{data.price}
                    </Typography>
                  </Box>
                </div>
                <div className={classes.Right}>

                 {
            isSaved ?    <FavoriteIcon style={{ color: '#FC821A' }} onClick={changeRating}  id={data.id} /> : 
            <FavoriteBorderIcon style={{ color: '#FC821A' }} onClick={changeRating}  id={data.id} />  }
                
                  <ShareIcon title={data.title} url={`${process.env.APP_URL}${router.asPath}`}/>

                </div>
              </CardContent>
            </Card>
            <Card
              className={`${classes.card} ${classes.SellerCard} ${classes.spanCol2}`}
            >
              <CardContent className={classes.cardInner}>
                <div className={classes.cardHead}>
                  <div className={classes.sellerImg}>
                    <img src="/static/images/seller.png" />
                  </div>
                  <div className={classes.sellerDetails}>
                    <Box className={classes.box}>
                      <Typography className={classes.heading}>
                        Seller Name
                      </Typography>
                      <Typography variant="h6">
                        {data.seller
                          ? `${data.seller.first_name} ${data.seller.last_name}`
                          : ""}
                      </Typography>
                    </Box>
                    <Box className={classes.box}>
                      <Typography className={classes.heading}>
                        Seller Location
                      </Typography>
                      <Typography variant="h6">{data.seller && data.seller.university ? data.seller.university.name:''}</Typography>
                    </Box>
                  </div>
                </div>
                <div className={classes.cardAction}>
                  <Button
                    className={classes.primaryBtn}
                    onClick={handleChatBtn}
                  >
                    Chat With Seller
                  </Button>
                  <Link
                    href={`/profile/${data.seller.id}`}
                    // as={`/profile/${data.seller.id}`}
                  >
                    <Button className={classes.secondaryBtn}>
                      Check Seller Profile
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className={`${classes.card} ${classes.spanCol6}`}>
              <CardContent className={classes.cardBody}>
                <Typography className={classes.heading}>Description</Typography>
                { data.type == 'Rental' &&
                  <Typography className={classes.heading}>{data.type} - per {data.time_period ? data.time_period : 'month'}</Typography>
                        }
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

export default ProductDetail;
