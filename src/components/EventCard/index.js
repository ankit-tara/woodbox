import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography, Link } from '@material-ui/core'
import StarRatings from 'react-star-ratings'

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

  return (
    <Card className={classes.card}>
      {/* <img src={data.image.url} alt="" className={classes.image} /> */}
      {data.images.length > 0 && (
        <img
          src={data.images[0].thumbnail_link}
          alt=""
          className={classes.image}
        />
      )}
      <CardContent className={isSaved ? `${classes.cardInner} ${classes.Orangecard} ` : `${classes.cardInner}`}>
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
        <div className={classes.flex}>
          <Typography className={classes.date}>{data.event_date}</Typography>
          <Typography className={isSaved ? `${classes.price} ${classes.Orangeprice} ` : `${classes.price}`}>
            &#8377;{data.price}
          </Typography>
        </div>
        <div className={classes.cardBody}>
          <Typography className={classes.excerpt}>{data.description.substring(0, 35) + "..."}{" "}</Typography>
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
  )
}

export default EventCard