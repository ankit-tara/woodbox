import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import classNames from "classnames";
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from './styles'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link';
import moment from 'moment';

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

      {/* <section
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
      </section> */}
      <footer className={classes.Footer}>
        <Container maxWidth="xl">
          <Grid container>
          <Grid item lg={4} md={3} sm={3}>
            <Link href="/">
                <img
                  className={classes.logo}
                  src="/static/images/logofooter.png"
                />
              </Link>
              <div className={classes.SocialMenu}>
                <p className={classes.compInfo}>Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit</p>
                <ul>
                  <li><p>FOLLOW US </p></li>
                  <li><Link href="/"><FacebookIcon color="#fff" /></Link></li>
                  <li><Link href="/"><InstagramIcon color="#fff" /></Link></li>
                  <li><Link href="/"><TwitterIcon color="#fff" /></Link></li>
                  <li><Link href="/"><YouTubeIcon color="#fff" /></Link></li>
                  <li><Link href="/"><LinkedInIcon color="#fff" /></Link></li>
                </ul>
              </div>
            </Grid>
            <Grid item lg={8} md={9} sm={9}>
              <div className={classes.FooterMenu}>
                <ul>
                  <li><p>POPULAR COLLEGES</p></li>
                  <li><Link href="/products?s=nit-jalandhar">NIT Jalandhar</Link></li>
                  <li><Link href="/products?s=nit-delhi">NIT Delhi</Link></li>
                  <li><Link href="/products?s=nit-kurukshetra">NIT Kurukshetra</Link></li>
                  <li><Link href="/products?s=nit-delhi">IIT Delhi</Link></li>
                </ul>
                <ul>
                  <li><p>Useful Links</p></li>
                  <li><Link href="/">About</Link></li>
                  {/* <li><Link href="/">Careers</Link></li> */}
                  <li><Link href="/">Privacy Policy</Link></li>
                  <li><Link href="/">Terms and Conditions</Link></li>
                </ul>
                <ul className={classes.contactDetails}>
                  <li><p>Contact</p></li>
                  <li><span><HomeIcon color="#fff" />Jalandhar, Punjab</span></li>
                  <li><a href="mailto:collegeplus@gmail.com"><MailIcon color="#fff" />collegeplus@gmail.com</a></li>
                  <li><a href="tel:+917351586148"><PhoneIcon color="#fff" />+ 91 735 158 6148</a></li>
                  <li><a href="tel:+917351586148"><PhoneIcon color="#fff" />+ 91 735 158 6148</a></li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </footer>
      <div className={classes.Copyright}>
        <Container maxWidth="lg">
          <Typography>{moment().year()} Copyrights All rights Reserved Website Powered by <a href="https://www.woodboxdigital.com/" target="_blank">Wood Box</a></Typography>
        </Container>
      </div>
    </>
  );
}

export default Footer