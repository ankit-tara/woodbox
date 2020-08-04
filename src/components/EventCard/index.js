import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography, Link } from '@material-ui/core'
import StarRatings from 'react-star-ratings'
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { DeleteEvent } from "../../apis/auth-api";
import { useRouter } from "next/router";

import { commonStyles, desktopStyles, mobileStyles, TabStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('sm')]: desktopStyles,
  [theme.breakpoints.between('xs', 'sm')]: TabStyles,
  [theme.breakpoints.down('xs')]: mobileStyles
}))

function EventCard({ data, isAuthUser = false }) {

  const [isSaved, setisSaved] = React.useState(data.saved)
  const [eventStar, seteventStar] = React.useState(isSaved ? 1 : 0)
  const [snackbar, setsnackbar] = React.useState(false);
  const [snackbarMsg, setsnackbarMsg] = React.useState("");
  const [snackbarType, setsnackbarType] = React.useState("success");

  const router = useRouter();

  const classes = useStyles()

  const changeRating = () => {
    if (!isSaved && eventStar == 0) {
      seteventStar(1)
      setisSaved(!isSaved)
    }
    else {
      seteventStar(0)
      setisSaved(!isSaved)
    }
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    router.push("/post/event/edit/" + data.id);
  };
  const handleDelete = () => {
      DeleteEvent(data, data.id).then((response) => {
      console.log(response);
      if (response.error) {
        setsnackbar(true);
        setsnackbarMsg("There is some error.Please try again later");
        setsnackbarType("error");
        console.log(response.error);
      } else {
        setsnackbar(true);
        setsnackbarMsg("Deleted");
        setsnackbarType("success");
        location.reload();
      }
    });
  };

  return (
    <Card className={`${classes.card} event__card`}>
      {/* <img src={data.image.url} alt="" className={classes.image} /> */}
      {data.images.length > 0 && (
        <Link href={`/events/item/${data.id}`}>
          <img
            src={data.images[0].thumbnail_link}
            alt=""
            className={classes.image}
            />
          </Link>
      )}
      <CardContent
        className={
          isSaved
            ? `${classes.cardInner} ${classes.Orangecard} `
            : `${classes.cardInner}`
        }
      >
        <div className={classes.flex}>
          <Typography variant="h6" className={classes.title}>
            {data.title.length >= 25 && (
              <Link href={`/events/item/${data.id}`}>
                {data.title.substring(0, 25) + "..."}{" "}
              </Link>
            )}
            {data.title.length < 25 && (
              <Link href={`/events/item/${data.id}`}>{data.title}</Link>
            )}
          </Typography>
          
          {isAuthUser && (

            <div>
             
              <MoreVertIcon
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              ></MoreVertIcon>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
              </Menu>
            </div>
          )}
          {!isAuthUser && (
            <StarRatings
              rating={eventStar}
              starRatedColor="#FC821A"
              starHoverColor="#FC821A"
              changeRating={changeRating}
              starDimension="24px"
              numberOfStars={1}
              id={data.id}
            />
          )}
         
        </div>
        <Typography variant="h6" className={classes.date}>
          {data.active ? 'Active' : 'Inactive'}
        </Typography>
        <div className={classes.flex}>
          <Typography className={classes.date}>{data.event_date}</Typography>
          <Typography
            className={
              isSaved
                ? `${classes.price} ${classes.Orangeprice} `
                : `${classes.price}`
            }
          >
            &#8377;{data.price}
          </Typography>
        </div>
        <div className={classes.cardBody}>
          <Typography className={classes.excerpt}>
            {data.description.substring(0, 35) + "..."}{" "}
          </Typography>
          {data.university.name.length >= 25 && (
            <Typography className={classes.college}>
              {data.university.name.substring(0, 25) + "..."}{" "}
            </Typography>
          )}
          {data.university.name.length < 25 && (
            <Typography className={classes.college}>
              {data.university.name}
            </Typography>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default EventCard