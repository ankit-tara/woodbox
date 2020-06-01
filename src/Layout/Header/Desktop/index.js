import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Container, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import useNavbar from "../utils/useNavbar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from "./styles";
import AuthIcon from "../../../components/Login_Register";
const useStyles = makeStyles((theme) => ({
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
          <Grid item xs={8}>
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
                <Link href="/">Events</Link>
              </li>
              <li>
                <Link href="/products">List Product</Link>
              </li>
              <li>
                <Link href="/">Feedback</Link>
              </li>
              <li>
                <Link href="/">More</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={2}>
            <ul className={classes.MenuRight}>
              <li>
                <SearchIcon />
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
