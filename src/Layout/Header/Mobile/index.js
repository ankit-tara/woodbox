import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import { Link } from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import LiveTvRoundedIcon from '@material-ui/icons/LiveTvRounded';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import FeedbackIcon from '@material-ui/icons/Feedback';
import MoreIcon from '@material-ui/icons/More';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { commonStyles} from './styles'


const useStyles = makeStyles(theme => ({
  ...commonStyles,
}))


export default function SearchAppBar() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>
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
              <ListItem button>
                <ListItemIcon><HomeRoundedIcon /></ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon><LocalMallRoundedIcon /></ListItemIcon>
                <ListItemText primary="Buy" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon><LocalMallRoundedIcon /></ListItemIcon>
                <ListItemText primary="Rent" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon><EventNoteRoundedIcon /></ListItemIcon>
                <ListItemText primary="Event" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon><FormatListBulletedIcon /></ListItemIcon>
                <ListItemText primary="List Products" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon><FeedbackIcon /></ListItemIcon>
                <ListItemText primary="Feedback" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon><MoreIcon /></ListItemIcon>
                <ListItemText primary="More" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Drawer>
          <Link to="/">
            <img className={classes.logo} src="/static/images/logo.png" />
          </Link>
          <div className={classes.menuIcons}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-label="search"
              color="inherit"
            >
              <SearchIcon />
            </IconButton>
          </div>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
             
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            /> 
          </div>*/}
        </Toolbar>
      </AppBar>
    </div>
  );
}