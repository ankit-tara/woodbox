import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from './styles'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('md')]: desktopStyles,
  [theme.breakpoints.between('xs', 'sm')]: TabStyles,
  [theme.breakpoints.down('xs')]: mobileStyles
}))


function Footer() {
  const classes = useStyles()
  return (
    <>

      {/* Download App Section */}

      <section
        className={`${classes.section} ${classes.downloadApp}`}
        style={{ backgroundImage: "url(/static/images/download.jpg)" }}
      >
        <Container maxWidth="xl">
          <Grid container>
            <Grid item lg={8} md={8} sm={6} xs={12}>
              <Box className={classes.downloadTitle}>
                <Typography variant="h3">
                  TRY OUR APP ON YOUR MOBILE PHONE
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box className={classes.downloadContent}>
                <Typography variant="h5">GET YOUR APP TODAY</Typography>
                <div className={classes.downloadLinks}>
                  <a href="#">
                    <img src="/static/images/googleplay.png" />
                  </a>
                  <a href="#">
                    <img src="/static/images/appstore.png" />
                  </a>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
      <footer className={classes.Footer}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item lg={10} md={9} sm={9}>
              <div className={classes.FooterMenu}>
                <ul>
                  <li><p>POPULAR COLLEGES</p></li>
                  <li><Link href="/products?s=nit-jalandhar">NIT Jalandhar</Link></li>
                  <li><Link href="/products?s=nit-delhi">NIT Delhi</Link></li>
                  <li><Link href="/products?s=nit-kurukshetra">NIT Kurukshetra</Link></li>
                  <li><Link href="/products?s=nit-delhi">IIT Delhi</Link></li>
                </ul>
                <ul>
                  <li><p>EVENTS</p></li>
                  <li><Link href="/">Events in NIT Jalandhar</Link></li>
                  <li><Link href="/">Events in NIT Delhi</Link></li>
                  <li><Link href="/">Events in NIT Kurukshetra</Link></li>
                  <li><Link href="/">Events in IIT Delhi</Link></li>
                </ul>
                <ul>
                  <li><p>About Us</p></li>
                  <li><Link href="/">Our Story</Link></li>
                  <li><Link href="/">Careers</Link></li>
                  <li><Link href="/">Contact Us</Link></li>
                </ul>
                <ul>
                  <li><p>Legal</p></li>
                  <li><Link href="/">Privacy Policy</Link></li>
                  <li><Link href="/">Terms and Conditions</Link></li>
                </ul>
              </div>
            </Grid>
            <Grid item lg={2} md={3} sm={3}>
              <div className={classes.SocialMenu}>
                <ul>
                  <li><p>FOLLOW US </p></li>
                  <li><Link href="/"><FacebookIcon /></Link></li>
                  <li><Link href="/"><InstagramIcon /></Link></li>
                  <li><Link href="/"><TwitterIcon /></Link></li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </footer>
      <div className={classes.Copyright}>
        <Container maxWidth="lg">
          <Typography>2020 Copyrights All rights Reserved Website Powered by Wood Box</Typography>
        </Container>
      </div>
    </>
  );
}

export default Footer