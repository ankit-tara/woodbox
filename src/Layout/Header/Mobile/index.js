import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import { Link } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import AccountCircle from "@material-ui/icons/AccountCircle";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import EventNoteRoundedIcon from "@material-ui/icons/EventNoteRounded";
import LocalMallRoundedIcon from "@material-ui/icons/LocalMallRounded";
import LiveTvRoundedIcon from "@material-ui/icons/LiveTvRounded";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded";
import FeedbackIcon from "@material-ui/icons/Feedback";
import MoreIcon from "@material-ui/icons/More";
import MailIcon from "@material-ui/icons/Mail";
import CloseIcon from "@material-ui/icons/Close";
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { commonStyles } from "./styles";
import CreateIcon from "@material-ui/icons/Create";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { unauthenticated } from "../../../redux/actions/auth";

const useStyles = makeStyles((theme) => ({
  ...commonStyles,
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const accessToken = useSelector((state) => state.auth_user.accessToken);
  const user = useSelector((state) => state.auth_user.user);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const [openMenu, setOpenMenu] = React.useState(true);

  const toggleSubmenu = () => {
    setOpenMenu(!openMenu);
  };


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [opensearch, setopensearch] = React.useState(false);

  const handleSearchOpen = () => {
    setopensearch(true);
  };

  const handleSearchClose = () => {
    setopensearch(false);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const logout = () => {
    setAnchorEl(null);
    router.push("/");
    dispatch(unauthenticated());
  };

  const SearchAppBar = () => {
    return (
      <div className={classes.searchBar}>
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <InputBase className={classes.input} placeholder="Search" />
        <IconButton className={classes.closeButton} onClick={handleSearchClose}>
          <CloseIcon />
        </IconButton>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={open} className={classes.sideBar}>
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List>
                <Link href="/">
                  <ListItem button>
                    <ListItemIcon>
                      <HomeRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItem>
                </Link>
                <Divider />
                <Link href="/products/type/buy">
                  <ListItem button>
                      <ListItemIcon>
                        <LocalMallRoundedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Buy" />
                  </ListItem>
                </Link>
                <Divider />
                <Link href="/products/type/rent">
                  <ListItem button>
                    <ListItemIcon>
                      <LocalMallRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Rent" />
                  </ListItem>
                </Link>
                <Divider />
                <Link href="/comming-soon">
                  <ListItem button>
                    <ListItemIcon>
                      <EventNoteRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Event" />
                  </ListItem>
                </Link>
                <Divider />
                <Link href="/post">
                  <ListItem button>
                    <ListItemIcon>
                      <FormatListBulletedIcon />
                    </ListItemIcon>
                    <ListItemText primary="List Products" />
                  </ListItem>
                </Link>
                <Divider />
                <Link href="/comming-soon">
                  <ListItem button>
                    <ListItemIcon>
                      <FeedbackIcon />
                    </ListItemIcon>
                    <ListItemText primary="Feedback" />
                  </ListItem>
                </Link>
                <Divider />
                <ListItem button onClick={toggleSubmenu}>
                  <ListItemIcon>
                    <MoreIcon />
                  </ListItemIcon>
                  <ListItemText primary="More" />
                  {openMenu ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openMenu} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Link href="/comming-soon">
                      <ListItem button>
                        <ListItemIcon>
                          <FeedbackIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                      </ListItem>
                    </Link>
                    <Link href="/comming-soon">
                      <ListItem button>
                        <ListItemIcon>
                          <FeedbackIcon />
                        </ListItemIcon>
                        <ListItemText primary="Privacy Policy" />
                      </ListItem>
                    </Link>
                    <Link href="/comming-soon">
                      <ListItem button>
                        <ListItemIcon>
                          <FeedbackIcon />
                        </ListItemIcon>
                        <ListItemText primary="Terms &amp; Conditions" />
                      </ListItem>
                    </Link>
                  </List>
                </Collapse>
                <Divider />
                {accessToken && (
                  <>
                    <Link href="/profile">
                      <ListItem button>
                        <ListItemIcon>
                          <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary="View Profile" />
                      </ListItem>
                    </Link>
                    <Divider />
                    <Link href="/profile/edit">
                      <ListItem button>
                        <ListItemIcon>
                          <CreateIcon />
                        </ListItemIcon>
                        <ListItemText primary="Edit Profile" />
                      </ListItem>
                    </Link>
                    <Divider />
                    <ListItem button onClick={logout}>
                      <ListItemIcon>
                        <ExitToAppIcon />
                      </ListItemIcon>
                      <ListItemText primary="Logout" />
                    </ListItem>
                  </>
                )}
              </List>
            </Drawer>
            <Link href="/">
              <img className={classes.logo} src="/static/images/logo.png" />
            </Link>
            <div className={classes.menuIcons}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="search"
                color="inherit"
                onClick={handleSearchOpen}
              >
                <SearchIcon />
              </IconButton>

              {opensearch && <SearchAppBar />}
            </div>
          </Toolbar>
        </AppBar>
      </ClickAwayListener>
    </div>
  );
}
