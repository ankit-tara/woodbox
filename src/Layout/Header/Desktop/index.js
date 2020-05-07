import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import { Container, Grid, Link } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useNavbar from '../utils/useNavbar'
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from '../styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('sm')]: desktopStyles,
  [theme.breakpoints.between('xs', 'sm')]: TabStyles,
  [theme.breakpoints.down('xs')]: mobileStyles
}))

function Header({ data }) {

  const { isScrolled, navBarRef } = useNavbar()

  const classes = useStyles()

  return (
    <nav
      id='navbar'
      className={classNames(classes.root, isScrolled && classes.scrolled)}
      ref={navBarRef}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={2}>
            <Link to="/">
              <img className={classNames(classes.logo, isScrolled && classes.logoScrolled)} src="/static/images/logo.png" />
            </Link>
          </Grid>
          <Grid item xs={8}>
            <ul className={classes.Menu}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Buy</Link></li>
              <li><Link to="/">Rent</Link></li>
              <li><Link to="/">Events</Link></li>
              <li><Link to="/">List Product</Link></li>
              <li><Link to="/">Feedback</Link></li>
              <li><Link to="/">More</Link></li>
            </ul>
          </Grid>
          <Grid item xs={2}>
            <ul className={classes.MenuRight}>
              <li><SearchIcon /></li>
              <li><ChatIcon /></li>
              <li><NotificationsNoneIcon /></li>
              <li><AccountCircleIcon /></li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </nav>
  )
}

export default Header