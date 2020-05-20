import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Card, Container, Grid, CardContent, Typography } from '@material-ui/core'
import ImageGallery from 'react-image-gallery'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import { commonStyles, desktopStyles, mobileStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('sm')]: desktopStyles,
  [theme.breakpoints.down('sm')]: mobileStyles
}))


const images = [
  {
    original: '/static/images/bike1.jpg',
    thumbnail: '/static/images/bike1.jpg',
  },
  {
    original: '/static/images/bike2.jpg',
    thumbnail: '/static/images/bike2.jpg',
  },
  {
    original: '/static/images/bike3.jpg',
    thumbnail: '/static/images/bike3.jpg',
  },
  {
    original: '/static/images/bike4.jpg',
    thumbnail: '/static/images/bike4.jpg',
  },
];


const ProductDetail = () => {


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

  const classes = useStyles()

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
                    <Typography variant="h6">Fat Immortal cycle</Typography>
                  </Box>
                  <Box className={classes.box}>
                    <Typography className={classes.heading}>College Name</Typography>
                    <Typography variant="h6">Gulzar Group of Institute</Typography>
                  </Box>
                  <Box className={classes.Pricebox}>
                    <Typography className={classes.heading}>Price</Typography>
                    <Typography variant="h4" color="primary" >$2500</Typography>
                  </Box>
                </div>
                <div className={classes.Right}>
                  <FavoriteBorderIcon/>
                  <ShareOutlinedIcon/>
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
                      <Typography className={classes.heading}>Seller Name</Typography>
                      <Typography variant="h6">Sidharth  Woodbox</Typography>
                    </Box>
                    <Box className={classes.box}>
                      <Typography className={classes.heading}>Seller Location</Typography>
                      <Typography variant="h6">RIMT College</Typography>
                    </Box>
                  </div>

                </div>
                <div className={classes.cardAction}>
                  <Button className={classes.primaryBtn}>Chat With Seller</Button>
                  <Button className={classes.secondaryBtn}>Check Seller Profile</Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Card className={classes.card}>
              <CardContent className={classes.cardBody}>
                <Typography className={classes.heading}>Discription</Typography>
                <Typography className={classes.paragraph}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet  dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default ProductDetail
