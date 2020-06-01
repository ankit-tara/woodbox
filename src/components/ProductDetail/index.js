import React ,{useState,useEffect}from "react";
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

const useStyles = makeStyles((theme) => ({
  ...commonStyles,
  [theme.breakpoints.up("sm")]: desktopStyles,
  [theme.breakpoints.down("sm")]: mobileStyles,
}));

// const images = [
//   {
//     original: "/static/images/bike1.jpg",
//     thumbnail: "/static/images/bike1.jpg",
//   },
//   {
//     original: "/static/images/bike2.jpg",
//     thumbnail: "/static/images/bike2.jpg",
//   },
//   {
//     original: "/static/images/bike3.jpg",
//     thumbnail: "/static/images/bike3.jpg",
//   },
//   {
//     original: "/static/images/bike4.jpg",
//     thumbnail: "/static/images/bike4.jpg",
//   },
// ];

const ProductDetail = ({ data }) => {
  const [product, setproduct] = useState({});
  const [images, setimages] = useState([]);

  useEffect(() => {
    setproduct(data);
    if (data.images) {
      let imgArr = [];
      data.images.map((item) =>
        imgArr.push({
          original: item.link,
          thumbnail: item.link,
        })
      );

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

  const classes = useStyles();

  console.log("data", data);
  if(!data) return null

  return (
    <section className={classes.section}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Card className={classes.card}>
              <CardContent className={classes.cardBody}>
                <div className={classes.Gallery}>
                  <ImageGallery items={images} />
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Card className={classes.card}>
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
                      ${data.price}
                    </Typography>
                  </Box>
                </div>
                <div className={classes.Right}>
                  <FavoriteBorderIcon />
                  <ShareOutlinedIcon />
                </div>
              </CardContent>
            </Card>
            <Card className={`${classes.card} ${classes.SellerCard}`}>
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
                      <Typography variant="h6">{data.seller ?`${data.seller.first_name} ${data.seller.last_name}`:''}</Typography>
                    </Box>
                    <Box className={classes.box}>
                      <Typography className={classes.heading}>
                        Seller Location
                      </Typography>
                      <Typography variant="h6">RIMT College</Typography>
                    </Box>
                  </div>
                </div>
                <div className={classes.cardAction}>
                  <Button className={classes.primaryBtn}>
                    Chat With Seller
                  </Button>
                  <Button className={classes.secondaryBtn}>
                    Check Seller Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Card className={classes.card}>
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

export default ProductDetail;
