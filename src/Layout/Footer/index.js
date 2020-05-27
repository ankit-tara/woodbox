import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Link, Typography } from '@material-ui/core'
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from './styles'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

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
      <footer className={classes.Footer}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item lg={10} md={9} sm={9}>
              <div className={classes.FooterMenu}>
                <ul>
                  <li><p>POPULAR COLLEGES</p></li>
                  <li><Link to="/">NIT Jalandhar</Link></li>
                  <li><Link to="/">NIT Delhi</Link></li>
                  <li><Link to="/">NIT Kurukshetra</Link></li>
                  <li><Link to="/">IIT Delhi</Link></li>
                </ul>
                <ul>
                  <li><p>EVENTS</p></li>
                  <li><Link to="/">Events in NIT Jalandhar</Link></li>
                  <li><Link to="/">Events in NIT Delhi</Link></li>
                  <li><Link to="/">Events in NIT Kurukshetra</Link></li>
                  <li><Link to="/">Events in IIT Delhi</Link></li>
                </ul>
                <ul>
                  <li><p>About Us</p></li>
                  <li><Link to="/">Our Story</Link></li>
                  <li><Link to="/">Careers</Link></li>
                  <li><Link to="/">Contact Us</Link></li>
                </ul>
                <ul>
                  <li><p>Legal</p></li>
                  <li><Link to="/">Privacy Policy</Link></li>
                  <li><Link to="/">Terms and Conditions</Link></li>
                </ul>
              </div>
            </Grid>
            <Grid item lg={2} md={3} sm={3}>
              <div className={classes.SocialMenu}>
                <ul>
                  <li><p>FOLLOW US </p></li>
                  <li><Link to="/"><FacebookIcon /></Link></li>
                  <li><Link to="/"><InstagramIcon /></Link></li>
                  <li><Link to="/"><TwitterIcon /></Link></li>
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