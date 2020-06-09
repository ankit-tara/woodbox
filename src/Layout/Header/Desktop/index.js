import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Container, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import useNavbar from "../utils/useNavbar";
import InputBase from '@material-ui/core/InputBase';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from "./styles";
import AuthIcon from "../../../components/Login_Register";
const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    border:'solid 1px #ccc',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  ...commonStyles,
  [theme.breakpoints.up("md")]: desktopStyles,
  [theme.breakpoints.down("md")]: TabStyles,
}));
import Link from "next/link";

function Header({ modalOpen }) {
  const { isScrolled, navBarRef } = useNavbar();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <nav
      id="navbar"
      className={classNames(classes.root, isScrolled && classes.scrolled)}
      ref={navBarRef}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={2}>
            <Link href="/">
              <img
                className={classNames(
                  classes.logo,
                  isScrolled && classes.logoScrolled
                )}
                src="/static/images/logo.png"
              />
            </Link>
          </Grid>
          <Grid item xs={6}>
            <ul className={classes.Menu}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products/type/buy">Buy</Link>
              </li>
              <li>
                <Link href="/products/type/rental">Rent</Link>
              </li>
              <li>
                <Link href="/coming-soon">Events</Link>
              </li>
              <li>
                <Link href="/post">List Product</Link>
              </li>
              <li>
                <Link href="/coming-soon">Feedback</Link>
              </li>
              <li>
                <Link href="/coming-soon">More</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={4}>
            <ul className={classes.MenuRight}>
              <li>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
              </li>
              <li>
                <ChatIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AuthIcon />
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </nav>
  );
}

export default Header;
